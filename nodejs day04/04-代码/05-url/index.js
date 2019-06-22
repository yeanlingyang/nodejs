// 使用node中提供的url模块 来解析url地址（可以快速分割url地址的各个部件）
// 1- 引入
const url = require('url');

let str = 'http://localhost:9999/delete?id=1560352105439&name=zs&age=18';
// 2-使用 
// url.parse(url, 是否解析查询字符串 ); 来解析url地址
// url模块 可以快速分割url地址的各个部分，但是默认不会解析 查询字符串, 当第二个参数设置为true时， url模块会去调用querystring模块的parse()方法解析查找字符串，返回一个对象;
// console.log(url.parse(str, true));
console.log(url.parse(str, true).query);
console.log(url.parse(str, true).query.id);
console.log(url.parse(str, true).query.name);

// id=1560352105439&name=zs&age=18  查询字符串 （queryString）
// 小结
// url.parse(url地址， 是否解析查询字符串) 默认是不解析 false;

