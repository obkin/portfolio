window.addEventListener('DOMContentLoaded', () => {

// ===========================Logo-Animation===========================

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

// ===========================Logo-Animation===========================

// ================================Slider================================

    function slider(rightArrowSelector, leftArrowSelector, slidesSelector, wrapperSelector, slidesInnerSelector) {
        
// ------------------Getting-elements----------------------

        const rightArrow = document.querySelector(rightArrowSelector),
              leftArrow = document.querySelector(leftArrowSelector),

              slidesWrapper = document.querySelector(wrapperSelector),
              slides = slidesWrapper.querySelectorAll(slidesSelector),
              slidesInner = slidesWrapper.querySelector(slidesInnerSelector),
              width = window.getComputedStyle(slidesInner).width; 

// ------------------------End-1---------------------------
        
// ------------------Change-slides----------------------

        let offset = 0;
        
        slidesInner.style.width = 100 * slides.length + '%';
        slidesInner.style.display = 'flex';
        slidesInner.style.transition = '0.5s all';

        slidesWrapper.style.overflow = 'hidden';

        slides.forEach(slide => {
            slide.style.width = width;
        });

        rightArrow.addEventListener('click', () => {
            if (offset == deleteNotDigits(width) * (slides.length - 1)) {
                offset = 0;
            } else {
                offset += deleteNotDigits(width);
            }
 
            slidesInner.style.transform = `translateX(-${offset}px)`;
        });

        leftArrow.addEventListener('click', () => {
            if (offset == 0) {
                offset = deleteNotDigits(width) * (slides.length - 1);
            } else {
                offset -= deleteNotDigits(width);
            }
 
            slidesInner.style.transform = `translateX(-${offset}px)`;
        });

        function deleteNotDigits(str) {
            return +str.replace(/\D/igm, '');
        }
// -----------------------End-2-------------------------

// ----------------Auto-slides-change--------------------

        function autoClick(button) {
            button.click();
        }

        function startInterval(time) {
            let newInterval = setInterval(() => {
                autoClick(rightArrow);
            }, time);

            rightArrow.addEventListener('mouseover', () => {
                clearInterval(newInterval);
                startInterval(10000);
            });

            leftArrow.addEventListener('mouseover', () => {
                clearInterval(newInterval);
                startInterval(10000);
            });
        }

        startInterval(5000);
        
// ----------------------End-3---------------------------

    }

    slider('.welcome_slider-bg-circle-right', '.welcome_slider-bg-circle-left', '.welcome_slider-slide', '.welcome_slider-wrapper', '.welcome_slider-inner');

// ================================Slider================================

});