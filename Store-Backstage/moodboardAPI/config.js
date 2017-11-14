/*
* @Author: lihongjie
* @Date:   2017-11-06 16:02:22
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-10 12:01:14
*/

'use strict';
 const devConfig = {
    mongoDbHost : 'localhost',
    mongoDbPort : ':27017',
    mongoDbName : '/shop',
    host : 'localhost',
    port : '8080',
    isDev : '',
    apiPort:3000,
    requestAPI:'http://localhost:8888/api/',//api地址
    cookieName:'hchBlog',   //cookie名字
    expires:'30',           //cookie失效时间（天）
    jwtSecret:'lihongjie'  //jwt加密钥匙
}
module.exports=devConfig