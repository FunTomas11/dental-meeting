// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

    const menu = document.getElementById('menu');
    if (window.outerWidth < 600) {
        mobile(menu, 'menu' ,'mobile-menu')
    }
	// Custom JS

})

const mobile = (element, desktopClass, mobileClass) => {
    element.classList.remove(desktopClass);
    element.classList.add(mobileClass);
}
