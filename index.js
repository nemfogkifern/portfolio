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