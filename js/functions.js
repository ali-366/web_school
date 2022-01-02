$(document).ready(function(){

    // banne js
    $('.main-banner').slick({

        autoplay: true,
        slidesToShow:1,
        prevArrow: '<i class="fas fa-angle-left prev-arrow"></i> ',
        nextArrow: '<i class="fas fa-angle-right next-arrow"></i> ',

    });

    // events slick js
    $('.slick-item').slick({

        autoplay: true,
        arrows:true,
        slidesToShow:2,
        prevArrow: '<i class="fas fa-angle-left prev-arrow"></i> ',
        nextArrow: '<i class="fas fa-angle-right next-arrow"></i> ',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 535,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1,
              }
            }
          ]

    });


    // counterUp js
    $('.graduate').counterUp({
        delay: 4,
        time: 500
    });

     // events slick js
     $('.testimonial-content').slick({

        // autoplay: true,
        arrows:false,
        slidesToShow:5,
        centerMode:true,
        centerPadding:'0px',
        asNavFor: '.text-content',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 562,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow:1,
              }
            }
          ]
        
    });

    $('.text-content').slick({

        // autoplay: true,
        arrows:false,
        slidesToShow:1,
        centerMode:true,
        centerPadding:'0px',
        asNavFor: '.testimonial-content',
        dots:true,
    });
    // google map js 
    new VenoBox({
        selector: ".my-link"
    });

});

// scroll fucntion
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 300){
            
            $('.back-to-top').fadeIn({
                delay:'2000',
            });
        }else{
            $('.back-to-top').fadeOut();
        }

        if(scrolling > 500){
            $('nav').addClass('nav-fix');
        }else{
            $('nav').removeClass('nav-fix');
        }
    });
     // bac to top js
     $('.back-to-top').on('click',function(){
        $('html,body').animate({
            scrollTop:'0px', 
        },1500);
    });