const menu = document.querySelector('#menu');
const button = document.querySelector('#button');

const toggleMenu = () => {
    if (menu.classList.contains('scale-0')) {
        menu.classList.remove('scale-0');
    } else {
        menu.classList.add('scale-0');
    }
}

button.addEventListener('click', () => {
    toggleMenu();
});