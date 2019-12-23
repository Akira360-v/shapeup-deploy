import 'core-js/es/promise';
// import Headhesive from 'headhesive/dist/headhesive.min.js';

import $ from 'jquery';

// Uncomment for use BOOTSTAP4
// window.Popper = require('popper.js').default;
// require('bootstrap');
// import 'bootstrap/scss/bootstrap.scss';

import './fonts';
import initLayout from './layout';
import initBlocks from './blocks';
import initPages from './pages';

$(() => {
  initLayout();
  initBlocks();
  initPages();
});

