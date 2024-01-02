document.addEventListener("DOMContentLoaded", () => {
    const enabled = document.getElementById("replace");
    const replaceDomain = document.getElementById("replaceDomain");
    const removeParams = document.getElementById("removeParams");

    chrome.storage.sync.get(
        {
            enabled: true,
            replaceDomain: "fxtwitter.com",
            removeParams: true,
        },
        (preferences) => {
            enabled.checked = preferences.enabled;
            replaceDomain.value = preferences.replaceDomain;
            removeParams.checked = preferences.removeParams;
        }
    );

    enabled.addEventListener("change", savePreferences);
    replaceDomain.addEventListener("", savePreferences);
    removeParams.addEventListener("change", savePreferences);
});

function savePreferences() {
    const preferences = {
        enabled: document.getElementById("replace").checked,
        replaceDomain: document.getElementById("replaceDomain").value,
        removeParams: document.getElementById("removeParams").checked,
    };
    chrome.storage.sync.set(preferences, () => {});
}
