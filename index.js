const button = document.getElementById('toggle-btn');
const body = document.body;

button.addEventListener('click', function () {
    if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
        button.textContent = '🌞';
    } else {
        body.classList.replace('dark-mode', 'light-mode');
        button.textContent = '🌙';
    }
});

body.classList.add('light-mode');

