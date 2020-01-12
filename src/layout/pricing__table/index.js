import './pricing__table.sass';
import Swiper from 'swiper/js/swiper.min.js';

var pricingSlider = new Swiper('.pricing__slider', {
  slidesPerView: 5,
  spaceBetween: 15,


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    425: {
      slidesPerView: 1.3,
      spaceBetween: 30,
      },
    500: {
      slidesPerView: 1.5,
      spaceBetween: 30,
      },
    600: {
      slidesPerView: 1.8,
      spaceBetween: 30,
      },
    700: {
      slidesPerView: 2,
      spaceBetween: 30,
      },
    800: {
      slidesPerView: 2.2,
      spaceBetween: 30,
      },
    900: {
      slidesPerView: 2.6,
      spaceBetween: 30,
      },
    1000: {
      slidesPerView: 3,
      spaceBetween: 30,
      },
    1100: {
      slidesPerView: 3.7,
      spaceBetween: 30,
      },
    1300: {
      slidesPerView: 4,
      spaceBetween: 30,
      },
    },
  });