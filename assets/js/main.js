//wow
new WOW().init();
//scroll effects
var lastScrollTop=0;
$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    
    //home content fadaIn
    $('.home-content').css({
        opacity: function() {
        var elementHeight = $(this).height();
        // console.log(elementHeight);
        return 1 - (scrollTop-elementHeight) / elementHeight;
        }
    });
    //change navbar background
    scrollTop > 500 && scrollTop > lastScrollTop ? $('.navbar').css({'backgroundColor':"rgba(0,0,0,.9)",'transform':'translateY(-100%)'}) : $('.navbar').css({'transform':'translateY(0)'}) ;
    scrollTop <500 ? $('.navbar').css('backgroundColor',"transparent") : '';
    lastScrollTop = scrollTop;
});

//slick slider customers section
$(document).ready(function(){
  $('.slider').slick({
    dots: false,
    arrows:false,
    pauseOnHover:false,
    infinite: true,
    autoplay:true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1, 
    centerMode: true,
    centerPadding: '0px',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 576,
      settings: {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
  });
});

//slick slider customers opinion section
$(document).ready(function(){
  $('.slider-value').slick({
    dots: false,
    arrows:false,
    pauseOnHover:false,
    infinite: true,
    autoplay:true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1, 
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
  });
});

//navbar active
$('.nav-link').click(function(){
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
    $('.btn-toggler').click();
});


//show back-to-top
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 30) {
      $('.back-to-top').css('display','block');
    }
    else {
        $('.back-to-top').css('display','none');
    }
});

//show blogDetails__icons
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 350) {
      $('.blogDetails__icons').css('display','block');
    }
    else {
        $('.blogDetails__icons').css('display','none');
    }
});
//mixitup projects section
var mixer = mixitup('.projects .container');

//counter In Numbers section
$('.counter').counterUp({
  delay: 10,
  time: 1000,
  offset: 70,
  beginAt: 1
});