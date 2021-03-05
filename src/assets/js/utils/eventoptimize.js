/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 */
const Debounce = (func, wait) => {
  let delay = wait || 500
  let timer
  return function () {
    let args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      timer = null
      func.apply(this, args)
    }, delay)
  }
}

/**
 * @desc 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 */
const Throttle = (func, wait) => {
  let last
  let timer
  let interval = wait || 500
  return function () {
    let args = arguments
    let now = +new Date()
    if (last && now - last < interval) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        last = now
        func.apply(this, args)
      }, interval)
    } else {
      last = now
      func.apply(this, args)
    }
  }
}

export {
  Debounce,
  Throttle
}
