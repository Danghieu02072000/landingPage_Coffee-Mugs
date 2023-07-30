const btnMenu = document.querySelector('.btn-menu');
const menuMobie = document.querySelector('.menu-mobie')
btnMenu.onclick = function() {
    menuMobie.classList.toggle('-translate-y-[140%]')
}
