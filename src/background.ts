'use strict';

import { EVENTS, type Message } from "./events";
import groupTabs from "./events/groupTabs";


chrome.action.onClicked.addListener(function(tab) {
  console.log(tab)
  if(tab.id !== undefined){
    openSettings(tab?.id).then(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      () => {},
      (err) => {
        throw(err)
      }  
    )
  } 
});

chrome.runtime.onMessage.addListener((message: Message, sender, sendResponse) => {
  console.log("Reached Background.js");
  console.log({message})
  if (message.event === EVENTS.FILTER_TABS) {
    groupTabs().then(
      () => { 
        sendResponse({farewell: "Tabs Grouped!"})
      },
      (err) => {
        sendResponse({err})
      }  
    );
  }
});

async function openSettings(activeTabId: number): Promise<Array<chrome.scripting.InjectionResult<unknown>>> {   
    return await chrome.scripting.executeScript({
      target: { tabId: activeTabId},
      files: ["src/content-script.ts"]
    });
}
