
function toggleNav() {
    var screenWidth = window.innerWidth;
    var navUl = document.querySelector('nav ul');

    // Check if the screen width is below or equal to 800 pixels
    if (screenWidth <= 1200) {
        // Toggle the display of the navigation menu inside the media query
        if (navUl.style.display === 'flex') {
            navUl.style.display = 'none';
        } else {
            navUl.style.display = 'flex';
        }
    } else {
        // Reset the display property of the navigation menu for screens above 800 pixels
        navUl.style.display = 'flex';
    }
}

// Event listener for screen size changes
window.addEventListener('resize', function() {
    var screenWidth = window.innerWidth;
    var navUl = document.querySelector('nav ul');

    // Check if the screen width transitions from being below or equal to 800 pixels to being above 800 pixels
    if (screenWidth > 1200) {
        // Reset the display property of the navigation menu for screens above 800 pixels
        navUl.style.display = 'flex';
    }else{
      navUl.style.display = 'none';
    }
}
);



function sendFeedback(type) {
    const feedbackMessage = document.getElementById('feedbackMessage');
    if (type === 'like') {
        feedbackMessage.textContent = 'You liked this!';
    } else if (type === 'unlike') {
        feedbackMessage.textContent = 'You unliked this!';
    }
    feedbackMessage.classList.add('visible');
}

