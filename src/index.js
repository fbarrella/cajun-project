import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';
import './style/base.css';
import * as _ from 'lodash';
import './assets/melhor-que-tocar-sozinho.jpg';
import './assets/melhor-remedio.jpg';
import './assets/musica-juntos.jpg';

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