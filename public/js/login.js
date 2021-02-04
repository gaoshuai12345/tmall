
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
    //1.dom接收数据
    var u_name = uname.value;
    var u_pwd = upwd.value;
    //2.ajax异步连接服务器
    //2.1创建异步对象
    var xhr = new XMLHttpRequest();
    //2.4创建监听，获取响应数据
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            var result = xhr.responseText;
            alert(result);
        }
    }
    //2.2打开链接，创建请求
    var url = "http://127.0.0.1:8080/login_get?uname="+u_name+"&upwd="+u_pwd;
    // xhr.open("get",url,true);
    xhr.open("post",url,true);
    //post 需要加消息头
     //xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    //2.3发送请求
    xhr.send();
}