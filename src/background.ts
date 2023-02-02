"use strict";

import { EVENTS, type Message } from "./events";
import groupTabs from "./events/groupTabs";

async function injectSettings(): Promise<Document>{
    function detectOutsideClick(event: any): void {
      const iframe = document.getElementById("crx-root");
      console.log(iframe)
      if (iframe != null && !iframe?.contains(event.target as Node)) {
          iframe?.remove()
          document.removeEventListener("click", detectOutsideClick);
      }
    }

    document.addEventListener("click", detectOutsideClick);
    console.log(document)
    const src = chrome.runtime.getURL("settings.html");
    const iframe = new DOMParser().parseFromString(
      `<iframe id="crx-root" class="crx" style="position: fixed; right: 15px; top: 15px; z-index: 100000; width: 420px; height: 370px; border-radius: 1em; border: none;" src="${src}"></iframe>`, "text/html")
      .body.firstElementChild
    if (iframe != null) {
      document.body.append(iframe)
    }
    return (document)
};

chrome.action.onClicked.addListener(function(tab) {
  if(tab.id !== undefined){
    openSettings(tab?.id).then(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      (res) => {console.log(res)},
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
      target: { tabId: activeTabId },
      func: injectSettings
    });
}
