$(function () {
  $('#fullpage').fullpage({
    navigation: true,
    autoScrolling: true,
    responsiveWidth: 900,
    scrollingSpeed: 1000,
    afterLoad: function (anchorLink, index) {
      var loadedSection = $(this);
      if (index == 1) {
        setTimeout(wrap1, 500);
      }
      if (index == 2) {
        setTimeout(wrap2, 500);
      }
      if (index == 3) {
        setTimeout(wrap3, 500);
      }
      if (index == 4) {
        setTimeout(wrap4, 500);
      }
      if (index == 5) {
        setTimeout(wrap5, 500);
      }
      if (index == 6) {
        setTimeout(wrap6, 500);
      }

    }
  });

  function wrap1() {
    $("#num1").animate({ 'opacity': '1', 'top': '300px' }, 1000);
  }

  function wrap2() {
    $("#num2").animate({ 'opacity': '1', 'top': '300px' }, 1000);
  }
  function wrap3() {
    $("#num3").animate({ 'opacity': '1', 'top': '300px' }, 1000);
  }

  function wrap4() {
    $("#num4").animate({ 'opacity': '1', 'top': '300px' }, 1000);
  }

  function wrap5() {
    $("#num5").animate({ 'opacity': '1', 'top': '300px' }, 1000);
  }
  function wrap6() {
    $("#num6").animate({ 'opacity': '1', 'top': '300px' }, 1000);
    $('.wrap06_bg').animate({ 'top': '0', 'left': '0' }, 1000);
  }

  // hamburger
  $('.nav-icon').on('click',function () {
    $(this).toggleClass('open');
    $(".sidenav").toggleClass('full');
    $(".itemMenu").toggleClass('appear');
  });
  $('.itemMenu').on('click',function () {
    $('.nav-icon').toggleClass('open');
    $(".sidenav").toggleClass('full');
    $(".itemMenu").toggleClass('full');
    $(".itemMenu").toggleClass('appear');
  });
});
