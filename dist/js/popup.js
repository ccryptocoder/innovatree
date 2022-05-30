window.addEventListener('DOMContentLoaded', () => {
    const popup = document.querySelector('[data-popup]');
    const popupClose = document.querySelector('[data-popup-close]');
    const submitBtn = document.querySelector('[data-submit-application]');

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        popup.classList.add('popup_active');
        document.body.style.overflow = 'hidden';
    });

    popupClose.addEventListener('click', () => {
        popup.classList.remove('popup_active');
        document.body.style.overflow = 'auto';
    });

});