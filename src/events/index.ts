export interface Message {
    event: EVENTS;
    payload: PayloadArgs
}

export interface PayloadArgs {
  activeTab?: chrome.tabs.Tab;
}

export const enum EVENTS {
  FILTER_TABS,
  HANDLE_DUPLICATE,
  OPEN_SETTINGS
}
