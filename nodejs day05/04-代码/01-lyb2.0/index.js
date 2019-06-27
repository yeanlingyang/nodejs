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
        // 读取data.json 中数据
        fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf-8', (err, data) => {
            if (err) { return console.log(err); }
            //读取成功
            data = JSON.parse(data); //把json字符串转成对象
            // 对数据进行排序 
            data.list.sort((a, b) => b.id - a.id);
            // console.log(data);
            let str = template(path.join(__dirname, 'pages', 'index.html'), data);
            // 把渲染的结构返回给浏览器解析
            res.end(str);
            
        })
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
        // 获取id
        let id = url.parse(req.url, true).query.id;
        // console.log(id);
        // 读取data.json中的数据
        fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf-8', (err, data) => {
            if (err) { return console.log(err); }
            data = JSON.parse(data); // json字符串转成数组
            console.log(data); // data.list 是数组 数组根据下标删除
            // 根据id 查找下标 
            let index = data.list.findIndex(v => v.id == id);
            console.log(index);
            // 根据下标删除
            data.list.splice(index, 1);
            // data对象转json
            // JSON.stringify(数据, 处理数据null,  格式化空格数)  把数据转出json字符串，可以格式化json字符串
            // 空格数 小于等于10
            data = JSON.stringify(data, null, 2);
            // 把删除后数据存到data.json中
            fs.writeFile(path.join(__dirname, 'data', 'data.json'), data, 'utf-8', err => {
                if (err) { return console.log(err) }
                // 写入成功
                // 跳转首页（重新渲染首页）
                // js location.href = '/index'; 前端的做法
                // 页面跳转是浏览器行为， 后台无法直接控制浏览器跳转，但是后台可以通知浏览器，让浏览器自己跳转
                res.statusCode = 302; //必须设置的
                res.setHeader('location', '/index'); //跳转地址 
                res.end(); // 终止响应 
            });      
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
        //      后台要获取表单的数据： url.parse(req.url).query;
        //       把表单的数据添加到data.json中:
        //         1-先读取data.json的数据，转成数组，向数组中添加
        //         2-添加完成后，把数组转出json字符串，在存储到data.json中 
        // 3-3 跳转到首页，看到添加的效果   

        // 1-后台要获取表单的数据
        let info = url.parse(req.url, true).query; 
        console.log(info);
        // 2-给数据设置id和创建时间 
        info.id = Date.now(); //时间戳
        // moment 时间格式化模块    
        info.created = moment().format('YYYY年M月D日 HH:mm:ss'); // 2019年6月12日 22:35:24 
        // console.log(info);  
        // 3-把数据添加到data.json中
        fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf-8', (err, data) => {
            if (err) { return console.log(err); }
            data = JSON.parse(data); //json转成对象 
            data.list.push(info); //把新数据添加到data.list中  
            data = JSON.stringify(data, null, 2); //转成json字符串 
            //写入到data.json中
            fs.writeFile(path.join(__dirname, 'data', 'data.json'), data, 'utf-8', err => {
                if (err) { return console.log(err); }
                // 写入成功后，跳转到首页
                res.statusCode = 302; //状态码
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

        // 由于post方式传递数据量可能很大， 会被分割成多个片段进行传递， 后台需要使用事件进行监听， 接受前端多次传递数据片段， 进行拼接；  当前端数据传输完成后，把片段拼接成原数据，就可以使用了；
        //持续接受前端传递post数据 
        let str = '';
        // let num = 0;
        req.on('data', function (chunk) {
            str += chunk;
            // console.log(++num);            
        });
        // 如果前端post数据传递完成看，会触发一个end事件 
        req.on('end', function () {
            // post数据传递完成， 可以使用数据了
            console.log(str); // nickname=77&title=77&content=77 
            // 1-把str转成对象
            let info = queryString.parse(str); //对象 
            // 2- 添加id 和  创建时间 
            info.id = Date.now();
            info.created = moment().format('YYYY年M月D日 HH:mm:ss');
            console.log(info);
            //  把数据添加到data.json中 
            // 3-读取data.json数据
            fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf-8', (err, data) => {
                if (err) { return console.log(err); };
                data = JSON.parse(data); //转成对象
                data.list.push(info); //添加新数据
                data = JSON.stringify(data, null, 2); //转回json字符串
                fs.writeFile(path.join(__dirname, 'data', 'data.json'), data, 'utf-8', err => {
                    if (err) { return console.log(err); }
                    //跳转到首页 
                    res.statusCode = 302; //设置状态吗
                    res.setHeader('location', '/index'); //设置跳转地址 
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
