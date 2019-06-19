// 启动http服务器
// 1- 引入 
const http = require('http');

// 2- 创建服务器实例
const server = http.createServer(); 

// 3- 绑定事件，监听请求
server.on('request', (req, res) => {
    // res 响应报文对象 用于设置响应报文，设置完成后，可以返回给前端 
    // 状态码
    // 状态文本
    // 响应头
    // 响应主体 
    // res.statusCode = 200; 状态码
    // res.statusMessage = 'OK'; 状态文本
    // 响应头
    // 告诉浏览器返回的内容类型及编码
    // res.setHeader('content-type', 'text/html;charset=utf-8');
    // res.write() 响应主体 
    // res.end(); 终止响应
    // res.writeHead(状态码，状态文本， 响应头);

    // 注意点：statusMessage 不建议设置， 服务器会自动不全， 不能使用中文 

    // res.statusCode = 200; 
    // // res.statusMessage = '页面未找到';
    // res.statusMessage = 'abc';
    // // 设置响应头 
    // res.setHeader('aa', 'bb');
    // res.setHeader('cc', 'dd');
    // // 设置返回数据类型及编码
    // res.setHeader('content-type', 'text/html;charset=utf-8');

    res.writeHead(200, 'OK22', { aa: 'bb', 'content-type': 'text/html;charset=utf-8' });

    // 响应主体
    res.write('11111');
    res.write('<h1>我是大标题</h1>');
    res.write('2222');

    res.end('ok');
});

//  4-设置端口，启动服务器 
server.listen(9999, () => { 
    console.log('http://localhost:9999 服务器已启动');    
});

// 小结：
// res.statusCode = 200;
// res.statusMessage = 'ok';
// res.setHeader(k, v); 
// res.write();
// res.end(); 

