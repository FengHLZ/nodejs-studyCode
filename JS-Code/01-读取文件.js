// 浏览器中的JavaScript是没有文件操作的功能
// 但是Node中的JavaScript具有文件操作功能

// fs是file-system的简写，就是文件系统的意思
// 在Node中，如果想要进行文件操作，就必须引入fs这个核心模块
// 在fs这个核心模块中，就提供了所有的文件操作相关的API
// 例如：fs.readFile 就是来读取文件

// 1. 使用require方法加载fs核心模块
var file = require('fs')

// 2. 读取文件file.readFile(var, var)
//		第一个参数就是要读取的文件路径
//		第二个参数是一个回调函数
//
//			成功
//				data 数据
//				error null
//			失败
//				data null
//				error 错误对象

file.readFile('../testfile.txt', function(error, data){
	// console.log(data)
	// 结果为：<Buffer c4 e3 ba c3 a3 ac 6e 6f 64 65 6a 73>
	// 二进制数据，通过toSring方法转换
	if (error) {
		console.log("文件打开失败")
	}else{
		console.log(data.toString())
	}
})