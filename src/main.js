
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');

    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.classList.toggle('active');
}


document.addEventListener('click', function (event) {
    const menu = document.querySelector('.menu');
    const menuToggle = document.querySelector('.menu-toggle');

    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// document.addEventListener("scroll", function (event) {
//     const menu = document.querySelector('.menu');
//     const menuToggle = document.querySelector('.menu-toggle');

//      menu.classList.remove('active');
//     menuToggle.classList.remove('active');
    
// })