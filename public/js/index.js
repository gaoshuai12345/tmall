

 (function (){
  
  
  //因为无论进入按钮，还是进入ul，都要保证ul显示
//因为无论从按钮出，还是从ul出，都要关闭ul
//又因为按钮和ul都是包含在一个div内的
//所以，应该把鼠标进入和移出事件绑定在共同的父元素div上
//1. 查找触发事件元素:
$("li.dropdown")
//2. 绑定事件处理函数
//当鼠标进入div时
    .mouseover(function(){
      //3. 查找要修改的元素
      $(".dropdown-menu")
        //4. 修改元素
          .css("display","block")
      //dropdown-menu.show();
    })
//当鼠标移出div时
    .mouseout(function(){
      //3. 查找要修改的元素
      $(".dropdown-menu").hide();
      //4. 修改元素
      //  .css("height",0)
    });
var i=0;
var LIWIDTH=1130;
var DURATION=500;
var LICOUNT=7;
var ulImgs=document.getElementById("ul-imgs");
var ulIdxs=document.getElementById("ul-idxs");
var lis=ulIdxs.children;
function moveTo(to){
  if(to==undefined){
    to=i+1;
  }
  if(i==0){
    if(to>i){
      ulImgs.className="transition";
    }else{
      ulImgs.className="";
      ulImgs.style.marginLeft=-LIWIDTH*LICOUNT+"px";
      setTimeout(function(){
        moveTo(LICOUNT-1);
      },1000);
      return;
    }
  }
  i=to;
  ulImgs.style.marginLeft=-i*LIWIDTH+"px";
  for(var li of lis){
    li.className=""
  }
  console.log(i);
  if(i==LICOUNT){
    i=0;
    setTimeout(function(){
      ulImgs.className="";
      ulImgs.style.marginLeft=0;
    },DURATION)
  }   
  // lis[i].className="active";
}

// var interval=3000;
var timer=setInterval(function(){
  moveTo()
},3000);
var banner=document.getElementById("banner");
banner.onmouseover=function(){
  clearInterval(timer);
}
banner.onmouseout=function(){
  timer=setInterval(function(){
    moveTo()
  },3000);
}
var ulIdxs=document.getElementById("ul-idxs");
var canClick=true;
ulIdxs.onclick=function(e){
  if(canClick){
    var li=e.target;
    if(li.nodeName=="LI"){
      if(li.className!=="active"){
        for(var i=0;i<lis.length;i++){
          if(lis[i]==li){
            break;
          }
        }
        moveTo(i);
        setTimeout(function(){
          canClick=true;
        },DURATION);
      }
    }
  }
}
var $uname=localStorage.getItem("uname")
//console.log($uname)
// document.getElementById("uname").innerHTML="欢迎"+$uname;
if($uname !=""&&$uname!=null){
  document.getElementById("uname").innerHTML="欢迎"+$uname;
  document.getElementById('dl').style.display="none";
  document.getElementById('zc').style.display="none";
  document.getElementById('quit').style.display="inline";
}else{
  document.getElementById("uname").innerHTML="喵，欢迎来天猫"
}


// var Suid = sessionStorage.getItem("Suid");
// var Suname = sessionStorage.getItem("Suname")
// var nav_head=document.querySelector("#nav_head")
// if(Suid!=null){
//   nav_head.innerHTML=`<em>喵，欢迎来天猫</em>
//   <a href="javascript:;">${Suname}</a>
//   <a href="#">退出</a>`
// }else{
//   nav_head.innerHTML=`<em>喵，欢迎来天猫</em>
//   <a href="login.html">请登录</a>
//   <a href="#">免费注册</a>`
// }
$(function(){
    /*公共部分
     * footer CopyRight
     */
    $(".footerpage").load("footer.html");
})
} )();
function quit(){
  localStorage.removeItem("uname");
  document.getElementById("uname").innerHTML="喵，欢迎来天猫"
  document.getElementById('dl').style.display="inline";
  document.getElementById('zc').style.display="inline";
}