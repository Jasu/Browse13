var tabs = {};

chrome.tabs.onUpdated.addListener(function(tabId, props, tab) {
  if (tab.url.indexOf('http://') === 0 || tab.url.indexOf('https://') === 0)
  {
    chrome.pageAction.show(tabId);
  }
  if (props.status == "complete" && tabs[tabId])
  {
    chrome.pageAction.setIcon({ 
      tabId: tabId,
      path: 'icon_enabled.png'
    });
    chrome.tabs.executeScript(tabId, { file: 'pagescript.js' });
  }
});


chrome.tabs.onActivated.addListener(function (activeInfo) {
  if (tabs[activeInfo.tabId]) {
    chrome.pageAction.setIcon({ 
      tabId: activeInfo.tabId,
      path: 'icon_enabled.png'
    });
  }
  else {
    chrome.pageAction.setIcon({ 
      tabId: activeInfo.tabId,
      path: 'icon_disabled.png' 
    });
  }
});

chrome.tabs.onRemoved.addListener(function(tabId) {
  delete tabs[tabId];
});

chrome.pageAction.onClicked.addListener(function (tab) {
  if (tabs[tab.id]) {
    tabs[tab.id] = false;
    chrome.pageAction.setIcon({
      tabId: tab.id,
      path: 'icon_disabled.png'
    });
  }
  else {
    tabs[tab.id] = true;
    chrome.pageAction.setIcon({
      tabId: tab.id,
      path: 'icon_enabled.png' 
    });
  }

  chrome.tabs.executeScript(tab.id, { file: 'pagescript.js' });
});
