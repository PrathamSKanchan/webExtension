"use strict"
// service-worker.js
console.log('Service worker is running.');

// popup.js or background.js
chrome.action.onClicked.addListener(tab => {
    console.log('Extension icon clicked on tab:', tab);
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            alert(`Hello from my extension! tab: ${this}`);
        }
    }).catch(err => console.error('Error executing script:', err));
});
