console.info('background script activated');

chrome.runtime.onMessage.addListener((request, sender, response) => {
  console.log(request);
  console.log(sender);
  console.log(response);
});

export {};
