# 基本概念

## 为什么要有数据库

没有数据库，我们的数据都是存储在文件当中的，那么文件存储数据的缺点有：

+ 文件的安全性问题。
+ 文件不利于查询和对数据的管理。
+ 文件不利于存放海量数据
+ 文件在程序中控制不方便

## 什么是数据库

数据库，简而言之可视为电子化的文件柜——存储电子文件的处所，用户可以对文件中的数据运行增加、删除、修改、查询等操作。

前端程序员只需要对数据库有一定了解即可。

**浏览器---->服务器---->数据库**

## 数据库的分类

关系型数据库：

 + **MySQL**、
 + Oracle、
 + SQL Server
 + SQLite（安卓）

非关系型数据库

+ mongodb
+ redis
+ BigTable



DBA

## 数据库中基本术语

+ 数据库`database`：存放数据的仓库，一般一个项目中的数据会存储到一个数据库中
+ 表`table`： 一个表对应一类数据，比如学生表，老师表
+ 列`columns`:一张表由多列组成，也叫一个字段，比如学生的姓名，成绩，年龄等
+ 行`rows`: 一个学生信息对应一行，一行也叫一条记录。



# 数据库的可视化操作

## 创建数据库

## 创建表

```
存储以下学生信息

{id: 1, name: '张三', age: 18, gender: '男', content: '这是描述信息‘}
```



## 数据类型

`int`: 整数类型

`varchar`: 字符类型

`datetime`: 日期类型

# 数据库的常见命令

> SQL: 结构化查询语言(Structured Query Language)简称SQL  。用于数据库的增删改查以及管理等功能。

## 数据库相关

+ `--`SQL中的注释
+ `SHOW DATABASES;` 查看所有的数据
+ `CREATE DATABASE mydb;` 创建数据库
+ `DROP DATABASE mydb;`删除数据库

+ `USE mydb;` 使用数据库

## 表相关

+ `SHOW TABLES;`查看当前数据库中所有的表
+ 创建表

```sql
CREATE TABLE user(
	id INT auto_increment PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	age INT ,
	gender VARCHAR(4),
	content VARCHAR(255)
)
```

+ `DROP TABLE user;`删除表

## 插入数据

```sql
INSERT INTO user (name, age, gender, content) VALUES ('胡聪聪', 18, '男', '哈哈哈，哈哈哈')
-- 如果省略列名，那么必须要和字段一一对应
INSERT INTO user VALUES (null, '胡聪聪', 18, '男', '哈哈哈，哈哈哈')

INSERT INTO user SET name='hcc', age=18, gender='男', content='嘻嘻嘻'
```

## 修改数据

```sql
// 修改所有的数据
UPDATE USER SET name='胡西西'
// 根据条件修改
UPDATE USER set name='胡聪聪', content="这是内容" WHERE id = 2
```



## 删除数据

```sql
// 删除所有的数据
DELETE FROM USER

// 删除id为5的数据
DELETE FROM USER WHERE id = 5
```



## 查询数据

```sql
-- 查询所有数据
SELECT * FROM user

-- 查询指定列
SELECT id, name,age from user

```



## 条件查询

```sql
--- 并且
SELECT * from user where name='胡聪聪' AND age=21

--- 或者
SELECT * from user where name='胡聪聪' or age=21

-- 范围查询

-- 模糊查询  %表示通配  _表示单个字符
SELECT * from user where name LIKE '胡%'

-- in语句
SELECT * from user where name in ('胡聪聪', 'hcc')

-- order by
-- 排序需要写在最后面，，asc升序  desc：降序
SELECT * from user ORDER BY id desc

-- limit分页
SELECT * from user ORDER BY id desc limit 3
SELECT * from user ORDER BY id desc limit 3,3


-- 获取总条数
SELECT count(*) as total FROM user
```



## 导入和导出数据库脚本

# node操作mysql

## 基本使用

+ 安装

```bash
npm install mysql
```

+ 基本使用

```js
// 导入第三方包
const mysql = require('mysql')
// 创建连接
var connection = mysql.createConnection({
  // 本地
  host: 'localhost',
  user: 'root',
  password: 'root',
  // 数据库名称
  database: 'mydb',
  port: 3306
})

// 连接数据库
connection.connect()

// 执行sql语句
connection.query('select * from user where id = 8', (err, result) => {
  if (err) return console.log('查询失败', err)
  // result返回的是数组， 数组中是一个对象
  console.log(result)
})

// 关闭连接
connection.end()

```



## 查询语句

```js
var name = '胡聪聪'
// 使用?表示占位，可以防止sql注入
connect.query(`select * from user where name=?`, name, (err, result) => {
  if (err) return console.log('错误了', err)
  console.log(result)
})
```



## 插入语句

```js
connect.query(
  'insert into user (name, age, gender, content) values (?, ?, ?, ?)',
  ['胡嘻嘻', 18, '男', '哈哈哈哈'],
  err => {
    if (err) return console.log('错误', err)
    console.log('添加成功了')
  }
)

// 方式2
connect.query(
  'insert into user set ?',
  {
    name: '胡洗洗',
    age: 30,
    gender: '男',
    content: '哈哈哈'
  },
  (err, result) => {
    if (err) return console.log('错误', err)
    console.log('添加成功了', result)
  }
)

```



## 修改语句

```js
connect.query(
  'update user set ? where id = ?',
  [
    {
      name: '胡洗洗',
      age: 30,
      gender: '男',
      content: '哈哈哈'
    },
    10
  ],
  (err, result) => {
    if (err) return console.log('错误', err)
    console.log('添加成功了', result)
  }
)
```



## 删除语句

```js
connect.query('delete from user where id = ?', [10], (err, result) => {
  if (err) return console.log('失败', err)
  console.log(result)
})
```





## db模块封装

```js
// 导入mysql
const mysql = require('mysql')

// 创建连接对象
const connect = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'mydb'
})

exports.query = function(sql, params, callback) {
  connect.connect()
  connect.query(sql, params, (err, data) => {
    callback &&  callback(err, data)
  })
  connect.end()
}

```

