// 0-搭建一个服务器，根据不同请求，返回不同页面；
// 1-首页动态渲染
const http = require('http');
const router = require('./router');

// 创建服务器
const server = http.createServer();
// 绑定事件，监听请求
server.on('request', (req, res) => {
    // 根据不同请求，返回不同页面；
    router(req, res);
});
// 启动
server.listen(9999, () => console.log('http://localhost:9999 服务器已启动'));


