// 1-引包
const express = require('express');
const bodyParser = require('body-parser');

// 2-创建服务器
const app = express(); 

// 给req.body进行赋值的
// 使用中间件 给req.body赋值
app.use( bodyParser.urlencoded() ); 

// 3-监听请求  匹配所有的请求
app.use((req, res) => {
    // req.url 
    // req.method 
    // req.headers 
    // express 新增：
    // req.query 存放get方式传递数据
    //     req.query = url.parse(req.url, true).query;
    // req.body  存放post方式传递数据
    //     但是默认值是undefined的， 需要我们手动赋值；需要使用body-parser模块进行赋值
    // console.log(req.query);

    console.log(req.body); 
    
    res.send('ok');
    
})

//4-启动服务器
app.listen(9999, () => { console.log('http://localhost:9999 服务器已启动') });