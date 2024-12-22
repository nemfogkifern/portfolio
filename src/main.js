

// Toggles the menu on and off
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');

    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.classList.toggle('active');
}

// Closes menu when clicking outside of it
document.addEventListener('click', function (event) {
    const menu = document.querySelector('.menu');
    const menuToggle = document.querySelector('.menu-toggle');

    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});


// Closes menu when scrolling

// document.addEventListener("scroll", function (event) {
//     const menu = document.querySelector('.menu');
//     const menuToggle = document.querySelector('.menu-toggle');

//      menu.classList.remove('active');
//     menuToggle.classList.remove('active');
    
// })


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}



// Typewriter effect
var i = 0;
var txt = 'Welcome to my portfolio website!';
var speed = 80;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("welcome").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter()
