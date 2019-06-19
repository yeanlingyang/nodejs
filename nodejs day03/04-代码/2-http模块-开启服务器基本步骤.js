// 在node需要用代码来搭建一个服务器
// 如果要处理http请求， 用到http模块 

// 1- 引入http模块  
// 2- 搭建http服务器 
// 2-1 创建http服务器实例 
// 2-2 给服务器绑定事件，监听请求
// 2-3 给服务器设置端口，启动服务器

// 1- 引入http模块  
const http = require('http');
// 2- 搭建http服务器 
// 2-1 创建http服务器实例 
const server = http.createServer();

// 2-2 给服务器绑定事件，监听请求
server.on('request', function (req, res) {
    // req 请求报文对象  获取请求报文全部信息
    // res 响应报文对象  设置响应报文相关信息
    console.log('有请求进来了');    

    //给前端返回响应 
    // res.write('hello node'); // 设置响应主体 
    res.write('11111111');
    res.write('<br>2222222');
    res.write('<br>3333333');
    res.end('hello node1'); //告诉浏览器服务器响应完成了 终止响应，并且可以返回响应主体
    res.end('hello node2'); 
    res.end('hello node3');
    
    // res.write() 可以多次 连续返回响应主体 
    // res.end(); 只能执行一次；
});

// 2-3 给服务器设置端口，启动服务器
server.listen(9999, function () {
    console.log('服务器已启动！');    
})

