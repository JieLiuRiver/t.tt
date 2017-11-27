function setHtmlSize() {
    var docEl = document.documentElement,
    resizeEvt = 'orientationchange' in window? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (clientWidth === undefined) return;
      docEl.style.fontSize = clientWidth / 3.75 + 'px';
    };
  if (document.addEventListener === undefined) return;
  window.addEventListener(resizeEvt, recalc, false);
  document.addEventListener('DOMContentLoaded', recalc, false)
}


export {
    setHtmlSize
}