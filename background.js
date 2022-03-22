

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

    if (/youtube/.test(tab.url) && /shorts/.test(tab.url)) {
        chrome.tabs.update(
            tabId = tabId,
            updateProperties = {
                url: tab.url.replace('shorts/', 'watch?v=')
            }
        )
    }
  });