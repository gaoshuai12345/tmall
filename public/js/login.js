document.onkeydown = function (e) { // 回车提交表单
        var theEvent = window.event || e;
        var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
        if (code == 13) {
            btnsubmit()
        }
    }
function btnsubmit(){
    if(uname.value.replace(/(^s*)|(s*$)/g, "").length ==0){
        document.getElementById('dialog').innerHTML="请输入用户名";
        document.getElementById('dialog').style.display="block";
     } else if(upwd.value=="" || upwd.value==" "){
        document.getElementById('dialog').innerHTML="请输入密码";
        document.getElementById('dialog').style.display="block";
    }else{
        document.getElementById('dialog').style.display="none"
    }  
    // //1.dom接收数据
    // var u_name = uname.value;
    // var u_pwd = upwd.value;
    // // sessionStorage.setItem('uname',u_name);
    // //2.0ajax异步连接服务器
    // //2.1创建异步对象
    // var xhr = new XMLHttpRequest();
    // //2.4创建监听，获取响应数据
    // xhr.onreadystatechange = function(){
    //     if(xhr.readyState == 4 && xhr.status == 200){
    //         var result = xhr.responseText;
    //         if (result==1){
    //             alert("登录成功");
    //             location.href="http://127.0.0.1:8080/index.html"
    //         }else{
    //             alert("登录失败")
    //         }
    //     }
    // }
    // //2.2打开链接，创建请求
    // var url = "http://127.0.0.1:8080/login/login_get?uname="+u_name+"&upwd="+u_pwd;
    //  xhr.open("get",url,true);
    // // xhr.open("post",url,true);
    // //post 需要加消息头
    // //  xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    // //2.3发送请求
    // xhr.send();
    // //获取用户输入的数据
    var $uname = uname.value;
    var $upwd = upwd.value;
    //ajax操作post
    //1.获取xhr异步对象
    var xhr = new XMLHttpRequest();
    //4.绑定监听
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
           var result = xhr.responseText;
            if(result==1){
                // setTimeout(function(){
                   // alert("登陆成功")
                    localStorage.setItem("uname",$uname);
                    console.log($uname)
                    location.href="http://127.0.0.1:8080/index.html"
                //},3000);

            //     // alert("登陆成功");
            //     // location.href="http://127.0.0.1:8080/index.html"
             }else{
                alert("登陆失败");
             }
        }
    }
    //2.打开链接
    var url = "http://127.0.0.1:8080/login/login_post"
    xhr.open("post",url,true);
    var formdata = "uname="+$uname+"&upwd="+$upwd;
    // console.log(formdata);
    //由于要传递整个请求主体
    //请求主体中有特殊字符，必须修改请求头
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    // 3.发送请求
    xhr.send(formdata);
    //
    //restful
    //获取用户输入的数据
    // var $uname = uname.value;
    // var $upwd = upwd.value;
    //  //2.0ajax异步连接服务器
    // //2.1创建异步对象
    // var xhr = new XMLHttpRequest();
    // //2.4创建监听，获取响应数据
    // xhr.onreadystatechange = function(){
    //     if(xhr.readyState == 4 && xhr.status == 200){
    //         var result = xhr.responseText;
    //         if (result==1){
    //             alert("登录成功");
    //             location.href="http://127.0.0.1:8080/index.html"
    //         }else{
    //             alert("登录失败")
    //         }
    //     }
    // }
    // //2.2打开链接，创建请求
    // var url = "http://127.0.0.1:8080/login/login_get/"+$uname+"&"+$upwd;
    //  xhr.open("get",url,true);
    //  //2.3发送请求
    // xhr.send();

}
