$(document).ready(function() {

  var currentIndex = 0,
      navItems = $('.nav li');

  function setSlide(index) {
    navItems.removeClass('selected');
    navItems.eq(index).addClass('selected');
    $('.slide').css('display', 'none');
    $('.slide').eq(index).css('display', 'block');
  }

  $('.nav li').click(function() {
    var index = $('.nav li').index($(this));
    currentIndex = index;
    setSlide(currentIndex);
  });

  function next() {
    if (currentIndex < (navItems.length - 1)) {
      currentIndex++;
      setSlide(currentIndex);
    }
  }

  $('.next').click(function() {
    next();
  });

  function prev() {
    if (currentIndex > 0) {
      currentIndex--;
      setSlide(currentIndex);
    }
  }

  $('.prev').click(function() {
    prev();
  });

  document.addEventListener('keydown', function(event) {
    if (event.keyCode == 39) {
      next();
    } else if (event.keyCode == 37){
      prev();
    }
  }, true);

  function slide() {
    if (currentIndex < (navItems.length - 1)) {
      currentIndex++;
      setSlide(currentIndex);
    } else {
      currentIndex = 0;
      setSlide(currentIndex);
    }
  }

var interval = setInterval(slide, 3000);


///make a search buttons

var $searchTrigger = $('[data-ic-class="search-trigger"]'),
      $searchInput = $('[data-ic-class="search-input"]'),
      $searchClear = $('[data-ic-class="search-clear"]');

$searchTrigger.click(function(e){
    e.stopPropagation();
    var $this = $('[data-ic-class="search-trigger"]');
    $this.toggleClass('active');
    $searchInput.focus();

  });

  $searchClear.click(function(){
    $searchInput.val('');
  });

});
