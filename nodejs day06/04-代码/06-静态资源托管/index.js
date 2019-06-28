// 1-引包
const express = require('express');
const path = require('path');

// 2-创建服务器
const app = express(); 

//在express中，提供静态资源托管， 我们只需告诉服务器静态资源在哪即可？
// express.static(静态资源目录)
// app.use(express.static('pages'))
app.use('/pages', express.static('pages'))


// 访问的路径： http://localhost:9999/ 150.jpg
// 实际的路径： http://localhost:9999/pages/150.jpg

// 3-监听请求
// app.use((req, res) => {
//     res.sendFile(path.join(__dirname, 'pages', req.url));
// });

//4-启动服务器
app.listen(9999, () => { console.log('http://localhost:9999/index.html 服务器已启动') });