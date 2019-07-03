// node服务器 操作 mysql数据库
// 1- 服务器 先连接数据库 
// 2- 服务器操作数据的数据
// 3- 断开数据库连接

// node操作数据： 使用 mysql模块  第三方模块 , 提供了各种操作数据方法
// 1- 下载  npm i mysql 
// 2- 引入使用 
const mysql = require('mysql');

// 1- 连接数据库
// 创建一个数据库连接对象
var con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'z_test1'
});

con.connect(); //连接数据库

// 2- 操作数据 
//  增删改查 
// sql: 传递给数据库执行sql语句 
// 参数： 
// con.query(sql, [参数], (err, data)=> {
//   err: 操作失败 错误信息
//   data:操作成功返回的数据 
// }); 
// 1- 查找全部的数据
// con.query('select * from stu', (err, data) => {
//     if (err) {
//         return console.log(err);        
//     }
//     console.log(data);    
// })
// 2- 查找10-100岁的人信息
// let max = 100; let min = 10;
// con.query('select * from stu where age > '+ min +' and age < '+ max, (err, data) => {
//     if (err) {
//         return console.log(err);        
//     }
//     console.log(data);    
// })
// 拼接字符串优化： 模板字符串 
// 1-`select * from stu where age > ${min} and age <  ${max}`
// 2- ? 进行占位 
// con.query('select * from stu where age > ? and age < ?', [10, 30], (err, data) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(data);
// })

// 添加
// con.query('insert into stu (name, age, sex) values (?, ?, ?)', ['张全蛋', 28, 'm'], (err, data) => {
//     if (err) {
//         return console.log(err);       
//     }
//     console.log(data);    
// })
// 简写
// con.query('insert into stu set ?', {name: '王小春', age: 1, sex: 'm'}, (err, data) => {
//     if (err) {
//         return console.log(err);       
//     }
//     console.log(data);    
// })

// 删除 
// con.query('delete from stu where id = ?', 11, (err, data) => {
//     if (err) {
//         return console.log(err);        
//     }
//     console.log(data);    
// })

// 修改
con.query('update stu set  ? where id = ?', [{ name: '灭绝小姐姐', age: 18, sex: 'f' }, 8], (err, data) => {
    if (err) {
        return console.log(err);        
    }
    console.log(data);    
} );


// 3- 断开连接
con.end();


// 小结：
// 1- 下载 npm i mysql 
// 2- 引入 
// 3- 创建连接对象 var con = mysql.createConnection({});
// 4- con.connect(); 连接数据库 
// 5- con.query(); 操作数据库 
// 6- con.end();  断开数据库连接