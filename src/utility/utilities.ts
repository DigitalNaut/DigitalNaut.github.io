export function openInNewTab(url: string) {
  let win = window.open(url, "_blank");
  if (win) win.focus();
}