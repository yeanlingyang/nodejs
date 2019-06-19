// 1- 引入
const http = require('http');
const fs = require('fs');
const path = require('path'); 

// 2- 创建服务器实例
const server = http.createServer();

// 3-绑定事件，监听请求
server.on('request', (req, res) => {
    // 根据不同请求，返回对应的页面 
    // 判断req.url, 根据不同的url，去服务器中 读取对应文件内容 ， 返回给浏览器进行解析 
    if (req.url.startsWith('/index') || req.url === '/') {
        // res.end('index');
        // 去读取首页内容，进行返回 
        let filePath = path.join(__dirname, 'pages', 'index.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                return console.log(err);                
            }
            //读取成功， 把读取页面内容，返回给浏览器进行解析 
            // res.write();
            res.end(data);
        } )
        
    } else if (req.url.startsWith('/list')) {
        // res.end('list'); 
        // 读取列表 list.html 页内容，返回给浏览器进行解析
        fs.readFile(path.join(__dirname, 'pages', 'list.html'), (err, data) => {
            if (err) {
                return console.log(err);                
            }
            res.end(data); //返回数据给浏览器进行解析 
        } )
    } else if (req.url.startsWith('/login')) {
        fs.readFile(path.join(__dirname, 'pages', 'login.html'), (err, data) => {
            if (err) {
                return console.log(err);                
            }
            res.end(data); //返回数据给浏览器进行解析 
        } )
    } else {
        fs.readFile(path.join(__dirname, 'pages', '404.html'), (err, data) => {
            if (err) {
                return console.log(err);                
            }
            res.end(data); //返回数据给浏览器进行解析 
        } )
    }

    // res.end('ok');
})

// 4- 设置端口，启动服务器
server.listen(9999, () => console.log('http://localhost:9999 服务器已启动'));


// 小结：
// 1-所有资源都 存放在服务器中，前端请求资源时， 去服务查找对应内容，读取文件内容，然后返回给前端进行解析；
// 2- 在查找资源 根据 req.url 去查找对应资源；