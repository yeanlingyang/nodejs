// 1- 引入
const http = require('http');

// 2- 创建服务器实例
const server = http.createServer();

// 3-绑定事件，监听请求
server.on('request', (req, res) => {
    console.log(req.url); 
    // 设置返回的内容类型及编码
    res.setHeader('content-type', 'text/html;charset=utf-8');
    // 根据不同的req.url（请求地址）， 返回不同的内容  
    if (req.url.startsWith('/index') || req.url === '/') { //首页
        res.end('首页1');
    } else if (req.url.startsWith('/list')) {
        res.end('列表页');
    } else if (req.url.startsWith('/login')) {
        res.end('登陆页');
    } else {
        res.statusCode = 404;
        res.end('404 页面未找到');
    }

    // res.end('ok');
})

// 4- 设置端口，启动服务器
server.listen(9999, () => console.log('http://localhost:9999 服务器已启动'));

// 目标： 希望我们服务器 能够根据不同的请求，返回不同的内容 
// 实现： 根据不同的req.url（请求地址）， 返回不同的内容  
// 判断req.url地址，根据不同地址，返回不同内容