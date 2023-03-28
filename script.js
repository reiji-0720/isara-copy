jQuery(function($){
  $(".icon-chevron-return").hide(); //とりあえず隠す
  $(window).on("scroll", function() {
      if ($(this).scrollTop() > 100) { //100以上にスクロールされた／されている時は
          $(".icon-chevron-return").fadeIn("fast"); //ふわっと表示
      } else { //それ意外は
          $(".icon-chevron-return").fadeOut("fast"); //ふわっと非表示
      }
  });
  $('.icon-chevron-return').click(function () {
      $('body,html').animate({
      scrollTop: 0
      }, 400);
      return false;
  });
  $('#icon-chevron-return').click(function(){
    $('html,body').scrollTop(0);
  });
  



    $('.box').hover(
        function(){
            var $under = $(this).find('title-box-plan p');
            $under.css('border-bottom','solid 2px black');
        },
        function(){
            $under.css('border-bottom','none');
        }
    );
    $('.box').click(function() {
      var $answer = $(this).find('.close-plan');
      var $composit = $(this).find('.fa-chevron-down');
      if($answer.hasClass('open')) { 
        $answer.removeClass('open');
        // slideUpメソッドを用いて、$answerを隠してください
      $answer.slideUp('slow');
      $composit.css('transform','rotate(0deg)');
  
        // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      
        
      } else {
        // slideDownメソッドを用いて、$answerを表示してください
        $('.close-plan').slideUp('slow');
        $answer.addClass('open'); 
        $answer.slideDown('slow');
        $composit.css('transform','rotate(180deg)');

        
        
        // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
        
        
      }
    });
    $('.hidden_box').click(function(){
        var $btn = $(this).find('hidden_show');
        var $comp = $(this).find('.fa-chevron-down');
        if($btn.hasClass('close')){
          $btn.removeClass('close');
          $btn.slideUp('slow');
          $comp.css('transform','rotate(0deg)');

        } else {

          
            $btn.addClass('close');
            $btn.slideDown('slow');
            $('.close').css('background-color','red');
            $comp.css('transform','rotate(180deg)');

        }
    });
  });
  