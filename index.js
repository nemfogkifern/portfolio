
// Burger menu
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const overlay = document.querySelector('.overlay');
    const menuLinks = document.querySelectorAll('nav ul li a');

    // Toggle menu and overlay on menu toggle click
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    // Close menu and overlay on overlay click
    overlay.addEventListener('click', function() {
        nav.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Close menu and overlay on menu link click
    menuLinks.forEach(function(item) {
        item.addEventListener('click', function() {
            nav.classList.remove('active');
            overlay.classList.remove('active');
        });
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

// scroll textanimation

document.addEventListener('DOMContentLoaded', function() {
    const hiddenText = document.querySelector('.hidden-text');

    function checkPosition() {
        const rect = hiddenText.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

        if (rect.top <= windowHeight) {
            hiddenText.classList.add('show');
        }
    }

    window.addEventListener('scroll', checkPosition);
    checkPosition(); // initial check in case the element is already in view
});
