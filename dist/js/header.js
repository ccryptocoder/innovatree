window.addEventListener('DOMContentLoaded', () => {
    const menuProjs = document.querySelector('[data-menu-projects]');
    const menuDropdown =document.querySelector('[data-menu-dropdown]');

    ['mouseover', 'click'].forEach(event => {
        menuProjs.addEventListener(event, (e) => {
            menuDropdown.classList.add('menu__projects_active')
        })
    })

    menuProjs.addEventListener('mouseout', () => {
        menuDropdown.classList.remove('menu__projects_active')
    })

    const hamburger = document.querySelector('[data-hamburger]');
    const menuMobile = document.querySelector('[data-menu-mobile]');
    const menuItems = Array.from(document.querySelectorAll('[data-menu-items]'));

    hamburger.addEventListener('click', () => {
        menuMobile.classList.add('header__mobile_active');
    });

    menuMobile.addEventListener('click', (e) => {
        e.target.classList.remove('header__mobile_active');
    })

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuMobile.classList.remove('header__mobile_active');
        })
    })

});