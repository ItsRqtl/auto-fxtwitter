document.addEventListener("DOMContentLoaded", () => {
    const enabledCheckbox = document.getElementById("replaceCheckbox");
    const replaceDomainInput = document.getElementById("replaceDomainInput");
    const removeParamsCheckbox = document.getElementById("removeParamsCheckbox");

    chrome.storage.sync.get(
        {
            enabled: true,
            replaceDomain: "fxtwitter.com",
            removeParams: true,
        },
        (preferences) => {
            enabledCheckbox.checked = preferences.enabled;
            replaceDomainInput.value = preferences.replaceDomain;
            removeParamsCheckbox.checked = preferences.removeParams;
        }
    );

    enabledCheckbox.addEventListener("change", savePreferences);
    replaceDomainInput.addEventListener("input", savePreferences);
    removeParamsCheckbox.addEventListener("change", savePreferences);
});

function savePreferences() {
    const preferences = {
        enabled: document.getElementById("replaceCheckbox").checked,
        replaceDomain: document.getElementById("replaceDomainInput").value,
        removeParams: document.getElementById("removeParamsCheckbox").checked,
    };
    chrome.storage.sync.set(preferences, () => {});
}
