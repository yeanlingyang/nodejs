// 搭建服务器，根据不同的请求，返回对应页面
const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime');

const server = http.createServer(); //创建服务器 

server.on('request', (req, res) => {
    // 根据不同的请求，返回对应页面 判断 req.url 
    console.log(req.url);
    if (req.url.startsWith('/index') || req.url === '/') {//首页
        //  读取index.html内容进行返回  
        fs.readFile(path.join(__dirname, 'pages', 'index.html'), (err, data) => {
            if (err) { return console.log(err); }
            //返回读取页面内容
            res.end(data);
        })

    } else if (req.url.startsWith('/add')) {//添加
        fs.readFile(path.join(__dirname, 'pages', 'add.html'), (err, data) => {
            if (err) { return console.log(err); }
              //返回读取页面内容
              res.end(data);
        })
    } else if (req.url.startsWith('/assets')) {  //静态资源处理
        // 读取静态资源进行返回
        fs.readFile(path.join(__dirname, req.url), (err, data) => {
            if (err) { return console.log(err); }     
            // 告诉浏览器 返回资源类型
            res.setHeader('content-type', mime.getType(req.url));
            //返回读取的静态资源
            res.end(data);
        })
    }else {
        res.end('404');
    }
    
});
// 启动服务器
server.listen(9999, () => console.log('http://localhost:9999 服务器已启动'));