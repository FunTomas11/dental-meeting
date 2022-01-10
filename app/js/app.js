// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
const menu = document.getElementById('menu');

document.addEventListener('DOMContentLoaded', () => {

    if (window.outerWidth < 600) {
        mobile(menu, 'menu', 'mobile-menu')
    }
    // Custom JS

})

const mobile = (element, desktopClass, mobileClass) => {
    element.classList.remove(desktopClass);
    element.classList.add(mobileClass);
}
