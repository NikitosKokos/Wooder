
document.addEventListener('DOMContentLoaded', () => {
    // @ @include("swiper-bundle.min.js");
    // @ @include("some.js");
    // @ @include('burger.js');
    // @ @include("spoller.js",{});
    // @ @include("select.js",{});
    // @ @include("tabs.js",{});

    const heroSlider = new Swiper('.hero__body', {     
        slidesPerView: 1,
        // direction: 'vertical',
        // allowTouchMove: false,
        // simulateTouch:false,
        // loop: true,
        // autoHeight: true,
        pagination: {
            el: '.hero__dotts',
            clickable: true,
          },
          effect: 'fade',
        //   fadeEffect: {
        //     crossFade: true
        //   },

    });
    const count = document.querySelector('.hero__count');
    const dotts = document.querySelectorAll('.swiper-pagination-bullet');


    function getCountSlide(){
        dotts.forEach((el,i) => {
            if(el.classList.contains('swiper-pagination-bullet-active')){
                count.textContent = i + 1;
            }
        });
    }

    getCountSlide();
    heroSlider.on('slideChange', getCountSlide);

    const header = document.querySelector('.header');
    const hero = document.querySelector('.hero');
    new fullpage('#fullpage', {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        autoScrolling:true,
        scrollHorizontally: true,
        scrollOverflow: true,
        // verticalCentered: false,

        onLeave: (before,after) => {
            if(!after.index == 0){
                header.classList.add('_active');
            }else{
                header.classList.remove('_active');
            }
        }
    });
    
    
// end
});