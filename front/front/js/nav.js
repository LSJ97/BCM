var nav = document.getElementsByClassName("nav");
var nav2 = document.getElementsByClassName("nav2")
var dep2 = document.getElementsByClassName("dep2")

function nav_on(){
    nav[0].style.backgroundColor="white";     
    nav2[0].style.height="300px";
    for(var i = 0; i<dep2.length; i++){
        dep2[i].style.height="300px"; 
    }
}

function nav_off(){
    /*setTimeout(function() {
        nav[0].style.backgroundColor="transparent"; 
    }, 1000);             오류있음 이유모르겠*/
    nav[0].style.backgroundColor="transparent";   /*transparent = 투명한*/
    nav2[0].style.height="0px";
    for(var i = 0; i<dep2.length; i++){
        dep2[i].style.height="0px"; 
    }
}