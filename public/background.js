/* global chrome */
console.log('CHROME BACKGROUND');
chrome.browserAction.setBadgeText({ text: '1' });

chrome.runtime.onInstalled.addListener((details) => {
  console.log(details);
});

showNotification('IAS', 'Test message notifications');

function showNotification(_title, _body){
  chrome.notifications.create({
    title: _title,
    message: _body,
    type: 'basic',
    iconUrl: 'icon_192x192.png'
  });
}
