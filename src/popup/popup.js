chrome.storage.local.get("theme", function(result) {
    if(result.theme == "dark"){
        document.getElementById("themeSwitcher").checked = "true"
    }
});

document.getElementById('themeSwitcher').addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "switchTheme" });
    });
})
