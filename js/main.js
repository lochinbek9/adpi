"use strict";

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.header__list');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});