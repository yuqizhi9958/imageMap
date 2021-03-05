// websocket对象
let webSocket = null

// 创建webSocket连接
let createWebSocket = (uri) => {
  try {
    webSocket = new WebSocket(uri)
    // 初始化websocket连接
    initWebsocket()
  } catch (e) {
    console.log('尝试创建连接失败')
    // 如果无法连接上webSocket 那么重新连接！可能会因为服务器重新部署，或者短暂断网等导致无法创建连接
    reConnect()
  }
}

// 连接标识 避免重复连接
let isConnect = false
// 断线重连后，延迟5秒重新创建WebSocket连接，rec用来存储延迟请求的代码
let rec

// 定义重连函数
let reConnect = () => {
  console.log('尝试重新连接')
  // 如果已经连上就不在重连了
  if (!isConnect) {
    rec && clearTimeout(rec)
    // 延迟5秒重连，避免过多次过频繁请求重连
    rec = setTimeout(function () {
      createWebSocket()
    }, 5000)
  }
}

// 初始化webSocket连接
let initWebsocket = () => {
  // WebSocket连接建立之后会调用onopen方法
  webSocket.onopen = function (e) {
    // 连接建立后修改标识
    isConnect = true
    // 建立连接后开始心跳
    // 因为nginx一般会设置例如60s没有传输数据就断开连接，所以要定时发送数据
    heartCheck.start()
  }
  // 当websocket收到服务器发送的信息之后，会调用onmessage方法，getMsg用来封装获取到服务器的消息进行处理
  webSocket.onmessage = function (e) {
    getMessage(e)
    // 获取消息后，重置心跳
    heartCheck.reset()
  }
  // 当websocket因为各种原因（正常或者异常）关闭之后，会调用onclose方法
  webSocket.onclose = function (e) {
    console.log('Websocket已关闭')
    // 连接断开后修改标识
    isConnect = false
  }
  // 当websocket因为异常原因（比如服务器部署、断网等）关闭之后，会调用onerror方法
  // 在onerror中需要调用reConnect方法重连服务器
  webSocket.onerror = function (e) {
    console.log('Websocket发生异常')
    // 连接断开后修改标识
    isConnect = false
    // 连接错误 需要重连
    reConnect()
  }
}

// 发送消息
let sendMessage = (msg) => {
  webSocket.send(msg)
}

// 心跳发送/返回的信息
// 服务器和客户端收到的信息内容如果如下 就识别为心跳信息 不要做业务处理
let checkMsg = 'heartbeat'
// 心跳设置
let heartCheck = {
  // 每段时间发送一次心跳包 这里设置为20s
  timeout: 20000,
  // 延时发送消息对象（启动心跳新建这个对象，收到消息后重置对象）
  timeoutObj: null,
  // 一段时间后发送心跳包
  start: function () {
    this.timeoutObj = setTimeout(function () {
      if (isConnect) webSocket.send(checkMsg)
    }, this.timeout)
  },
  // 接收到服务器的信息之后要重置心跳发送的方法
  reset: function () {
    clearTimeout(this.timeoutObj)
    this.start()
  }
}
// 获得消息之后，区别是心跳还是业务信息，如果是业务信息特殊处理
let getMessage = (e) => {
  console.log('收到Websocket消息')
  console.log(e.data)
}

// 关闭连接
let closeWebSocket = () => {
  webSocket.close()
}
export default {
  createWebSocket: createWebSocket,
  closeWebSocket: closeWebSocket,
  sendMessage: sendMessage,
  getMessage: getMessage
}
