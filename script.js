document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.querySelector('.section-header .menu');
    var closeIcon = document.querySelector('.section-header .close');
    var nav = document.querySelector('.section-header .navigation');

    function openNav() {
        nav.classList.remove('hidden');
        closeIcon.style.display = 'block';
        menuIcon.style.display = 'none';
    }

    function closeNav() {
        nav.classList.add('hidden');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }

    function adjustNavForViewport() {
        if (window.innerWidth <= 625) {
            closeNav(); 
        } else {
            nav.classList.remove('hidden');
            menuIcon.style.removeProperty('display');
            closeIcon.style.removeProperty('display');
        }
    }

    adjustNavForViewport();

    menuIcon.addEventListener('click', openNav);
    closeIcon.addEventListener('click', closeNav);

    window.addEventListener('resize', adjustNavForViewport);
});
