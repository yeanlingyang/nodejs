-- 我是注释
-- sql 是关系型数据通用的语言
-- 通过sql语句 对数据库进行增删改查

-- 1- 查看数据库的所有数据
-- select * from 表名;
-- select * from stu; 

-- 2- 增 添加
-- insert into 表名 (键1，键2， 键...)  values (值1， 值2， 值..); 
-- 要求： 键值 必须一一对应；
-- insert into stu (name, age, sex) values ('周芷若', 18, 'f');


-- 3- 删 删除
-- delete from 表  删除全部数据；
-- delete from 表 where 条件； 
-- delete from stu;
-- 删除id为8的数据 
-- delete from stu where id = 9;

-- 4-改 修改数据
-- update 表名 set 键 = 值 ， 键 = 值 where 条件;
-- update stu set age = 10;  --  修改整个表 
-- update stu  set name = '灭绝师太' , age = 9, sex='m' where id = 8;

--  5- 查  查找
-- select 字段列表（列名） from  表名 where 条件；
-- * 表示所有字段（列）
-- select * from stu; 
-- select id, name from stu;
-- 查找年龄小于50岁
-- select * from stu where age < 50;


-- select * from stu;
-- 查找 年龄大于10 小于 30人；
-- sql 与或非： and  or !
-- select * from stu where age > 10 and age < 30;


-- 条件查询：


-- 关键字 like 
-- 通配符 % 
-- 模糊匹配 查找姓张的人   
-- select * from stu where name like '张%';

-- 查找名字包含三的人
-- select * from stu where name like  '%三%';

-- 查找id 为 1， 3， 4的人 
-- select * from stu where id = 1 or id = 3 or id = 4;
-- in 语法： 一对多查询
-- select * from stu where id in (1, 3, 4, 7);

-- 排序 order by 字段   默认升序 
--    order by 字段 desc 降序 
-- select * from stu  order by id desc;
-- 根据年龄进行排序
select * from stu order by age desc;





select * from stu; 