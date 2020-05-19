import Vue from 'vue'

export function isDef (value) {
  return value !== undefined && value !== null
}

export const isServer = Vue.prototype.$isServer
export let supportsPassive = false

export function on (target, event, handler, passive = false) {
  if (!isServer) {
    target.addEventListener(
      event,
      handler,
      supportsPassive ? { capture: false, passive } : false
    )
  }
}

export function off (target, event, handler) {
  if (!isServer) {
    target.removeEventListener(event, handler)
  }
}

const overflowScrollReg = /scroll|auto/i
export function getScrollEventTarget (element, rootParent = window) {
  let node = element
  while (
    node &&
    node.tagName !== 'HTML' &&
    node.nodeType === 1 &&
    node !== rootParent
  ) {
    const { overflowY } = window.getComputedStyle(node);
    if (overflowScrollReg.test(overflowY)) {
      if (node.tagName !== 'BODY') {
        return node
      }

      // see: https://github.com/youzan/vant/issues/3823
      const { overflowY: htmlOverflowY } = window.getComputedStyle(node.parentNode);
      if (overflowScrollReg.test(htmlOverflowY)) {
        return node
      }
    }
    node = node.parentNode
  }
  return rootParent
}

export function getScrollTop (element) {
  return 'scrollTop' in element ? element.scrollTop : element.pageYOffset
}

export function getRootScrollTop () {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

// get distance from element top to page top
export function getElementTop (element) {
  return (
    (element === window ? 0 : element.getBoundingClientRect().top) + getRootScrollTop()
  )
}

export function isHidden(element) {
  return (
    window.getComputedStyle(element).display === 'none' || element.offsetParent === null
  );
}

export function minSort (Arr) {
  var min
  for (let i = 0; i < Arr.length; i++) {
    for (let j = i; j < Arr.length; j++) {
      if (Arr[i].rules > Arr[j].rules) {
        min = Arr[j]
        Arr[j] = Arr[i]
        Arr[i] = min
      }
    }
  }
  return Arr
}
