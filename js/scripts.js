// Component: smoothScroll
$(document).ready(function() {
  $('a[href^="#"]').smoothScroll({
    speed: 1000,
    easing: 'easeInOutQuart',
    afterScroll: function() {
      updateHash($(this).attr('href'));
    }
  });
});





// Update URL hash
function updateHash(href) {
  // Restore original URL + search query if href is ''
  if(href.length < 1) {
    href = window.location.origin + window.location.pathname + window.location.search;
  }
  if(history.pushState) {
    history.pushState(null, null, href);
  }
  else {
    location.hash = href;
  }
}






// Component: Owl Carousel
$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
      margin: 10,
      nav: true,
      items: 1,
  });
});






// Component: activeSections
scrollevents = 'ready scroll resize scrollstart scrollstop';
$(document).on(scrollevents, function() {
  navOnScroll($('section'), $('.menu'));
});


function navOnScroll($target, $nav) {
  scroll = $(window).scrollTop();
  delta = 100000; // big number
  active_id = null;

  $target.each(function() {
    scrollpoint = scroll + $(window).outerHeight()/2;
    midpoint = $(this).offset().top + $(this).outerHeight()/2;
    if (Math.abs(scrollpoint - midpoint) < delta) {
      delta = Math.abs(scrollpoint - midpoint);
      active_id = ($(this).attr('id').length > 0) ? $(this).attr('id') : null;
    }
  });

  if(active_id && active_id.length > 0 && $target.filter('.isActive').attr('id') !== active_id) {
    // add active class to slide
    $target.removeClass('isActive');
    $target.filter('[id="' + active_id + '"]').addClass('isActive');
    // add active class to nav
    $nav.find('a').removeClass('isActive');
    $nav.find('li').removeClass('isActive');
    $nav.find('a[href="#' + active_id + '"]').addClass('isActive');
    $nav.find('a[href="#' + active_id + '"]').closest('li').addClass('isActive');
  }
}



// Component: nav sticky after intro
scrollevents = 'ready scroll resize scrollstart scrollstop';
$(document).on(scrollevents, function() {
  scroll = $(window).scrollTop();
  if(scroll > $("#intro").outerHeight()) {
    $('.nav').addClass('isSticky');
  } else {
    $('.nav').removeClass('isSticky');
  }
});





// Component: Services Section Menu
$(document).ready(function() {
  $('#services .services-menu .menu-item').click(function(e) {
    e.preventDefault();
    $target_id = "#" + $(this).attr('data-target');
    console.log($target_id);
    if($($target_id).length !== 0) {
      $('#services .chapter').removeClass('isActive');
      $('#services ' + $target_id).addClass('isActive');
      
      $('#services .services-menu .menu-item').removeClass('isActive');
      $(this).addClass('isActive');
      
      $.smoothScroll({
        scrollTarget: $('#services'),
        easing: 'easeInOutQuart'
      });
    }
  });
});






// Component: Career position interactions
$(document).ready(function() {

  // Onload: check if hash has position
  if (window.location.hash.length > 0 && $('.dialog' + window.location.hash).length > 0) {
    $('#careers .dialog').removeClass('isActive');
    $('.dialog' + window.location.hash).addClass('isActive');
    $('body').addClass('dialogIsActive');

    $.smoothScroll({
      scrollTarget: $('#careers'),
      easing: 'easeInOutQuart'
    });
  }

  // Click interaction
  $('#careers .position').click(function() {
    $target_id = $(this).attr('data-target');
    $isActive = $('.dialog#' + $target_id).hasClass('isActive') ? true : false;
    $('#careers .dialog').removeClass('isActive');
    $('.dialog-wrapper').removeClass('isActive');
    updateHash('');
    if(!$isActive) {
      $('body').addClass('dialogIsActive');
      $('.dialog#' + $target_id).addClass('isActive');
      $('.dialog#' + $target_id).scrollTop(0);
      updateHash('#' + $target_id);
    }
  });

  // Close interaction
  $('#careers .dialog-close, #careers .dialog-mask').click(function() {
    $('#careers .dialog').removeClass('isActive');
    $('body').removeClass('dialogIsActive');
    updateHash('');
  });

});
