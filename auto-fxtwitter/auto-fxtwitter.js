function modifyClipboard(event) {
    const clipboardText = window.getSelection().toString()
    if (clipboardText.includes("x.com") || clipboardText.includes("twitter.com")) {
        const modifiedText = clipboardText
            .replace(/twitter\.com/g, "fxtwitter.com")
            .replace(/x\.com/g, "fixupx.com")
            .replace(/\?.*$/, '');
        navigator.clipboard.writeText(modifiedText)
            .then(() => {console.log("Successfully modified clipboard: " + modifiedText)})
            .catch((error) => {console.error("Failed to modify clipboard: " + error)});
        event.preventDefault();
    }
}

document.addEventListener("copy", modifyClipboard);
