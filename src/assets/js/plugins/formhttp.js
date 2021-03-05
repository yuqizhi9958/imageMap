import qs from 'qs'
import axios from 'axios'
import iView from 'view-design'

// 自定义axios实例
let instance = axios.create()

// 请求头设置
instance.defaults.headers = { 'Content-Type': 'application/x-www-form-urlencoded'}
// 请求超时时间
instance.defaults.timeout = 60000
// 跨域请求使用凭证
instance.defaults.withCredentials = true
instance.defaults.transformRequest = [function (data) {
  return qs.stringify(data)
}]
// 在传递给 then/catch 前，统一修改响应数据
// instance.defaults.transformResponse = [function (data) {
//   try {
//     return JSON.parse(data)
//   } catch (e) {
//     return data
//   }
// }]
// 请求拦截器
instance.interceptors.request.use((config) => {
  // instance.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
  // instance.headers['token'] = sessionStorage.getItem("KSHWLWGAGKPT") || ''
  // config.headers = { 'token': sessionStorage.getItem("KSHWLWGAGKPT") }
  return config
}, (error) => {
  return Promise.reject(error)
})
// 响应拦截器
instance.interceptors.response.use((response) => {
 

  // if (response.data.code === -1) {
  //   iView.Message.info({ content: '请求失败' })
  // } else if (response.data.code === 401) {
  //   iView.Message.info({ content: '令牌失效' })
  // } else if (response.data.code === 500) {
  //   iView.Message.info({ content: '服务器错误' })
  // } else if (response.data.code === 10001) {
  //   iView.Message.info({ content: '参数无效' })
  // } else if (response.data.code === 10002) {
  //   iView.Message.info({ content: '参数为空' })
  // } else if (response.data.code === 10003) {
  //   iView.Message.info({ content: '参数类型错误' })
  // } else if (response.data.code === 10004) {
  //   iView.Message.info({ content: '参数缺失' })
  // } else if (response.data.code === 20001) {
  //   iView.Message.info({ content: '用户未登录' })
  // } else if (response.data.code === 20002) {
  //   iView.Message.info({ content: '账号不存在或密码错误' })
  // } else if (response.data.code === 20003) {
  //   iView.Message.info({ content: '账号已被禁用' })
  // } else if (response.data.code === 20004) {
  //   iView.Message.info({ content: '用户不存在' })
  // } else if (response.data.code === 20005) {
  //   iView.Message.info({ content: '用户已存在' })
  // } else if (response.data.code === 20006) {
  //   iView.Message.info({ content: '认证已存在' })
  // } else if (response.data.code === 30001) {
  //   iView.Message.info({ content: '创建失败' })
  // } else if (response.data.code === 40001) {
  //   iView.Message.info({ content: '系统繁忙，请稍后重试' })
  // } else if (response.data.code === 50001) {
  //   iView.Message.info({ content: '数据未找到' })
  // } else if (response.data.code === 50002) {
  //   iView.Message.info({ content: '数据有误' })
  // } else if (response.data.code === 50003) {
  //   iView.Message.info({ content: '数据已存在' })
  // } else if (response.data.code === 60001) {
  //   iView.Message.info({ content: '内部系统接口调用异常' })
  // } else if (response.data.code === 60002) {
  //   iView.Message.info({ content: '外部系统接口调用异常' })
  // } else if (response.data.code === 60003) {
  //   iView.Message.info({ content: '该接口禁止访问' })
  // } else if (response.data.code === 60004) {
  //   iView.Message.info({ content: '接口地址无效' })
  // } else if (response.data.code === 60005) {
  //   iView.Message.info({ content: '接口请求超时' })
  // } else if (response.data.code === 60006) {
  //   iView.Message.info({ content: '接口负载过高' })
  // } else if (response.data.code === 70001) {
  //   iView.Message.info({ content: '只有标签 Owner ,才具备删除权限' })
  // } else if (response.data.code === 70002) {
  //   iView.Message.info({ content: '此认证标签已有员工认证，不可以进行删除' })
  // }
  return response.data
}, (error) => {
  return Promise.reject(error)
})

export default instance
