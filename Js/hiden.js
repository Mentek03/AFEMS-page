document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icono');
    const menuNav = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function() {
        menuNav.classList.toggle('hidden');
    });
});