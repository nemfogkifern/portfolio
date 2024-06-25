
// Burger menu
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
    document.querySelector('.overlay').classList.toggle('active');
});

document.querySelector('.overlay').addEventListener('click', function() {
    document.querySelector('nav').classList.remove('active');
    document.querySelector('.overlay').classList.remove('active');
});

document.querySelectorAll('nav ul li a').forEach(function(item) {
    item.addEventListener('click', function() {
        document.querySelector('nav').classList.remove('active');
        document.querySelector('.overlay').classList.remove('active');
    });
});

// Social buttons
document.querySelector('.Btn.github').addEventListener('click', function() {
    window.open('https://github.com', '_blank');
});

document.querySelector('.Btn.whatsapp').addEventListener('click', function() {
    window.open('https://whatsapp.com', '_blank');
});

document.querySelector('.Btn.linkdin').addEventListener('click', function() {
    window.open('https://linkdin.com', '_blank');
});

document.querySelector('.Btn.discord').addEventListener('click', function() {
    window.open('https://discord.com', '_blank');
});
