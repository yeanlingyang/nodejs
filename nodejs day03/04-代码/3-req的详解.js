// 启动http服务器
// 1- 引入 
const http = require('http');

// 2- 创建服务器实例
const server = http.createServer(); 

// 3- 绑定事件，监听请求
server.on('request', (req, res) => {
    // req 请求报文的对象
    // 获取请求报文req中的数据
    // req.url 请求地址 
    // req.method 请求方式 
    // req.headers 请求头 
    console.log(req.method);    
    console.log(req.url);
    console.log(req.headers);
    
    


    res.end('ok');
});

//  4-设置端口，启动服务器 
server.listen(9999, () => { 
    console.log('http://localhost:9999 服务器已启动');    
});

// 小结：
// req 请求报文对象， 可以用于获取完整的请求报文信息
// req.url 
// req.method 
// req.headers 


