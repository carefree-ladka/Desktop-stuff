function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

function throttle(fn, delay) {
  let now = 0;
  return function (...args) {
    let last = new Date().getTime();
    if (now - last < delay) return;
    now = last;
    return fn(...args);
  };
}
