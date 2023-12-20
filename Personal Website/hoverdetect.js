var nav = document.querySelectorAll('.nav a');

nav.forEach(function(hoverElement) {
    hoverElement.addEventListener('mouseenter', function() {
        nav.forEach(function(otherElement) {
            if (otherElement !== hoverElement) {
                otherElement.style.opacity = '0.5';
                otherElement.style.color = '#808080';
            }
        });
    });

    hoverElement.addEventListener('mouseleave', function() {
        nav.forEach(function(otherElement) {
            if (otherElement !== hoverElement) {
                otherElement.style.opacity = '1';
                otherElement.style.color = '#000000';
            }
        });
    });
});