// node中的核心模块：http

// 1. 加载http核心模块
var http = require("http")

// 2. 使用http的createServer()方法创建一个web服务器
var server = http.createServer()

// 3. 注册request事件请求
//		当客户端的请求过来，就会自动触发server的request的请求事件,然后执行第二个参数：回调函数

server.on("request", function(){
	console.log("收到客户端的请求")
})

// 4.绑定端口号，开启服务器
server.listen(2333, function(){
	console.log("服务器已开启")
})