window.addEventListener('DOMContentLoaded', () => {

// Logo-Animation

    const logoBg = document.querySelector('#logo-bg'),
          logoText = document.querySelector('#logo-text');

    let logoAnim;

    function anim() {
        logoAnim = logoBg.animate([
            {
                transform: 'translateX(-50%) rotate(0deg)',
                left: '50%'
            },
            {
                transform: 'translateX(-50%) rotate(180deg)',
                left: '50%'
            },
            {
                transform: 'translateX(-50%) rotate(270deg)',
                left: '50%'
            },
            {
                transform: 'translateX(-50%) rotate(360deg)',
                left: '50%'
            }
        ], {
            duration: 3000,
            iterations: 1
        });
        setTimeout(() => {
            window.location.reload();
        }, 1000);
        logoAnim = 0;
    }

    logoBg.addEventListener('click', () => {
        anim();
    });

    logoText.addEventListener('click', () => {
        anim();
    });

// Slider

    function slider(rightArrowSelector, leftArrowSelector, slidesSelector, wrapperSelector, slidesInnerSelector) {
        
        const rightArrow = document.querySelector(rightArrowSelector),
              leftArrow = document.querySelector(leftArrowSelector),

              slidesWrapper = document.querySelector(wrapperSelector),
              slides = slidesWrapper.querySelectorAll(slidesSelector),
              slidesInner = slidesWrapper.querySelector(slidesInnerSelector),
              width = window.getComputedStyle(slidesInner).width; 

        let slideIndex = 1;

        slidesInner.style.width = 100 * slides.length + '%';
        slidesInner.style.display = 'flex';
        slidesInner.style.transition = '0.5s all';

        slides.forEach(slide => {
            slide.style.width = width;
        });
    }

    slider('.welcome_slider-bg-circle-right', '.welcome_slider-bg-circle-left', '.welcome_slider-slide', '.welcome_slider-wrapper', '.welcome_slider-inner');

});