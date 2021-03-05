import Vue from 'vue'
import iView from 'view-design'
import 'view-design/dist/styles/iview.css';
// import '@/assets/css/iview/tabs.scss'
// import '@/assets/css/iview/input.scss'
// import '@/assets/css/iview/select.scss'
// import '@/assets/css/iview/datepicker.scss'
// import '@/assets/css/iview/button.scss'
// import '@/assets/css/iview/checkbox.scss'
// import '@/assets/css/iview/tag.scss'
// import '@/assets/css/iview/switch.scss'
// import '@/assets/css/iview/page.scss'
// import '@/assets/css/iview/table.scss'
// import '@/assets/css/iview/tree.scss'
// import '@/assets/css/iview/form.scss'
// import '@/assets/css/iview/cascader.scss'
// import '@/assets/css/iview/poptip.scss'
// import '@/assets/css/iview/dropdown.scss'
// import '@/assets/css/iview/collapse.scss'
// import '@/assets/css/iview/appiview.scss'

// iview提示前自动注销之前的提示
function destroyBeforeNextMsg (messageTarget) {
  const messageKey = ['success', 'warning', 'info', 'error']
  const temp = function (...option) {
    this.destroy()
    this.call(this, ...option)
  }.bind(messageTarget)
  for (let key in messageTarget) {
    if (key === 'name') {
      continue
    }
    temp[key] = messageKey.includes(key) ? function (...option) {
      this.destroy()
      let target = this[key]
      target && target.call(this, ...option)
    }.bind(messageTarget) : messageTarget[key]
  }
  return temp
}
// 其他文件调用时
iView.Message = destroyBeforeNextMsg(iView.Message)

Vue.use(iView)
// vue实例调用时
Vue.prototype.$Message = destroyBeforeNextMsg(Vue.prototype.$Message)
