const button = document.getElementById('toggle-btn');
const body = document.body;

// Add an event listener for the button click
button.addEventListener('click', function () {
    // Toggle the class between 'dark-mode' and 'light-mode'
    if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
        button.textContent = '🌞';
    } else {
        body.classList.replace('dark-mode', 'light-mode');
        button.textContent = '🌙';
    }
});

// Set initial mode to light
body.classList.add('light-mode');

