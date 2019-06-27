// 0-搭建一个服务器，根据不同请求，返回不同页面；
// 1-首页动态渲染
const http = require('http');
const fs = require('fs');
const path = require('path');
const template = require('art-template');
const mime = require('mime');
const url = require('url');
const moment = require('moment');
const queryString = require('querystring');


const server = http.createServer();
server.on('request', (req, res) => {
    // 根据不同请求，返回不同页面；
    console.log(req.url);
    if (req.url.startsWith('/index') || req.url === '/') { //首页
        //动态渲染首页
        //   1-1 读取data.json 中数据， 转成js对象 
        //   1-2 把读取的数据和模板进行绑定，生成结构
        //   1-3 把生成的结构返回给浏览器解析     
        readData(function (data) {
            // 排序
            data.list.sort((a, b) => b.id - a.id);
            // 把数据和模板进行绑定渲染
            let str = template(path.join(__dirname, 'pages', 'index.html'), data);
            res.end(str);
        });
    }  else if (req.url.startsWith('/assets')) {  //静态资源
        fs.readFile(path.join(__dirname, req.url), (err, data) => {
            if (err) { return console.log(err); }
            // 告诉浏览器 返回资源的类型 
            res.setHeader('content-type', mime.getType(req.url));
            //返回读取的静态资源
            res.end(data);
        })
    } else if (req.url.startsWith('/delete')) { //删除数据 
        // 2-1 前端点击删除按钮，请求后台/delete地址, 并且传递id到后台 
        // 2-2 后台获取前端传递id， 根据id删除对应的数据
        // 2-3 页面重新渲染，看到删除效果       
        let id = url.parse(req.url, true).query.id; //获取id 
        // readData(function (data) {

        // })
        readData(data => {
            //根据id找下标 
            let index = data.list.findIndex(v => v.id == id);
            data.list.splice(index, 1); //删除
            data = JSON.stringify(data, null, 2); 
            writeData(data, () => {
                //跳转到首页
                res.statusCode = 302;
                res.setHeader('location', '/index');
                res.end();
            })
        })
    } else if (req.url.startsWith('/add')) { //添加页面
        // 读取add.html页面内容，返回给浏览器进行解析
        fs.readFile(path.join(__dirname, 'pages', 'add.html'), (err, data) => {
            if (err) { return console.log(err); } 
            // 返回读取的页面
            res.end(data);
        })
    } else if ( req.url.startsWith('/submit') && req.method == 'GET') { //保存前端提交的数据 
        // 3-1 前端点击提交按钮，提交表单数据到后台
        // 3-2 后台要获取表单的数据， 把表单的数据添加到data.json中
        // 3-3 跳转到首页，看到添加的效果  
     
        let info = url.parse(req.url, true).query;
        //设置id 和 创建时间 
        info.id = Date.now();
        info.created = moment().format('YYYY年M月D日 HH:mm:ss');
        readData(data => {
            data.list.push(info); 
            data = JSON.stringify(data, null, 2);
            writeData(data, () => {
                //跳转到首页
                res.statusCode = 302;
                res.setHeader('location', '/index');
                res.end();
            })
        })

        
    } else if (req.url.startsWith('/submit') && req.method == 'POST') { // post 提交 数据  
        // res.end('submit post');
        // 后台要获取表单的数据， 把表单的数据添加到data.json中
        // 跳转到首页，看到添加的效果   
        // get 会在url拼数据， 数据量小
        // post 用请求体传数据，数据量没有限制 
        
        let str = '';
        req.on('data', chunk => {
            str += chunk;
        })

        req.on('end', () => {
            let info = queryString.parse(str); 
            info.id = Date.now();
            info.created = moment().format('YYYY年M月D日 HH:mm:ss');
            readData(data => {
                data.list.push(info); 
                data = JSON.stringify(data, null, 2);
                writeData(data, () => {
                    //跳转到首页
                    res.statusCode = 302;
                    res.setHeader('location', '/index');
                    res.end();
                })
            })
        })


    }else {
        res.end('404');
    }    
});
// 启动
server.listen(9999, () => console.log('http://localhost:9999 服务器已启动'));


// 由于 读写data.json代码多次使用，遂封装 
// 封装目的： 提高代码复用性 
// 如何封装： 提取公共代码， 变化部分 做成参数 

// readData(function (data) { });

// 读取data.json方法 
function readData(fn) {
    fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf-8', (err, data) => {
        if (err) { return console.log(err); }
        //读取成功
        data = JSON.parse(data); //把json字符串转成对象
        // 读取数据后，如何处理数据是不确定
        fn && fn(data);
        // if (fn) { fn(data) };
    })
}

function writeData(data, fn) {
    fs.writeFile(path.join(__dirname, 'data', 'data.json'), data, 'utf-8', err => {
        if (err) { return console.log(err); }
        //数据写入完成后，如何处理 不确定？
        fn && fn();
    })
}
