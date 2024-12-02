# Basic Chrome Extension Demo  

This repository contains a simple Chrome extension built for testing and demonstration purposes.  

## Features  
- **HTML UI**: Displays a basic HTML popup with a button.  
- **Background Service Worker**: Listens for events and executes scripts.  
- **Permissions**: Allows scripting and interacting with active tabs.  

## Installation  
1. Clone this repository.  
2. Go to `chrome://extensions` in your Chrome browser.  
3. Enable **Developer Mode** (toggle at the top right).  
4. Click on **Load unpacked** and select the repository folder.  

## Usage  
- Click on the extension icon to see the popup.  
- Press the button in the popup to execute a script that interacts with the active tab.  

## File Overview  
- **manifest.json**: Configuration for the Chrome extension.  
- **service-worker.js**: Background script for handling events.  
- **index.html**: Basic popup interface.  
- **index.js**: Logic for popup interactions.  
- **icon48.png**: Icon used for the extension.  

Happy coding!
