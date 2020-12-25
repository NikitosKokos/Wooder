
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


    new fullpage('#fullpage', {
        autoScrolling:true,
        scrollHorizontally: true,
        scrollOverflow: true,
    });
    
    
// end
});