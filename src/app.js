import * as _ from 'lodash';

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        center: true,
        items:1,
        loop:true,
        dots: true
    });
});

document.querySelector('.open-menu').addEventListener("click", () => {
    let secondMenu = document.querySelector('.menu-second');
    let secondMenuStatus = secondMenu.style.display;
    if(_.isEqual(secondMenuStatus, "flex")){
        secondMenu.style.display = "none";
    }else{
        secondMenu.style.display = "flex";
    }
});

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

function preventDefault(e) {
    e.preventDefault();
}