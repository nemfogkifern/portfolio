
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

// Textwriter animation

document.addEventListener('DOMContentLoaded', function(event) {
    // Array with texts to type in typewriter
    var dataText = [ "Text1.", "Text2", "Text3", "Text4"];

    // Type one text in the typewriter
    // Keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
        // Check if text isn't finished yet
        if (i < text.length) {
            // Add next character to the element 
            document.querySelector(".type-writer").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

            // Wait for a while and call this function again for next character
            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback);
            }, 100);
        }
        // Text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            // Call callback after timeout
            setTimeout(fnCallback, 700);
        }
    }

    // Start a typewriter animation for a text in the dataText array
    function startTextAnimation(i) {
        if (i >= dataText.length) {
            // If i is out of bounds, restart animation after 20 seconds
            setTimeout(function() {
                startTextAnimation(0);
            }, 20000);
            return;
        }

        // Start typewriter animation for the current text in dataText
        typeWriter(dataText[i], 0, function() {
            // After callback (and whole text has been animated), start next text
            startTextAnimation(i + 1);
        });
    }

    // Start the text animation initially
    startTextAnimation(0);
});

// Card carousel

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const cards = document.querySelectorAll('.card');
    const cardWidth = cards[0].getBoundingClientRect().width;

    let currentIndex = 0;
    let autoScroll;
    let isAutoScrolling = true;

    // Arrange the cards next to one another
    cards.forEach((card, index) => {
        card.style.left = cardWidth * index + 'px';
    });

    // Move the track to the correct position
    const moveToCard = (index) => {
        track.style.transform = 'translateX(-' + cardWidth * index + 'px)';
        currentIndex = index;
    }

    // Start auto-scroll animation
    const startAutoScroll = () => {
        autoScroll = setInterval(() => {
            if (currentIndex < cards.length - 1) {
                moveToCard(currentIndex + 1);
            } else {
                moveToCard(0);
            }
        }, 3000);
    };

    // Stop auto-scroll animation
    const stopAutoScroll = () => {
        clearInterval(autoScroll);
        isAutoScrolling = false;
    };

    // Move to the previous card
    prevButton.addEventListener('click', () => {
        if (isAutoScrolling) stopAutoScroll();
        if (currentIndex > 0) {
            moveToCard(currentIndex - 1);
        } else {
            moveToCard(cards.length - 1); // Loop to the last card
        }
    });

    // Move to the next card
    nextButton.addEventListener('click', () => {
        if (isAutoScrolling) stopAutoScroll();
        if (currentIndex < cards.length - 1) {
            moveToCard(currentIndex + 1);
        } else {
            moveToCard(0); // Loop to the first card
        }
    });

    // Add touch event listeners for swipe functionality
    let startX;
    let isDragging = false;

    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    });

    track.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const moveX = e.touches[0].clientX;
        const diffX = startX - moveX;

        // Scroll right
        if (diffX > 50) {
            if (currentIndex < cards.length - 1) {
                moveToCard(currentIndex + 1);
            } else {
                moveToCard(0);
            }
            isDragging = false;
        }

        // Scroll left
        if (diffX < -50) {
            if (currentIndex > 0) {
                moveToCard(currentIndex - 1);
            } else {
                moveToCard(cards.length - 1);
            }
            isDragging = false;
        }
    });

    track.addEventListener('touchend', () => {
        isDragging = false;
    });

    // Start the auto-scroll animation on load
    startAutoScroll();
});

