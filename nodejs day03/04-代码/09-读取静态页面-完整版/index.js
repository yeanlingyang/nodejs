// 搭建服务器，请求服务器，返回一个真实index.html页面
const fs = require('fs');
const path = require('path');
const http = require('http');
const server = http.createServer();  
const mime = require('mime');

server.on('request', (req, res) => {   
    console.log(req.url);
     // 访问服务器后，返回首页 
    // 根据请求url去读取对应内容进行返回
    fs.readFile(path.join(__dirname, 'pages', req.url), (err, data) => {
        if (err) {
            return console.log(err);            
        }
        // 给每个资源设置明确content-type属性 
        res.setHeader('content-type', mime.getType(req.url));
        //读取成功，返回给浏览器进行解析
        res.end(data)
    });    
    
})

server.listen(9999, () => console.log('http://localhost:9999/index.html 服务器已启动'));


// 小结：
// 请求index.html 内部发送了多次请求， 页面link会去请求样式 ， img标签请求图片 
// css文件中背景图片也会发送请求， 请求图片 


// 上面案例存在问题：
// 服务器会客户端返回很多资源，但是没有设置明确MIME类型（content-type), 会导致浏览器可能无法正确解析资源；

// 服务器在给浏览器返回资源时，需要设置明确的MIME（content-type）类型， 如果没有设置， 浏览器需要去嗅探（猜测)文件类型， 然后在进行解析，嗅探是不安全的；
