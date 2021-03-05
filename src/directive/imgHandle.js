/*
 * @Author: cwr
 * @Date: 2018-08-22 11:26:56
 * @Last Modified by: cwr
 * @Last Modified time: 2018-10-16 11:56:25
 *
 * prevent 错误时将阻止img所有事件
 * delay 延时300ms加载图片
 *
 * <img v-img-handle.prevent.delay="{'emptyImg':'', errorImg:'', delayImg: '', bgColor:'', bgSize:'', 'bgPosition': '', bgRepeat: ''}"/>
 *
 * render函数
 * return h('img', {
 *  attrs: { src: params.row.eventimage ? params.row.eventimage + '?imageView2/2/w/42/h/42/interlace/1' : '' },
 *  style: {
 *    width: '42px', height: '42px', verticalAlign: 'middle', cursor: 'pointer'
 *  },
 *  //这里添加
 *  directives: [
 *    {name: 'img-handle', value: {'bgColor': '#aec2d3'}, modifiers: {'prevent': true, 'delay': true}}
 *  ],
 *  on: {
 *    click: () => {
 *      this.cameramodal = true
 *      this.photolist = [params.row.eventimage]
 *    }
 *  }
 *}, '')
 *
 */

const PLACEHOLD_IMG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ1RDk3QjBCQTUyQzExRThCQ0U4OEMxMDBGQTgwMkNDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ1RDk3QjBDQTUyQzExRThCQ0U4OEMxMDBGQTgwMkNDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDVEOTdCMDlBNTJDMTFFOEJDRTg4QzEwMEZBODAyQ0MiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDVEOTdCMEFBNTJDMTFFOEJDRTg4QzEwMEZBODAyQ0MiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7vHKjlAAAAEElEQVR42mL4//8/A0CAAQAI/AL+26JNFgAAAABJRU5ErkJggg=='
const LOAD_IMG = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2ZmZjsKICAgICAgICBmaWxsLXJ1bGU6IGV2ZW5vZGQ7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGQ9Ik02MC4wNDksMzYuMDQ5IEw1Mi4wNDksMzYuMDQ5IEM0OS44NDAsMzYuMDQ5IDQ4LjA0OSwzNC4yNTkgNDguMDQ5LDMyLjA0OSBDNDguMDQ5LDI5Ljg0MCA0OS44NDAsMjguMDQ5IDUyLjA0OSwyOC4wNDkgTDYwLjA0OSwyOC4wNDkgQzYyLjI1OSwyOC4wNDkgNjQuMDQ5LDI5Ljg0MCA2NC4wNDksMzIuMDQ5IEM2NC4wNDksMzQuMjU5IDYyLjI1OSwzNi4wNDkgNjAuMDQ5LDM2LjA0OSBaTTQ5LjAwNiwyMC43MDEgQzQ3LjQ0MywyMi4yNjMgNDQuOTExLDIyLjI2MyA0My4zNDksMjAuNzAxIEM0MS43ODcsMTkuMTM5IDQxLjc4NywxNi42MDYgNDMuMzQ5LDE1LjA0NCBMNDkuMDA2LDkuMzg3IEM1MC41NjgsNy44MjUgNTMuMTAwLDcuODI1IDU0LjY2Miw5LjM4NyBDNTYuMjI0LDEwLjk0OSA1Ni4yMjQsMTMuNDgyIDU0LjY2MiwxNS4wNDQgTDQ5LjAwNiwyMC43MDEgWk0zMi4wMDAsNjQuMDk5IEMyOS43OTEsNjQuMDk5IDI4LjAwMCw2Mi4zMDggMjguMDAwLDYwLjA5OSBMMjguMDAwLDUyLjA5OSBDMjguMDAwLDQ5Ljg5MCAyOS43OTEsNDguMDk5IDMyLjAwMCw0OC4wOTkgQzM0LjIwOSw0OC4wOTkgMzYuMDAwLDQ5Ljg5MCAzNi4wMDAsNTIuMDk5IEwzNi4wMDAsNjAuMDk5IEMzNi4wMDAsNjIuMzA4IDM0LjIwOSw2NC4wOTkgMzIuMDAwLDY0LjA5OSBaTTMyLjAwMCwxNi4wMDAgQzI5Ljc5MSwxNi4wMDAgMjguMDAwLDE0LjIwOSAyOC4wMDAsMTIuMDAwIEwyOC4wMDAsNC4wMDAgQzI4LjAwMCwxLjc5MSAyOS43OTEsLTAuMDAwIDMyLjAwMCwtMC4wMDAgQzM0LjIwOSwtMC4wMDAgMzYuMDAwLDEuNzkxIDM2LjAwMCw0LjAwMCBMMzYuMDAwLDEyLjAwMCBDMzYuMDAwLDE0LjIwOSAzNC4yMDksMTYuMDAwIDMyLjAwMCwxNi4wMDAgWk0xNC45OTQsNTQuNzEyIEMxMy40MzIsNTYuMjc0IDEwLjkwMCw1Ni4yNzQgOS4zMzgsNTQuNzEyIEM3Ljc3Niw1My4xNTAgNy43NzYsNTAuNjE3IDkuMzM4LDQ5LjA1NSBMMTQuOTk0LDQzLjM5OCBDMTYuNTU3LDQxLjgzNiAxOS4wODksNDEuODM2IDIwLjY1MSw0My4zOTggQzIyLjIxMyw0NC45NjAgMjIuMjEzLDQ3LjQ5MyAyMC42NTEsNDkuMDU1IEwxNC45OTQsNTQuNzEyIFpNMTQuOTk0LDIwLjcwMSBMOS4zMzgsMTUuMDQ0IEM3Ljc3NiwxMy40ODIgNy43NzYsMTAuOTQ5IDkuMzM4LDkuMzg3IEMxMC45MDAsNy44MjUgMTMuNDMyLDcuODI1IDE0Ljk5NCw5LjM4NyBMMjAuNjUxLDE1LjA0NCBDMjIuMjEzLDE2LjYwNiAyMi4yMTMsMTkuMTM5IDIwLjY1MSwyMC43MDEgQzE5LjA4OSwyMi4yNjMgMTYuNTU3LDIyLjI2MyAxNC45OTQsMjAuNzAxIFpNMTUuOTUxLDMyLjA0OSBDMTUuOTUxLDM0LjI1OSAxNC4xNjAsMzYuMDQ5IDExLjk1MSwzNi4wNDkgTDMuOTUxLDM2LjA0OSBDMS43NDEsMzYuMDQ5IC0wLjA0OSwzNC4yNTkgLTAuMDQ5LDMyLjA0OSBDLTAuMDQ5LDI5Ljg0MCAxLjc0MSwyOC4wNDkgMy45NTEsMjguMDQ5IEwxMS45NTEsMjguMDQ5IEMxNC4xNjAsMjguMDQ5IDE1Ljk1MSwyOS44NDAgMTUuOTUxLDMyLjA0OSBaTTQ5LjAwNiw0My4zOTggTDU0LjY2Miw0OS4wNTUgQzU2LjIyNCw1MC42MTcgNTYuMjI0LDUzLjE1MCA1NC42NjIsNTQuNzEyIEM1My4xMDAsNTYuMjc0IDUwLjU2OCw1Ni4yNzQgNDkuMDA2LDU0LjcxMiBMNDMuMzQ5LDQ5LjA1NSBDNDEuNzg3LDQ3LjQ5MyA0MS43ODcsNDQuOTYwIDQzLjM0OSw0My4zOTggQzQ0LjkxMSw0MS44MzYgNDcuNDQzLDQxLjgzNiA0OS4wMDYsNDMuMzk4IFoiIGNsYXNzPSJjbHMtMSI+CiAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIGJlZ2luPSIwcyIgZHVyPSIxcyIgdHlwZT0icm90YXRlIiBmcm9tPSIwIDMyIDMyIiB0bz0iMzYwIDMyIDMyIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L3BhdGg+Cjwvc3ZnPgo='
const EMPTY_IMG = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgNjQgNjQiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNmZmY7CiAgICAgICAgZmlsbC1ydWxlOiBldmVub2RkOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8cGF0aCBkPSJNNjAuMzcxLDYwLjAwMCBMMy42MzAsNjAuMDAwIEMxLjYyNSw2MC4wMDAgMC4wMDAsNTguMzg5IDAuMDAwLDU2LjQwMiBMMC4wMDAsOC41OTkgQzAuMDAwLDYuNjEyIDEuNjI1LDUuMDAwIDMuNjMwLDUuMDAwIEw2MC4zNzEsNS4wMDAgQzYyLjM3NSw1LjAwMCA2NC4wMDAsNi42MTIgNjQuMDAwLDguNTk5IEw2NC4wMDAsNTYuNDAyIEM2NC4wMDAsNTguMzg5IDYyLjM3NSw2MC4wMDAgNjAuMzcxLDYwLjAwMCBaTTU4LjY2NywxMi45NDkgQzU4LjY2NywxMS40ODEgNTcuNDY3LDEwLjI5MSA1NS45ODYsMTAuMjkxIEw4LjAxNCwxMC4yOTEgQzYuNTMzLDEwLjI5MSA1LjMzMywxMS40ODEgNS4zMzMsMTIuOTQ5IEw1LjMzMywzMy43NTcgQzEwLjQ4NSwzOC44OTYgMjIuNTg3LDQwLjU1MiAzMS4wMDgsMzIuNTAwIEMzOS44MzAsMjQuMDY2IDUzLjgyNiwyMy45MzAgNTguNjY3LDIzLjM2NSBMNTguNjY3LDEyLjk0OSBaTTE1LjYwNywyNC43MDQgQzEyLjQyOSwyNC43MDQgOS44NTIsMjIuMTUwIDkuODUyLDE4Ljk5OCBDOS44NTIsMTUuODQ3IDEyLjQyOSwxMy4yOTIgMTUuNjA3LDEzLjI5MiBDMTguNzg2LDEzLjI5MiAyMS4zNjMsMTUuODQ3IDIxLjM2MywxOC45OTggQzIxLjM2MywyMi4xNTAgMTguNzg2LDI0LjcwNCAxNS42MDcsMjQuNzA0IFoiIGNsYXNzPSJjbHMtMSIvPgo8L3N2Zz4K'
const ERROR_IMG = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgNjQgNjQiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNmZmY7CiAgICAgICAgZmlsbC1ydWxlOiBldmVub2RkOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8cGF0aCBkPSJNNjAuMzc0LDYwLjAwMCBMMzQuNjM5LDYwLjAwMCBMNDEuMDg4LDQyLjY4MyBMMzQuNTU5LDI5LjcyNSBDNDMuMTUxLDIzLjk0NSA1NC4yNTQsMjMuODc4IDU4LjY0MiwyMy4zNjUgTDU4LjY0MiwxMi45NDkgQzU4LjY0MiwxMS40ODEgNTcuNDQzLDEwLjI5MSA1NS45NjQsMTAuMjkxIEwzNS4wNDIsMTAuMjkxIEwzNy4xNDcsNS4wMDAgTDYwLjM3NCw1LjAwMCBDNjIuMzc3LDUuMDAwIDY0LjAwMSw2LjYxMiA2NC4wMDEsOC41OTkgTDY0LjAwMSw1Ni40MDIgQzY0LjAwMSw1OC4zODkgNjIuMzc3LDYwLjAwMCA2MC4zNzQsNjAuMDAwIFpNOS44NzIsMTguOTk4IEM5Ljg3MiwxNS44NDcgMTIuNDQ2LDEzLjI5MiAxNS42MjIsMTMuMjkyIEMxOC43OTgsMTMuMjkyIDIxLjM3MywxNS44NDcgMjEuMzczLDE4Ljk5OCBDMjEuMzczLDIyLjE1MCAxOC43OTgsMjQuNzA0IDE1LjYyMiwyNC43MDQgQzEyLjQ0NiwyNC43MDQgOS44NzIsMjIuMTUwIDkuODcyLDE4Ljk5OCBaTTMuNjI1LDYwLjAwMCBDMS42MjMsNjAuMDAwIC0wLjAwMSw1OC4zODkgLTAuMDAxLDU2LjQwMiBMLTAuMDAxLDguNTk5IEMtMC4wMDEsNi42MTIgMS42MjMsNS4wMDAgMy42MjUsNS4wMDAgTDI4LjUzMyw1LjAwMCBMMjYuNDI4LDEwLjI5MSBMOC4wMzUsMTAuMjkxIEM2LjU1NiwxMC4yOTEgNS4zNTcsMTEuNDgxIDUuMzU3LDEyLjk0OSBMNS4zNTcsMzMuNzU3IEM3Ljg3MSwzNi4yNjcgMTEuOTE2LDM3LjkwMCAxNi41NTQsMzcuOTAwIEMyMC4zOTUsMzcuOTAwIDI0LjY0MywzNi43NzkgMjguNzYwLDM0LjEwNiBMMzMuMDA2LDQyLjA2NiBMMjYuNjAxLDYwLjAwMCBMMy42MjUsNjAuMDAwIFoiIGNsYXNzPSJjbHMtMSIvPgo8L3N2Zz4K'

const ORIGIN_KEY = 'img-handle-error-origin'

const IGNORE_VALUE = ['0px', 'auto', 'initial']

const TYPE_DEF_IMG = {
  'delayImg': LOAD_IMG,
  'emptyImg': EMPTY_IMG,
  'errorImg': ERROR_IMG
}

function getType (src, isDelay) {
  return isDelay ? 'delayImg' : src ? 'errorImg' : 'emptyImg'
}
// 配置项
const VALUE_KEYS = {
  'bgImage': {
    keys: ['emptyImg', 'errorImg', 'delayImg'],
    porperty: 'background-image',
    handle (value) {
      return `url(${value})`
    }
  },
  'bgColor': {
    porperty: 'background-color',
    handle (value) {
      return value || 'none' // '#aec2d3'
    }
  },
  'bgSize': {
    porperty: 'background-size',
    handle (value, imgType) {
      let result = value || '50%'
      return (imgType === 'delayImg') ? shrink(result) : result
    }
  },
  'bgPosition': {
    porperty: 'background-position',
    handle (value) {
      return value || 'center'
    }
  },
  'bgRepeat': {
    porperty: 'background-repeat',
    handle (value) {
      return value || 'no-repeat'
    }
  }
}
// 标识
const MODIFIERS_KEYS = ['prevent', 'delay']

// 判断是否空地址
function checkEmpty (el) {
  let src = el.getAttribute('src')
  if (src === null) {
    el.setAttribute('src', '')
  }
}
// 图片去除提示
function removeTips (el, unbind) {
  let src = el.getAttribute('src')
  if (src === PLACEHOLD_IMG) {
    return
  }
  if (el.dataset.imgHandleTips === 'true') {
    el.dataset.imgHandleTips = 'false'

    for (let key in VALUE_KEYS) {
      el.style.removeProperty(VALUE_KEYS[key].porperty)
    }

    if (!el.dataset.width && (!el.dataset.cWidth || IGNORE_VALUE.includes(el.dataset.cWidth))) {
      el.style.removeProperty('width')
    }
    if (!el.dataset.height && (!el.dataset.cHeight || IGNORE_VALUE.includes(el.dataset.cHeight))) {
      el.style.removeProperty('height')
    }

    if (el.dataset.prevent === 'true') {
      el.style.removeProperty('pointer-events')
    }

    if (unbind) {
      let origin = el.getAttribute(ORIGIN_KEY)
      el.setAttribute('src', origin || '')
    }
    el.removeAttribute(ORIGIN_KEY)
  }
}
// 加载提示需要小一点
function shrink (sizeStr, zoom = 3 / 5) {
  return (sizeStr || '').replace(/[0-9]\d*/g, (value, index, str) => {
    return (Number(value) * zoom).toFixed(2)
  })
}

// 图片增加提示
function addTips (el, isDelay) {
  let src = el.getAttribute('src')
  let imgHandleType = getType(src, isDelay)
  if (el.dataset.imgHandleTips !== 'true') {
    el.dataset.imgHandleTips = 'true'
    el.dataset.imgHandleType = imgHandleType
    for (let key in VALUE_KEYS) {
      let item = VALUE_KEYS[key]
      if (item.keys) {
        item.keys.forEach((ikey) => {
          if (ikey === imgHandleType) {
            el.style.setProperty(item.porperty, item.handle(el.dataset[ikey] || TYPE_DEF_IMG[ikey]))
          }
        })
      } else {
        el.style.setProperty(item.porperty, item.handle(el.dataset[key], imgHandleType))
      }
    }

    if (!el.dataset.width && (!el.dataset.cWidth || IGNORE_VALUE.includes(el.dataset.cWidth))) {
      el.style.setProperty('width', '100%')
    }
    if (!el.dataset.height && (!el.dataset.cHeight || IGNORE_VALUE.includes(el.dataset.cWidth))) {
      el.style.setProperty('height', '100%')
    }
    if (el.dataset.prevent === 'true') {
      el.style.setProperty('pointer-events', 'none')
    }
  } else {
    if (el.dataset.imgHandleType !== imgHandleType) {
      el.dataset.imgHandleType = imgHandleType
      let item = VALUE_KEYS.bgImage
      el.style.setProperty(item.porperty, item.handle(el.dataset[imgHandleType] || TYPE_DEF_IMG[imgHandleType]))
      item = VALUE_KEYS.bgSize
      el.style.setProperty(item.porperty, item.handle(el.dataset[imgHandleType], imgHandleType))
    }
  }
  if (!isDelay) {
    el.setAttribute(ORIGIN_KEY, src)
  }
  el.setAttribute('src', PLACEHOLD_IMG)
}

// 延时加载图片
function setDelayTimer (el) {
  let src = el.getAttribute('src')
  if (!src || el._src === src) {
    return
  }
  addTips(el, true)
  clearDelayTimer(el)
  el._src = src
  el._timer = setTimeout(() => {
    el.setAttribute('src', el._src)
  }, 300)
}

function clearDelayTimer (el) {
  if (el._timer) {
    clearTimeout(el._timer)
    delete el._timer
  }
}
// 图片加载成功触发
function imgLoad (e) {
  let el = e.target
  removeTips(el)
}
// 图片加载失败触发
function imgError (e) {
  (e.target.src !== window.location.href) && console.log('图片地址：' + e.target.src)
  let el = e.target
  addTips(el)
}

export const imgHandle = {

  /**
   * binding：一个对象，包含以下属性：
   *  name：指令名，不包括 v- 前缀。
   *  value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
   *  oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
   *  expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
   *  arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
   *  modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
   */
  bind (el, {
    value,
    modifiers
  }, vnode) {
    // console.log('bind')
    if (el.tagName !== 'IMG') {
      return
    }
    if (value) {
      for (let key in VALUE_KEYS) {
        if (VALUE_KEYS[key].keys) {
          VALUE_KEYS[key].keys.forEach((ikey) => {
            if (value[ikey]) {
              el.dataset[ikey] = value[ikey]
            }
          })
        } else {
          if (value[key]) {
            el.dataset[key] = value[key]
          }
        }
      }
    }
    if (modifiers) {
      for (let key in modifiers) {
        if (~MODIFIERS_KEYS.indexOf(key)) {
          el.dataset[key] = modifiers[key]
        }
      }
    }
    let initStyle = getComputedStyle(el, '')
    el.dataset.width = el.style.getPropertyValue('width')
    el.dataset.height = el.style.getPropertyValue('height')
    el.dataset.cWidth = initStyle.width && initStyle.width.toLocaleLowerCase()
    el.dataset.cHeight = initStyle.height && initStyle.height.toLocaleLowerCase()
    el.addEventListener('load', imgLoad)
    el.addEventListener('error', imgError)
    if (el.dataset.delay === 'true') {
      setDelayTimer(el)
    }
  },
  inserted (el, binding, vnode) {
    // console.log('inserted')
    if (el.tagName !== 'IMG') {
      return
    }
    checkEmpty(el)
  },
  update (el, {
    value,
    oldValue
  }, vnode, oldVnode) {
    // console.log('update')
    if (el.tagName !== 'IMG') {
      return
    }
    if (el.dataset.delay === 'true') {
      setDelayTimer(el)
    }
    checkEmpty(el)
    if (!value || !oldValue) {
      return
    }
    let tips = el.dataset.imgHandleTips === 'true'
    for (let key in VALUE_KEYS) {
      let item = VALUE_KEYS[key]
      if (item.keys) {
        item.keys.forEach((ikey) => {
          if (value[ikey] !== oldValue[ikey]) {
            el.dataset[ikey] = value[ikey]
            if (tips && ikey === el.dataset.imgHandleType) {
              el.style.setProperty(
                item.porperty,
                item.handle(el.dataset[ikey] || TYPE_DEF_IMG[ikey])
              )
            }
          }
        })
      } else {
        if (value[key] !== oldValue[key]) {
          el.dataset[key] = value[key]
          if (tips) {
            el.style.setProperty(item.porperty, item.handle(el.dataset[key]))
          }
        }
      }
    }
  },
  componentUpdated (el, binding, vnode, oldVnode) {
    // console.log('componentUpdated')
    if (el.tagName !== 'IMG') {
      return
    }
    checkEmpty(el)
  },
  unbind (el, binding, vnode) {
    // console.log('unbind')
    if (el.tagName !== 'IMG') {
      return
    }
    if (el.dataset.delay === 'true') {
      clearDelayTimer(el)
    }
    el.removeEventListener('load', imgLoad)
    el.removeEventListener('error', imgError)

    removeTips(el, true)
  }
}

export default function imgHandleInit (Vue) {
  Vue.directive('img-handle', imgHandle)
}
