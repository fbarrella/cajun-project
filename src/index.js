import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';
import * as _ from 'lodash';

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        center: true,
        items:1,
        loop:true,
        dots: true
    });
});