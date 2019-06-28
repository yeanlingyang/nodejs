const express = require('express');
const fs = require('fs');
const path = require('path');

//创建服务器实例
const app = express();

//监听请求 

app.get('/index', (req, res) => {
    // fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
    //     if (err) { }
    //     res.end(data);
    // })
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.use((req, res) => {
    // res 
    // res.statusCode = 200;
    // res.setHeader('content-type', 'text/html');
    // res.writeHead(200, 'ok', {k:v});
    // res.write(); //响应主体
    // res.end(); 
    // express中新增的属性 
    // res.status(200); //状态码
    // res.set(k, v);   //响应头
    // res.send();      //终止响应 设置编码
    // res.sendFile(文件路径);  //返回文件
    // res.redirect(地址)       // 重定向

    // res.status(404);
    // res.set('aa', 'bb');
    // res.set({
    //     bb: 'cc',
    //     dd: 'ee'
    // })
    // res.send('测试数据');

    // res.statusCode = 302;
    // res.setHeader('location', '/index');
    // res.end();

    res.redirect('/index');


})

// 小结
// res.status()
// res.set();
// res.send();
// res.sendFile()
// res.redirect();


//设置端口，启动服务器
app.listen(9999, () => { console.log('http://localhost:9999 服务器已启动') });