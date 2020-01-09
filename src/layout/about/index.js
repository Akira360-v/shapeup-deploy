import './about.sass';
import Swiper from 'swiper/js/swiper.min.js';

var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 15,
  slidesPerView: 3,
  loop: true,
  freeMode: true,
  loopedSlides: 5, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
      600: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    },
});

var galleryTop = new Swiper('.gallery-top', {
  spaceBetween:   25,
  loop:true,
  loopedSlides: 5, //looped slides should be the same
  thumbs: {
    swiper: galleryThumbs,
  },
});