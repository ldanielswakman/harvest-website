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
    $nav.find('a[href="#' + active_id + '"]').addClass('isActive');
  }
}