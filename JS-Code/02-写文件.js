var fs = require("fs")

// 第一个参数：文件路径
// 第二个参数：文件内容
// 第三个参数：回调函数	一个参数error
//		成功：
// 			文件写入成功，error是null
// 		失败：
// 			文件写入失败，error是错误对象


fs.writeFile("../writefile.txt", "通过fs写入文件，FengHLZ", function(error){
	if (error) {
		console.log("文件写入成功")
	}else{
		console.log("文件写入成功")
	}
})