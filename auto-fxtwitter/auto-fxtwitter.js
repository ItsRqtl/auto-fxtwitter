function modifyClipboard(event) {
    let clipboardText = window.getSelection().toString();

    if (clipboardText === "") {
        clipboardText = window.location.href;
        if (!clipboardText.match(/(twitter|x)\.com\/.{4,15}\/status\/\d+/)) {
            return;
        }
    }

    if (clipboardText.includes("x.com") || clipboardText.includes("twitter.com")) {
        chrome.storage.sync.get(
            {
                enabled: true,
                replaceDomain: "fxtwitter.com",
                removeParams: true,
            },
            (preferences) => {
                if (!preferences.enabled) {
                    return;
                }

                let modifiedText = clipboardText.replace(
                    /(?:twitter|x)\.com/g,
                    preferences.replaceDomain
                );
                if (preferences.removeParams) {
                    modifiedText = modifiedText.replace(/\?.*$/, "");
                }

                navigator.clipboard
                    .writeText(modifiedText)
                    .then(() => {
                        console.log("Successfully modified clipboard: " + modifiedText);
                    })
                    .catch((error) => {
                        console.error("Failed to modify clipboard: " + error);
                    });

                event.preventDefault();
            }
        );
    }
}

document.addEventListener("copy", modifyClipboard);
