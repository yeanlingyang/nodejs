
require('fs');
require('mime');
require('jquery');
require('./a');

// node中模块的查找规则
// 1-require(模块名称)  引入模块时， 会判断 当前模块是否是路径， 如果是路径，说明是自定义模块，就相对于当前js文件去找；
// 2-如果不是路径， 先当前核心模块去找， 再当做第三方模块去找

// 第三方模块的查找规则：
// 以jqeury为例 
// 1- 会去当前js文件同级 找 node_modules目录 
// 2- 在node_modules目录  中 去 和 模块名称相同的目录(jquery)
// 3-在模块同名的目录（jquery）下面 找 package.json的文件 
// 4- 在package.json下面 找一个main属性，main属性指向的地址就是要引入的文件
// 5- 如果模块同名的目录（jquery） 下面：
    // 没有package.json文件 
    // package.json文件  没有main属性 
    // main属性 指向地址有误
    // 此时： 会在模块同名的目录（jquery） 下面，找index开头文件（index.js , index.node , index.json) 作为模块文件进行引入；

// 6- 如果当前目录没有node_modules目录， 就会去上级以目录进行查找，如果找到，会按照前5步规则进行查找
// 7- 如果上一级目录没有，继续向上一级目录查找， 直到磁盘根目录位置；
// 8- 到磁盘根目录还是没有找到，会报错 cannot find module xxx ;

