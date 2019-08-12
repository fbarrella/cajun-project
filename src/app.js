import * as _ from 'lodash';

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        center: true,
        items:1,
        loop:true,
        dots: true
    });
});

let openMenuBtn = document.querySelector('.open-menu');
let secondMenu = document.querySelector('.menu-second');

openMenuBtn.addEventListener("click", () => {
    let secondMenuStatus = secondMenu.style.display;
    triggerOpenAndCloseMenu(secondMenuStatus, secondMenu);
});

secondMenu.querySelectorAll('a').forEach(item => {
    item.addEventListener("click", () => {
        closeMenu(secondMenu);
    });
});

function triggerOpenAndCloseMenu (status, menu) {
    if(_.isEqual(status, "flex")){
        closeMenu(menu);
    }else{
        openMenu(menu);
    }
}

function openMenu (menu) {
    menu.style.display = "flex";
}

function closeMenu (menu) {
    menu.style.display = "none";
}

window.onscroll = function() {
    setSticky();
};
let navbar = document.querySelector('header');
let sticky = navbar.offsetTop;

function setSticky() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
}