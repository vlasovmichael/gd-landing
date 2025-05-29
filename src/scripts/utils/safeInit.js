export function safeInit(selector, callback) {
  const el = document.querySelector(selector);
  if (el) callback(el);
}
