const config=require('./config')
global.config=config
const express=require('express');
const app =express();
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
             extended:true,
    }));
// parse application/json
app.use(bodyParser.json({ type: 'application/json' }))
const router=require('./router');
app.use(express.static("./static"));
//设置跨域访问
app.all('*', function(request, response, next) {
   /*res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "X-Requested-With");
   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
   res.header("X-Powered-By",' 3.2.1');
   res.header("Content-Type", "application/json;charset=utf-8");*/
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Credentials", "true");
        response.setHeader("Access-Control-Allow-Methods", "*");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type,Access-Token");
        response.setHeader("Access-Control-Expose-Headers", "*");


   next();
});
app.set('port',config.apiPort)

app.use(function(err, req, res, next) {
    var meta = '[' + new Date() + '] ' + req.url + '\n'
    errorLog.write(meta + err.stack + '\n')
    next()
})


app.all('*',router)
//配置服务端口
let server = app.listen(app.get('port'), function () {
    console.log('请打开浏览器localhost: ' + app.get('port'));
})