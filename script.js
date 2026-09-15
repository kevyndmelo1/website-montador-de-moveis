const toggleButton = document.getElementById('theme-toggle');
const themeStyle = document.getElementById('theme-style');
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    themeStyle.href = savedTheme;
}

toggleButton.addEventListener('click', () => {
    if (themeStyle.getAttribute('href') === 'style.css') {
        themeStyle.href = 'style-claro.css';
        localStorage.setItem('theme', 'style-claro.css');
    } else {
        themeStyle.href = 'style.css';
        localStorage.setItem('theme', 'style.css');
    }
});