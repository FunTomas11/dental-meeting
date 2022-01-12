// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
document.addEventListener('DOMContentLoaded', () => {
    const loopa = document.getElementById('loopa');
    document.getElementById('schedule-image').addEventListener('mouseleave', event => {
        loopa.style.display = 'none';
    });
    document.getElementById('schedule-image').addEventListener('mouseover', event => {
        loopa.style.display = 'block';
    });

})
