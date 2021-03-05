var bottom_1 = document.getElementsByClassName("bottom_1");
var bottom_2 = document.getElementsByClassName("bottom_2");
var bottom_c_1 = document.getElementsByClassName("bottom_c_1");
var bottom_c_2 = document.getElementsByClassName("bottom_c_2");

var flag_1 = 1;
var flag_2 = 1;
 /*flag가 1이면 꺼진상태 0이면 켜진상태*/
 function bottom_script_1(){
  if (flag_1 == 1 && flag_2 == 1){                                  /*두 바텀메뉴 다 off상태 왼쪽메뉴만 on한다*/
      bottom_1[0].style.backgroundColor = "rgb(112, 152, 212)";    /*class면 [0]처럼 배열로 나타내줘야함.. 이거떄문에 2시간버림*/
      bottom_1[0].style.height="70px";            /*왠진 모르겠으나 이 함수 적용시 height가 살짝 커져서 일단 임시방편*/
      bottom_c_1[0].style.height = "400px";

      bottom_1[0].style.top="-6px";
      bottom_1[0].style.boxShadow="0px 7px 5px #3f51b5";

      flag_1 = 0;

  }
  else if (flag_1 == 1 && flag_2 == 0){
      bottom_1[0].style.backgroundColor = "rgb(112, 152, 212)";                 /*왼쪽메뉴 off 오른쪽메뉴 on인상태 왼쪽메뉴를 on하고 오른쪽메뉴를 off한다*/
      bottom_1[0].style.height="70"+"px";           
      bottom_c_1[0].style.height = "400"+"px";

      bottom_1[0].style.top="-6"+"px";
      bottom_1[0].style.boxShadow="0px 7px 5px #3f51b5";
      
      bottom_2[0].style.backgroundColor = "rgb(35, 49, 71)";
      bottom_2[0].style.top="0"+"px";
      bottom_2[0].style.boxShadow="none";
      bottom_c_2[0].style.height = "0"+"px";

      flag_1 = 0;
      flag_2 = 1;
  }
  else{                                                              /*왼쪽메뉴만 on있는상태 왼쪽메뉴를 off한다*/
      bottom_1[0].style.backgroundColor = "rgb(35, 49, 71)";
      bottom_c_1[0].style.height = "0"+"px";

      bottom_1[0].style.top="0"+"px";
      bottom_1[0].style.boxShadow="none";

      flag_1 = 1;
  }
}

function bottom_script_2(){
  if (flag_2 == 1 && flag_1 == 1){                                 /*두 바텀메뉴 다 off상태 오른쪽메뉴만 on한다*/   
      bottom_2[0].style.backgroundColor = "rgb(112, 152, 212)";  
      bottom_2[0].style.height="70"+"px";
      bottom_c_2[0].style.height = "300"+"px";

      bottom_2[0].style.top="-6"+"px";
      bottom_2[0].style.boxShadow="0px 7px 5px #3f51b5";

      flag_2 = 0;
  }
  else if (flag_2 == 1 && flag_1 == 0){                            /*오른쪽메뉴 off 왼쪽메뉴 on인상태 오른쪽메뉴를 on하고 왼쪽메뉴를 off한다*/ 
      bottom_2[0].style.backgroundColor = "rgb(112, 152, 212)";   
      bottom_2[0].style.height="70"+"px";
      bottom_c_2[0].style.height = "300"+"px";

      bottom_2[0].style.top="-6"+"px";
      bottom_2[0].style.boxShadow="0px 7px 5px #3f51b5";

      bottom_1[0].style.backgroundColor = "rgb(35, 49, 71)";
      bottom_1[0].style.top="0"+"px";
      bottom_1[0].style.boxShadow="none";
      bottom_c_1[0].style.height = "0"+"px";


      flag_2 = 0;
      flag_1 = 1;
  }
  else{
      bottom_2[0].style.backgroundColor = "rgb(35, 49, 71)";
      bottom_c_2[0].style.height = "0"+"px";

      bottom_2[0].style.top="0"+"px";
      bottom_2[0].style.boxShadow="none";

      flag_2 = 1;
  }
}