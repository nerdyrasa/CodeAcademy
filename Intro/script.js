$(document).ready(function(){
  $('div').mouseenter(function(){
    $(this).animate({
      height: '+=25px'
    });
  });
  $('div').mouseleave(function(){
    $(this).animate({
      height: '-=25px'
    });
  });
  $('div').click(function(){
    $(this).toggle(1000);
  });



});
