// querystring 模块 是用来解析查询字符串的
const queryString = require('querystring');  

let str = 'id=1560352105439&name=zs&age=18';


console.log(queryString.parse(str));
