$(document).ready(main);
var contador=1;
function main(){
  $('.menu').click(function(){
    if(contador==1){
      $('nav').animate({
        display:none
      });
      contador=0;
    }else{
      $('nav').animate({
        display:block
      });
      contador=1;
    }
  });
};
