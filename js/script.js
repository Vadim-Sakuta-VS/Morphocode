let hamburgerToggle = document.querySelector('.hamburger-toggle');
let headerNavigation = document.querySelector('.navigation');

hamburgerToggle.addEventListener('click', toggleMenu);
headerNavigation.addEventListener('click', (e) => {
    let isCanCloseMenu = e.target.classList.contains('navigation');
    isCanCloseMenu && toggleMenu();
})

function toggleMenu() {
    hamburgerToggle.classList.toggle('hamburger-toggle--active');
    headerNavigation.classList.toggle('navigation--active');
}