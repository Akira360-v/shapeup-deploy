import './about.sass';

import Swiper from 'swiper/js/swiper.min.js';
// import Swiper from 'swiper/css/swiper.min.css';


var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 30,
  slidesPerView: 3,
  loop: true,
  freeMode: true,
  loopedSlides: 5, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween:   25,
  loop:true,
  loopedSlides: 5, //looped slides should be the same
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});