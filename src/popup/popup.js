/* CREATED BY ILFEY */

document.getElementById('themeSwitcher').addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "switchTheme" });
    });
})

/* CREATED BY ILFEY */