$(document).ready(function(){
    $("#bars").on("click",function(){
         $('#list').css('left','40px');
         $('#list').css('transition','.8s all');
         
    });
    $("#close").on("click",function(){
         $('#list').css('left','-400px');
    });


      // Start Scroll & Scroll Top
  $(window).on('scroll',function(){
    if($(window).scrollTop() >= 300){
      $('.sec-navbar').show();
      $('.sec-navbar').addClass('fixed-top');
      $('.main-navbar').hide();
      $('#scrollTop').show();
      $('#scrollTop').on('click',function(){
        $(window).scrollTop({
         "top":"0",
        });
     });
   
    }
    else
    {
      $('#scrollTop').hide();
      $('.main-navbar').show();
      $('.sec-navbar').hide();
      $('.sec-navbar').removeClass('fixed-top');
    }
  });
  // End Scroll & Scroll Top
 });

  