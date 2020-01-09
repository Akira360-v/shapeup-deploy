import './reviews.sass';
import Swiper from 'swiper/js/swiper.min.js';

var swiperReviews = new Swiper('.reviews__slider', {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
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
//   breakpoints: {
//       600: {
//         slidesPerView: 3,
//         spaceBetween: 30,
//       }
//     },
// });
