/*
    1- 服务器的概念： 
        能够提供 服务 的机器
        能够根据客户端（浏览器）请求，返回需要资源（网页、图片、视频、音频、css、js ,json数据）, 所有的资源都是放在服务器中， 用户请求后，返回给用户；
        
        服务器最基本能力： 根据用户的请求，返回需要的资源；

        在node 没有现成服务器，需要用代码来实现；


    2- http协议：
        请求 ： 浏览器发生给服务器的数据 
        响应：  服务器发生给浏览器的数据 

        请求报文：
            请求行： 请求方式  请求的地址 
            请求头： 把浏览器的相关信息发生给服务器
            请求主体： 浏览器发送给服务器的数据 

        响应报文：
            状态行：  状态码 状态文本 
            响应头：  把服务器的相关信息发生给浏览器 
            响应主体： 服务器发送给浏览器的数据


        content-type 用于设置 传递数据类型；
        前后端传递数据的时，需要设置一个明确的content-type属性,可以保证对方按照正确类型解析传递数据；否则可以出现解析出错的情况；

        状态码：
            200 成功
            302 页面重定向 
            304 缓存
            404 页面未找到 
            500 服务器

        get和post请求区别：
            1- get请求会在url后面拼接数据
                速度快， 传递量小（4kb) 、不安全 
            2-post 
                相对安全， 对上传文件大小没有限制， 上传图片，文件 用post方式 


        


*/ 