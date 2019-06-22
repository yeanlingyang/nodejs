// 后台渲染： 后台从数据库中取数据， 把取出数据 配合模板引擎进行渲染
// art-template 
// 1- 下载模板  npm i art-template 
// 2- 使用 
// 2-1 引入 
// 2-2 准备模板 (是一个单独html文件)
// 2-3 准备数据 (对象) 
// 2-4 把数据和模板绑定生成html结构
// template(模板的绝对路径， 数据);
const path = require('path');

// 1-引入
const template = require('art-template');
// 2-准备模板
// 3-准备数据
let obj = {
    title: '黑马程序员',
    list: ['大前端', 'JAVA', 'UI设计', 'python', '产品经理']
}
// 4 把数据和模板绑定生成html结构
let str = template(path.join(__dirname, 'pages', 'index.html'), obj);

console.log(str);

// res.end(str);

// 小结：
// 1-下载npm i art-template 
// 2-引入 
// 3-准备模板 ： 模板是单独html文件 
// 4-准备数据： 数据是对象
// 5-绑定数据和模板，生成结构



