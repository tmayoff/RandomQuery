function Randomize() {
	browser.tabs.executeScript({
		file: "redirect.js"
	})
	return
} 
browser.browserAction.onClicked.addListener(Randomize);