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



});