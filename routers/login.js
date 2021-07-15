//引入express框架
const express = require('express');
//引入连接池模块
const pool = require('../pool.js');
//创建连接池对象
var router = express.Router();
//创建路由
router.get('/login_get',(req,res)=>{
    // router.post('/',(req,res)=>{
    var $uname = req.query.uname;
    var $upwd = req.query.upwd;
    if(!$uname){
        res.send('没有获取到用户名');
        return;
    }
    if(!$upwd){
        res.send('没有获取到用户密码');
        return;
    }
    //使用连接池访问数据库/*  */
    var sql = "SELECT  * FROM tmall_user WHERE uname=? AND upwd=?"
    pool.query(sql,[$uname,$upwd],(err,result)=>{
        if(result.length>0){
            res.send('登陆成功');
        }else{
            res.send('用户名或密码错误');
        }
    })
});
//导出路由对象
module.exports=router;