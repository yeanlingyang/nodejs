// 在node中，一个单独js文件，就是一个模块， 
// 在模块中有一个module对象, module用于表示当前模块自身， 在module对象中有一个exports(出口)属性
// 模块通过module.exports属性向外界暴露数据；module.exports 是一个空对象


console.log('我是模块a');

let name = '张全蛋';
let age = 18;

// module.exports.name = name;
// module.exports.age = age;


module.exports = 3;

module.exports = function () {
    console.log('我是函数');    
}

module.exports = {
    name: '大春哥',
    hobby: '学习'
}