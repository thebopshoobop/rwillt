
let slideHandler =  {
  init: function() {
    $(document).on('scroll', slideHandler.slide);
  },

  running: false,

  slide: function() {
    // rate limit to 10x/sec
    if (!slideHandler.running) {
      slideHandler.running = true;
      slideHandler.doSlide()
      setTimeout(function() {
        slideHandler.running = false;
      }, 100);
    }
  },

  doSlide: function() {
    $target = $('header.slider');

    if ($(document).scrollTop() > 212) {
      if (!$target.hasClass('visible')) {
        $target.addClass('visible');
      }

    } else {
      $target.removeClass('visible');
    }
  }
}

$(
  slideHandler.init
)
