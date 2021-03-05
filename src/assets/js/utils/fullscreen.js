function getFullscreen () {
  const ele = document.documentElement
  return ele.requestFullscreen || ele.webkitRequestFullscreen || ele.mozRequestFullScreen || ele.msRequestFullscreen
}

function getExitFullscreen () {
  return document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen
}

function getFullscreenElement () {
  return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement
}

function getFullscreenchangeKey () {
  const fullscreenevts = {
    'requestFullscreen': 'onfullscreenchange',
    'webkitRequestFullscreen': 'onwebkitfullscreenchange',
    'mozRequestFullScreen': 'onmozfullscreenchange',
    'msRequestFullscreen': 'onmsfullscreenchange'
  }
  for (let method in fullscreenevts) {
    if (document.documentElement[method]) {
      return fullscreenevts[method]
    }
  }
  return ''
}

const fullscreen = getFullscreen().bind(document.documentElement)
const exitFullscreen = getExitFullscreen().bind(document)

export default class Fullscreen {
  constructor (cb) {
    document.documentElement[getFullscreenchangeKey()] = () => {
      let isFull = !!getFullscreenElement()
      cb && cb(isFull)
    }
  }
  toggleFullScreen () {
    if (getFullscreenElement()) {
      exitFullscreen()
    } else {
      fullscreen()
    }
  }
  destroy () {
    document.documentElement[getFullscreenchangeKey()] = null
  }
}
