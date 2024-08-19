$(document).ready(function(){
    $('.sss-menu-bar').click(function(){
    $(this).toggleClass('menu-open');
    $('.menu-list').toggleClass('menu');
    $('.sss-header-wrapper').toggleClass('menu-down');
    $('html').toggleClass('no-scroll');
  });
  $(".nav-menu .menu-list li a").each(function(){
    this.href==window.location.href && $(this).addClass("active-link");
  });
  $('.list-2').click(function(){
    $('.bl-dd').toggleClass('dd-open');
  });
  $('.menu-list li:not(:nth-child(2)) a').click(function(){
    $('.sss-menu-bar').removeClass('menu-open');
    $('.menu-list').removeClass('menu');
    $('.sss-header-wrapper').removeClass('menu-down');
    $('html').removeClass('no-scroll');
  });
  $(".nav-menu ul li a").click(function() {
    if(this.href == window.location.href){
      console.log('clicked....');
      $(".nav-menu ul li a").removeClass('c-link');
      $(this).addClass("c-link");
      $(this).parent().parent().siblings().addClass('c-link');
    } 
  });
  $('a[href*="#"]:not([href="#"])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        if ( $(this).parents('.nav-menu').length ) {
          $('.nav-menu ul .c-link').removeClass('c-link');
          $(this).closest('li a').addClass('c-link');
          $(this).parent().parent().siblings().addClass('c-link');
        }
      }
    }
  });
  });
  // script for center mode slider
  $(document).ready(function(){
    $('.list-6 a').click(function(){
      $('#site-header').css('position', 'relative');
      $('.sec_1').css('margin-top', 0);
      $('.free_trial_wrapper').addClass('open');
    });
    $('.impact-sec-btn a').click(function(){
      $('.free_trial_wrapper').addClass('open');
    });
    $('.ft_close').click(function(){
      $('#site-header').css('position', 'fixed');
      $('.sec_1').css('margin-top', '5vw');
      $('.free_trial_wrapper').removeClass('open');
    });
    $('.logos_slider').slick({
      vertical:true,
      arrows:false,
      dots:false,
      infinite:true,
      autoplay:true,
      autoplaySpeed:1000
    });
  var $carousel = $('#home_ser_slider');
    $('#home_ser_slider').slick({
      // slide: '.dis_slider',
      centerMode: true,
      slidesToShow: 1,
      dots: false,
      arrows: true,
      swipe: true,
      swipeToSlide: true,
      centerPadding: "25%",
      prevArrow:'<button type="button" class="slick-prev pull-left slick_button"><img src="./images/left-arw-case.png" alt="left-arw-case-study"></button>',
      nextArrow:'<button type="button" class="slick-next pull-right slick_button"><img src="./images/right-arw-case.png" alt="right-arw-case-study"></button>',
      responsive: [
        {
            breakpoint: 769,
            settings: {
              centerPadding: "18%",
          }
        }
    ]
    });
    function setSlideVisibility() {
      //Find the visible slides i.e. where aria-hidden="false"
      var visibleSlides = $carousel.find('.slick-slideshow__slide[aria-hidden="false"]');
      //Make sure all of the visible slides have an opacity of 1
      $(visibleSlides).each(function() {
        $(this).css('opacity', 1);
      });
      //Set the opacity of the first and last partial slides.
      $(visibleSlides).first().prev().css('opacity', 0);
    }
    $carousel.slick('slickGoTo', 0);
    setSlideVisibility();
    $carousel.on('afterChange', function() {
      setSlideVisibility();
    });
    var $carousel1 = $('.ser_blog_slider');
    $('.ser_blog_slider').slick({
      // slide: '.dis_slider',
      centerMode: false,
      slidesToShow: 1,
      dots: false,
      arrows: true,
      swipe: true,
      swipeToSlide: true,
      prevArrow:'<button type="button" class="slick-prev pull-left slick_button"><img src="./images/left-arw-case.png" alt="our-service-left-arw"></button>',
      nextArrow:'<button type="button" class="slick-next pull-right slick_button"><img src="./images/right-arw-case.png" alt="our-service-right-arw"></button>',
      responsive: [
        {
            breakpoint: 769,
            settings: {
          }
        }
    ]
    });
  });
  var isPrefixed = (function () {
    var styles = window.getComputedStyle(document.documentElement, ''),
      pre = (Array.prototype.slice
        .call(styles)
        .join('') 
        .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
      )[1],
      dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
    return {
      dom: dom,
      lowercase: pre,
      css: '-' + pre + '-',
      js: pre[0].toUpperCase() + pre.substr(1)
    };
  })();
  
  // Deals with prefixes
  var prefix = isPrefixed.css;
  var rotate = "rotate(";
  
  // Deal with browsers that don't support 3d transforms
  if(Modernizr.csstransforms3d) {
    rotate = "rotate3d(0,0,1,";
  }
  
  // Creates the circle things...
  $(document).ready(function(){
  // $(".services_content_wrapper").each(function(j){
  //   var category = $(".services_content_wrapper:eq("+j+")").data("category");
  //   var circle   = "<div class='circle circle-"+ j +"'><div class='inner-circle'></div><div class='mask-left'><div class='fill'></div></div><div class='mask-right'><div class='fill'></div></div><div class='mask-full'></div><div class='year'>SERVICES</div></div>";
  //   $(".circles-wrapper").append(circle);
  // });
  
  $(".circle:eq(0)").addClass("is-active");
  $(window).scroll(function (){
    var top = $(this).scrollTop();
  
    // Calculate each progress section
    $(".services_content_wrapper").each(function(i){
        var this_top    = $(this).offset().top - 435;
        var height      = $(this).height();
        var this_bottom = this_top + height;
        var percent     = 0;
  
        // Scrolled within current section
        if (top >= this_top && top <= this_bottom) {
          percent = ((top - this_top) / height) * 100;
          if (percent >= 100) {
            percent = 100;
          }
        }
        else if (top > this_bottom) {
          percent = 100;          
        }
        
        // Adds the active class
        if(percent < 100 && percent > 0) {
          if(!$(".circle:eq("+ i + ")").hasClass("is-active")) {
            $(".circle:eq("+ i + ")").toggleClass("is-active");
          };
        } else {
            $(".circle:eq("+ i + ")").removeClass("is-active");          
        }
  
        // "Fills" the circles
        if(percent <= 50) {
          $(".mask-right .fill:eq("+i+")").css(prefix + "transform", rotate + ( 360 * percent / 100) + "deg)");
          $(".mask-left .fill:eq("+i+")").css(prefix + "transform", rotate + "0)");
        } else if( percent > 50) {
          $(".mask-left .fill:eq("+i+")").css(prefix + "transform", rotate + (( 360 * percent / 100) - 180) * 1 + "deg)");
          $(".mask-right .fill:eq("+i+")").css(prefix + "transform", rotate + "180deg)"); 
        }
    });
  });
  });