let filepath = path.join(__dirname, 'pages', 'index.html'); 

let r = fs.readFile(filepath,  function(err, data) {
    if (err) { return console.log(err); }
    return data
}
);

res.end(r)





/* 
    前后端是否分离：
        看 数据谁来渲染
        前端渲染： 前后端是分离的
            1- 前端ajax请求
            2- 后台返回json数据 
            3- 前端使用模板进行渲染 

        后台渲染： 前后端是不分离的
            1- 前端请求
            2- 后台去读取数据，并且使用模板进行渲染， 把渲染好的页面返回给前端 
            3- 浏览器直接解析返回的内容即可；

        前后端不分离弊端：
            1- 代码逻辑混乱，代码不分离，不方便项目后期维护
            2- 对后台程序员要求很高，后台需要会前端 
            3- 随之时代发展， 前端上网设备多元化， 后台渲染 无法适配前端的各种设备，前端渲染 可以动态监测当前设备，根据设备屏幕，动态生成符合当前设备布局的页面；
*/ 
