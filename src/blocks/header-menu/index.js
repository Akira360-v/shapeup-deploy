import './header-menu.sass';

import Headhesive from 'headhesive/dist/headhesive.min.js';

// Options
var options = {
  offset: 50
};
var header = new Headhesive('.head__menu', options);

$(document).ready(function (){
  $('.nav__menu_burger').click(function (event) {
    $('.nav__menu_burger,.header__nav').toggleClass('active');
  })
})