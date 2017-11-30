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


function jsonp(url, data, option){
	url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
	console.log('url', url)
	return new Promise((resolve, reject) => {
		originJsonp(url, option, (err, data) => {
			if (!err) {
				resolve(data)
			} else {
				reject(err)
			}
		})
	})
}


function param(data) {
	let url = ''
	for (var k in data) {
		let value = data[k] !== undefined ? data[k] : ""
		url += `&${k}=${encodeURIComponent(value)}`
	}
	return url ? url.substring(1) : ''
}


let elementStyle = document.createElement('div').style

let vendor = (() => {
  let transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  }

  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
  }

  return false
})()

function prefixStyle(style) {
  if (vendor === false) {
    return false
  }

  if (vendor === 'standard') {
    return style
  }

  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}


function loadImageAsync(imgArr, resolve, reject){
    if (Object.prototype.toString.call(imgArr) !== '[object Array]') {
      return 
    }
    let middle = {}
    imgArr.forEach((url) => {
      load(url, () => {
        resolve()
      }, () => {
        reject()
      })
    })
    function load(url, cb, errcb) {
      let image = new Image()
      image.src = url
      image.onload = function(){
        middle[url] = true
        if (check()) {
            cb && cb()
        }
      }
      image.onerror = function(){
          errcb()
      }
    }
    function check(){
      let completeflag = true
      imgArr.forEach((url) => {
        if (typeof middle[url] === 'undefined') {
          completeflag = false
        }
      })
      return completeflag
    }
}


export {
    setHtmlSize,
    loadImageAsync,
    prefixStyle,
    param,
    jsonp
}