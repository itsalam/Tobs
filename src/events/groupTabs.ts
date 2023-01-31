

export default async function groupTabs(config?: {duplicate_action: string}): Promise<void> {
  let tabs = await chrome.tabs.query({ currentWindow: true, highlighted: true })
  if (tabs.length <= 1) {
    tabs = await chrome.tabs.query({
      currentWindow: true
    })
  }

  let tabGroups: Map<string, Map<string, chrome.tabs.Tab>> = new Map<string, Map<string, chrome.tabs.Tab>>();
  const duplicates: chrome.tabs.Tab[] =  [];
  for (const tab of tabs) {
    if (tab.url == null) {
      continue;
    }
    const url = new URL(tab.url);
    const hostname = url.hostname
      .replace("www.", "")
      .split(".")
      .slice(0, -1)
      .join(".");
    if (tabGroups.has(hostname)) {
      const tabGroup = tabGroups.get(hostname);
      if (tabGroup?.has(url.toString()) ?? false) {
        duplicates.push(tab)
      }
      tabGroups.get(hostname)?.set(url.toString(), tab);
    } else {
      tabGroups.set(hostname, new Map([[url.toString(), tab]]));
    }
  }
  // if (duplicates){
  //   chrome.runtime.sendMessage({type: EVENTS.HANDLE_DUPLICATE, tabs})
  // }
  tabGroups = filterGroups(tabGroups);
  void createTabGroups(tabGroups);
}

async function createTabGroups(tabGroups: Map<string, Map<string, chrome.tabs.Tab>>): Promise<void> {
  tabGroups.forEach((tabGroup, hostname) => {
    const tabGroupVals = Array.from(tabGroup.values()).map((tab) => tab.id);
    const tabIds: number[] = tabGroupVals.flatMap(id => id !== null? [id] : []) as number[] ;
    chrome.tabs.group({ tabIds }, (groupId) =>
      {
        void chrome.tabGroups.update(groupId, { title: hostname, collapsed: true });
      }
    );
  });
}

function filterGroups(tabGroups: Map<string, Map<string, chrome.tabs.Tab>>):  Map<string, Map<string, chrome.tabs.Tab>> {
  tabGroups.forEach((tabGroup, hostname) => {
    if (tabGroup.size === 1) {
      tabGroups.delete(hostname);
    }
  });
  return tabGroups;
}

// async function getImgColor(imgSrc: string){
//   // const img = new Image();
//   // resolve(process.cwd(), 'rainbow.png');
//   console.log("getting colorz!!")
//   // await new FastAverageColor().getColorAsync(imgSrc).then(color => console.log(color))
//   // img.addEventListener('load', function() {
//   //   getColor(imgSrc, 1).then(console.log); 
//   // });
  
//   // img.crossOrigin = 'Anonymous';
//   // img.src = imgSrc;
// }
