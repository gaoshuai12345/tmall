//引入express框架
const express = require('express');
//引入连接池模块
const pool = require('../pool.js');
//创建连接池对象
var router = express.Router();
//创建路由
//restful
// router.get("/login_get/:uname&:upwd",(req,res)=>{
//     var $uname = req.params.uname;
//     var $upwd = req.params.upwd;
//  router.get('/login_get',(req,res)=>{

//     console.log(111111)
    // var $uname = req.query.uname;
    // var $upwd = req.query.upwd;
    //post
    router.post("/login_post",(req,res)=>{
    var $uname = req.body.uname;
    var $upwd = req.body.upwd;
    if(!$uname){
        res.send('没有获取到用户名');
        return;
    }
    if(!$upwd){
        res.send('没有获取到用户密码');
        return;
    }
    //使用连接池访问数据库/*  */
    var sql = "SELECT  *FROM tmall_user WHERE uname=? AND upwd=?"
    pool.query(sql,[$uname,$upwd],(err,result)=>{
        // if(result.length>0){
        //      res.send(1);
        // }else{
        //     res.send(0);
        // }
        // if(err) {
        //     throw err
        // }
        // else{
        //     if(result.length>0){
        //         res.send(1)
        //     }else{
        //         res.send(0)
        //     }
            
        // }
        if(err) throw err;
	    if(result.length>0){
	        res.send('1');
	    }else{
	        res.send('0');
	    }
    })
});
//导出路由对象
module.exports=router;