async function sayHello() {
    let [tab] = await chrome.tabs.query({active: true})
    chrome.scripting.executeScript({
        target:{tabId: tab.id},
        func: () => {
            document.body
            alert('Hello from Extension!')
        }
    })
}
document.getElementById('btn')?.addEventListener('click', () => {
    sayHello()
})