// Seems to complain about types in chrome
function detectOutsideClick(event: MouseEvent): void {
  const iframe = document.getElementById("crx-iframe");
  console.log(iframe)
  if (iframe != null && !iframe?.contains(event.target as Node)) {
      iframe?.remove()
      document.removeEventListener("click", detectOutsideClick);
  }
}

void (async () => {

    document.addEventListener("click", detectOutsideClick);

    const src = chrome.runtime.getURL('settings.html');
    const iframe = new DOMParser().parseFromString(
      `<iframe id="crx-iframe" class="crx" style="position: fixed; right: 15px; top: 15px; z-index: 100000; width: 26rem; height: 20rem; border-radius: 1em; border: none;" src="${src}"></iframe>`, "text/html")
      .body.firstElementChild
    if (iframe != null) {
      document.body.append(iframe)
    }
  })();


