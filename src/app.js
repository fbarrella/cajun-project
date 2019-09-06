import * as _ from 'lodash';

let openMenuBtn = document.querySelector('.open-menu');
let secondMenu = document.querySelector('.menu-second');
let navbar = document.querySelector('header');
let sticky = navbar.offsetTop;
let faqItem = document.querySelectorAll('.faq');
let falseClick = true;
let sendMessageBtn = document.querySelector('.send-message');

sendMessageBtn.addEventListener('click', ()=>{
    let url = "https://api.whatsapp.com/send?phone=5511963499907";
    let messageText = "&text=Oi,%20gostaria%20de%20participar%20do%20pr%C3%B3ximo%20evento%20do%20Cajun%20em%20peru%C3%ADbe";
    window.open(url + messageText, '_blank');
});

faqItem.forEach(item => {
    let itemDesc = item.querySelector('p');

    item.addEventListener('click', () => {
        if(item.classList.contains("open")){
            item.classList.remove("open");
            itemDesc.style.display = "none";
        }else{
            _.map(faqItem, resetFaqItems);
            window.scrollTo(0, item.offsetTop - (window.innerHeight/3));
            item.classList.add("open");
            itemDesc.style.display = "block";
        }
    });
});

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        center: true,
        items:1,
        loop:true,
        dots: true
    });
});

openMenuBtn.addEventListener("click", () => {
    let secondMenuStatus = secondMenu.style.display;
    triggerOpenAndCloseMenu(secondMenuStatus, secondMenu);
});

function resetFaqItems (item) {
    let itemDesc = item.querySelector('p');

    if(item.classList.contains("open")){
        item.classList.remove("open");
        itemDesc.style.display = "none";
    }
}

function triggerOpenAndCloseMenu (status, menu) {
    if(!_.isEqual(status, "flex")){
        openMenu(menu);
    }
}

function closeMenuByWindowClick (e) {
    if(falseClick){
        falseClick = false;
    }else{
        closeMenu(secondMenu);
        falseClick = true;
    }
}

function openMenu (menu) {
    menu.style.display = "flex";
    window.addEventListener('click', closeMenuByWindowClick);
}

function closeMenu (menu) {
    menu.style.display = "none";
    window.removeEventListener('click', closeMenuByWindowClick);
}

window.onscroll = function() {
    setSticky();
    setScrolledMenu();
};

function setSticky() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
}

function setScrolledMenu() {
    if (window.pageYOffset >= (sticky + 15)) {
        navbar.classList.add("scrolled-menu");
    } else {
        if(navbar.classList.contains("scrolled-menu")){
            navbar.classList.remove("scrolled-menu");
        }
    }
}