let lightMode = true;
const buttonToggle = document.getElementById('toggle-mode');

buttonToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('darkmode');

    const mode = lightMode ? 'dark' : 'light';
    event.currentTarget.querySelector(
        'span',
    ).textContent = `${mode} mode ativado`;

    lightMode = !lightMode;
});
