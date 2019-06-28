// 引包
const express = require('express');

// 创建服务器
const app = express(); 

// 2-设置express 使用的模板引擎
// app.engine(模板后缀名， 模板 )
app.engine('html', require('express-art-template'));
// 模板存放目录
app.set('views', 'pages');


let obj = {
    title: '前端41期',
    list: [100, 200, 300, 50, 800, 80]
}

// 监听请求
app.use((req, res) => {
    // let str = template(path.join(__dirname, 'pages', 'index.html), obj)
    // res.end(str);
    // res.render(模板名称, 数据);    
    res.render('index.html', obj);
});

//启动服务器
app.listen(9999, () => { console.log('http://localhost:9999 服务器已启动') });


// 在expres中使用art-template模板引擎 
// 1- 下载  npm i art-template  express-art-template 
// 2- 在express中进行设置 
    //设置使用模板 
    // app.engine(模板的后缀名, 模板);
    // 模板引擎 默认会去 js文件同级找views目录，去里面找模板文件， 我们也可以自己设置模板位置
    // app.set('views', 目录)
// 3- 渲染页面 
    // res.render(模板名， 对象);