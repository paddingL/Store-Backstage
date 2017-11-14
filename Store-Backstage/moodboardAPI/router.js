/*
* @Author: Marte
* @Date:   2017-11-08 15:29:21
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-14 16:43:27
*/

'use strict';
const express = require('express')
const fs = require('fs')
const qs = require('qs')
const path = require('path')
const router = express.Router()
const db = require("./models/db");
const md5 = require("./models/md5");
const formidable = require("formidable");
var jwt = require('jwt-simple')
var questions=
{
data:213,
num:444,
age:12
};


router.all('*', function(req, response, next) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Credentials", "true");
        response.setHeader("Access-Control-Allow-Methods", "*");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type,Token");
        response.setHeader("Access-Control-Expose-Headers", "*");
        next()
})

router.all('*', function(req, res, next) {

    if(req.url.indexOf('/api')>-1||req.url.indexOf('/images')>-1||req.url.indexOf('favicon.ico')>-1){
        next()
    }else{
        res.status(304),
        res.send('接口不正确')
    }

})
//test
router.get('/api/123',function(req,res){
    console.log(questions)
res.status(200),
res.json(questions)
});
//获取商品
router.get('/api/goodlist',function(req,res){


   //验证token是否过期

    db.find("goods", {}, {"sort": {"datetime": 1}}, function (err, result) {
        console.log(result)
        if (err) {
                res.status(200),
                res.json({
                    message:'查询失败',
                    code:'500'
                }); //服务器错误
                return;
            }
        res.status(200),
        res.json({
                    message:'获取成功',
                    code:'1',
                    data:result
                });
    });



});
//登录
router.post('/api/login',function(req,res){

        console.log(req.body)
        let username=req.body.username
        let password=req.body.password
        db.find("Users", {"username": username}, function (err, result) {
            if (err) {
                res.status(200),
                res.json({
                    message:'用户名正确或密码错误',
                    code:'500'
                }); //服务器错误
                return;
            }
            ;
            if (result.length == 0) {
                 res.status(200),
                 res.json({
                    message:'用户名正确或密码错误',
                    code:'-1'
                });

                return;
            }
            ;
            if (password == result[0].password) {
//生成token
                let token= encrypt(username)
                console.log(token+"111")
                res.status(200),
                 res.json({
                    message:'登录成功',
                    code:'1',
                    token:token
                });

                return
            } else {
                res.status(200),
                 res.json({
                    message:'用户名正确或密码错误',
                    code:'0'
                });
                return
            }

        });
    //let account=JSON.parse(req.body)

});

//上传商品信息
router.post('/api/upload',function(req,res){
   let token= decrypt(req.headers.token)
   let NewDate=new Date().getTime()
   console.log(req.body)
   //验证token是否过期
   if(NewDate<=token.expires){

    var form = new formidable.IncomingForm();
    form.uploadDir='./temp';//缓存地址
    form.multiples=true;//设置为多文件上传
    form.keepExtensions=true;//是否包含文件后缀
    form.parse(req, function (err, fields, files) {
   let keys=Object.keys(files);
   let fieldsName= fields.name
   //设置存图片的地址
   let targetDir= path.normalize(__dirname + "/static/"+fieldsName+"/")

//存放图片地址
   let allImage=[]


//验证是否有这个文件夹，没有就创建
    fs.access(targetDir, function(err){
    if(err){
      fs.mkdir(targetDir,function(){
        keys.forEach(function(key,index){
        let filePath=files[key].path;//获得路径
        let fileExt = filePath.substring(filePath.lastIndexOf('.'));//截取格式
        let newpath = path.normalize(__dirname + "/static/"+fieldsName+"/")  + fieldsName + index + fileExt;//拼接新的地址
        console.log(filePath)
        console.log(newpath)
        //移动
        fs.rename(filePath, newpath,function(){
            allImage.push("http://"+config.host+":"+config.apiPort+"/"+fieldsName+"/"+ fieldsName + index + fileExt)
        })
   })
      });//异步的

    }
        keys.forEach(function(key,index){
        let filePath=files[key].path;//获得路径
        let fileExt = filePath.substring(filePath.lastIndexOf('.'));//截取格式
        let newpath = path.normalize(__dirname + "/static/"+fieldsName+"/")  + fieldsName + index + fileExt;//拼接新的地址
        console.log(filePath)
        console.log(newpath)
        fs.renameSync(filePath, newpath)//移动
   })
//向数据库中插入相应信息
         db.insertOne("goods", {
            "goodName": fields.name,
            "datetime": new Date(),
            "descripe": fields.descripe,
            "money": fields.money,
            "type": fields.type,
            "brage":fields.brage,
            "images":allImage
        }, function (err, result) {
            if (err) {
                res.send("-3"); //服务器错误
                return;
            }

                res.status(200),
                 res.json({
                    message:'添加成功',
                    code:'1',

                });


        });

  });



    })


   }

})
//生成token
function encrypt(userName){
    return jwt.encode({
        userName:userName,
        expires:new Date().getTime()+(1000*60*60*24*config.expires)
    },config.jwtSecret)
}
//解析token
function decrypt(str){
    return jwt.decode(str,config.jwtSecret)
}
module.exports = router