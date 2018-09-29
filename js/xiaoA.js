"use strict"
/*定时器*/
    window.onload=()=>{
        let n=parseInt(time.innerHTML);
        let timer=setInterval(
            (()=>{
                    if(n>0){
                        n--;
                        time.innerHTML=`${n}秒钟后页面自动跳转回首页`;
                    }else{
                        location.replace("index.html");
												clearInterval(timer);
										}
                }
            ),1000);
    };
    function main() {
        let glass = document.getElementById("glass");
        let wuTai = document.getElementById("wuTai");
        wuTai.onclick = function (e) {
            let iid = parseInt(e.target.className.slice(7, 8));
            ajax({
                type: "get",
                url: "php/xiaoA.php",
                data: {iid},
                dataType: "json"
            }).then(output => {
                glass.style.display = "block";
                let html = ``;
                //1.1返回文字if code==1 文
                if (output[0]["code"] == 1) {
                    html += `<div class="main">
                                        <div class="back" id="back"><h3>返回</h3></div>
                                        <div class="title"><h3>${output[0]["data"][0]}</h3></div>
                                        <p>${output[0]["data"][1]}</p>
                                    </div>`;
                }
                //1.2返回图片 if code==2
                if (output[0]["code"] == 2) {
                    html += `<div class="main">
                                        <div class="back" id="back"><h3>返回</h3></div>
                                        <div class="title"><h3>${output[0]["data"][0]}</h3></div>
                                        <img src="${output[0]["data"][1]}">
                                    </div>`;
                }
                ;
                //1.3返回视频 if code=3
                if (output[0]["code"] == 3) {
                    var src = output[0]["data"][1].split("&");
                    html += `<div class="main">
                                        <div class="back" id="back"><h3>返回</h3></div>
                                        <div class="title"><h3>${output[0]["data"][0]}</h3></div>
                                        <video controls autoplay loop>
                                        <source src="${src[0]}"><source src="${src[1]}"><source src="${src[2]}">
                                         </video>
                                    </div>`;
                }
                ;
                // 1.4 返回音频 if code=4
                if (output[0]["code"] == 4) {
                    var src = output[0]["data"][1].split("&");
                    html += `<div class="main">
                                        <div class="back" id="back"><h3>返回</h3></div>
                                        <div class="title"><h3>${output[0]["data"][0]}</h3></div>
                                        <audio controls autoplay loop>
                                            <source src="${src[0]}"><source src="${src[1]}"><source src="${src[2]}">
                                        </audio>
                                    </div>`;
                }
                ;
                //1.5返回图文 code=22
                if (output[0]["code"] == 22) {
                    html += `
                                <div class="main">
                                    <div class="back" id="back"><h3>返回</h3></div>
                                    <div class="title"><h4>${output[0]["data"][0]}</h4></div>
                                    <img src="${output[0]["data"][2]}">
                                    <div class="des">${output[0]["data"][1]}</div>
                                </div>`;
                }
                ;
                glass.innerHTML = html;
                let back = document.getElementById("back");
                back.onclick = function () {
                    glass.style.display = "none";
                    glass.innerHTML = "";
                };
            });
        };
    };
    if(window.matchMedia('screen and (min-width:992px)').matches){
        console.log(1);
        /*pc:css992==960，顺序读，css读到992，这里等于960*/
        /*舞台旋转*/
        (function () {
            let wuTai=document.getElementById("wuTai");
            let yanYuan=wuTai.children;
            //console.log(yanYuan);
            let html;
            let angle=0;
            html=`<div class="yanYuan6">6音乐体</div>
                <div class="yanYuan5">5社科体</div>
                <div class="yanYuan4">4新闻体</div>
                <div class="yanYuan3">3成人体</div>
                <div class="yanYuan2">2欢乐体</div>
                <div class="yanYuan1">1恐怖体</div>`;
            wuTai.innerHTML=html;
            let timer=setInterval(function () {
                angle+=0.5;
                yanYuan[0].style.transform=`translate(${27.2*Math.cos(angle*Math.PI/180)}rem,${27.2*Math.sin(angle*Math.PI/180)}rem)`;
                yanYuan[1].style.transform=`translate(${27.2*Math.cos((angle+60)*Math.PI/180)}rem,${27.2*Math.sin((angle+60)*Math.PI/180)}rem)`;
                yanYuan[2].style.transform=`translate(${27.2*Math.cos((angle+120)*Math.PI/180)}rem,${27.2*Math.sin((angle+120)*Math.PI/180)}rem)`;
                yanYuan[3].style.transform=`translate(${27.2*Math.cos((angle+180)*Math.PI/180)}rem,${27.2*Math.sin((angle+180)*Math.PI/180)}rem)`;
                yanYuan[4].style.transform=`translate(${27.2*Math.cos((angle+240)*Math.PI/180)}rem,${27.2*Math.sin((angle+240)*Math.PI/180)}rem)`;
                yanYuan[5].style.transform=`translate(${27.2*Math.cos((angle+300)*Math.PI/180)}rem,${27.2*Math.sin((angle+300)*Math.PI/180)}rem)`;
            },35)
        })();
        /*玻璃罩*/
        main();
    }else if(window.matchMedia('screen and (min-width:768px) and (max-width: 992px)').matches){
        /*pad:css768~992==732~960，顺序读，css读到768，所以这里等于732*/
        console.log(2);
        /*舞台旋转*/
        (function () {
            let wuTai=document.getElementById("wuTai");
            let yanYuan=wuTai.children;
            //console.log(yanYuan);
            let html;
            let angle=0;
            html=`<div class="group3">
                    <span class="yanYuan6">6音乐体</span>
                    <span class="yanYuan5">5社科体</span>
                </div>
                <div class="group2">
                    <span class="yanYuan4">4新闻体</span>
                    <span class="yanYuan3">3成人体</span>
                </div>
                <div class="group1">
                    <span class="yanYuan2">2欢乐体</span>
                    <span class="yanYuan1">1恐怖体</span>
               </div>`;
            wuTai.innerHTML=html;
            let timer=setInterval(function(){
               angle+=4;
                wuTai.style.transform=`rotateX(${angle}deg)`;
            },100);
        })();
        /*玻璃罩*/
        main();
    }else if(window.matchMedia('screen and (max-width: 768px)').matches){
        console.log(3);
        /*手机 css<768==732*/
        /*舞台旋转*/
        (function () {
            let wuTai = document.getElementById("wuTai");
            let yanYuan = wuTai.children;
            //console.log(yanYuan);
            let html;
            let angle = 0;
            html = `<div class="group3">
                    <span class="yanYuan6">6音乐体</span>
                    <span class="yanYuan5">5社科体</span>
                </div>
                <div class="group2">
                    <span class="yanYuan4">4新闻体</span>
                    <span class="yanYuan3">3成人体</span>
                </div>
                <div class="group1">
                    <span class="yanYuan2">2欢乐体</span>
                    <span class="yanYuan1">1恐怖体</span>
               </div>`;
            wuTai.innerHTML = html;
            let timer = setInterval(function () {
                angle += 4;
                wuTai.style.transform = `rotateY(${angle}deg)`;
            }, 100);
        })();
        /*玻璃罩*/
        main();
    };
    window.onresize=function () {
        window.location.reload();//如果重新调用以上判断程序，在浏览器宽度持续变化的情况下，
        // 因为没有清空步骤，而导致两种效果重叠闪烁
        //reload清除了前面的残留效果，并且没有疯狂执行(渲染一次需要时间)
    }