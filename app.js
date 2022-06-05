'use strict';

window.onscroll = function(){onScroll()};

function onScroll(){
    const btns = document.querySelectorAll(".head-btn");
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        document.getElementById("mmg-title").style.fontSize = "0px";
            
        btns.forEach(btn => {
            btn.style.height = "50px";

        })
    }
    else{
        document.getElementById("mmg-title").style.fontSize = "30px";

        btns.forEach(btn => {
            btn.style.height = "100px";
            
        })
    }
}