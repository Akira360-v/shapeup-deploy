import './reviews.sass';
import Swiper from 'swiper/js/swiper.min.js';

var swiperReviews = new Swiper('.reviews__slider', {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 1.2,
      spaceBetween: 30,
    },
    800: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});





// var galleryThumbs = new Swiper('.gallery-thumbs', {
//   spaceBetween: 15,
//   slidesPerView: 3,
//   loop: true,
//   freeMode: true,
//   loopedSlides: 5, //looped slides should be the same
//   watchSlidesVisibility: true,
//   watchSlidesProgress: true,
// ,
// });
