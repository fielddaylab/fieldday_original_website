$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $('.call-out-btn').hover(function () {
    $('.call-out').toggleClass('focused');
  });

  $('.article-link').hover(function () {
    $( this ).parents(".article-chunk").toggleClass('focused');
  });

});
var parentTag = $( this ).parent().get( 0 ).tagName;
