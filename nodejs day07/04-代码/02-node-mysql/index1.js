// 操作数据
const db = require('./db');

//删除 
// db.myQuery('delete from stu where id =?', 10, data => {
//     console.log('删除成功');    
// });

// 添加 
// db.myQuery('insert into stu set ?', { name: '张益达', age: 38, sex: 'm' });

// 修改
// db.myQuery('update stu set ? where id = ?', [{ name: '张翼德', age: 600, sex: 'f' }, 15], () => {
//     console.log('修改成功');    
// })

// 查询
db.myQuery('select * from stu', null, data => {
     console.log(data);     
});