import axios from 'axios'
import iView from 'view-design'
// import App = from
import router from '../../../router'

// 自定义axios实例
let instance = axios.create()

//让ajax携带cookie
instance.defaults.withCredentials=true 
// 请求超时时间
instance.defaults.timeout = 60000
// 跨域请求使用凭证
instance.defaults.withCredentials = true
// 在传递给 then/catch 前，统一修改响应数据
instance.defaults.transformResponse = [function (data) {
  try {
    return JSON.parse(data)
  } catch (e) {
    return data
  }
}]
// 请求拦截器
instance.interceptors.request.use((config) => {
  // console.log(config,'config');
  config.headers = { 'token': sessionStorage.getItem("token") ? sessionStorage.getItem("token") : "" }
  // config.headers = { 'Cookie': sessionStorage.getItem("KSHWLWGAGKPT") }
  // config.headers = { 'token': sessionStorage.getItem('KSHWLWGAGKPT') || '' }
  // let key = sessionStorage.getItem('KAPTCHA_SESSION_KEY')
  // if (key) {
  //   config.params  = {'KAPTCHA_SESSION_KEY': key}
  // }
  
  // console.log(sessionStorage.getItem('KSHWLWGAGKPT') || '', "0i000000000000")
  return config
}, (error) => {
  return Promise.reject(error)
})
// 响应拦截器
instance.interceptors.response.use((response) => {
  console.log('res.code为：', response)
  // if (response.data.head) {
  //   if (response.data.head.code == 'L0001') {
  //     sessionStorage.clear()
  //     iView.Message.info({ content: '请先登录' })
  //     router.push('/login')
  //   }
  // }
  // if (response.data.code) {
  //   if (response.data.code === 401) {
  //     iView.Message.info({ content: '令牌失效' })
  //     // sessionStorage.clear()
  //     // router.push('/login')
  //   } else if (response.data.code !== 0) {
  //     console.log(router)
  //     iView.Message.info({ content: response.data.msg })
  //   }
  // }
  return response.data
}, (error) => {
  return Promise.reject(error)
})

export default instance
