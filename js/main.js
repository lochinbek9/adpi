"use strict";



// HAMBURGER MENU

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.header__list');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// NEWS TAB MENU

const slides = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slideWidth = 100 / 3; // Har uchta slayder ko'rsatiladi
const totalSlides = document.querySelectorAll('.slide').length;
let currentIndex = 0;

function updateSlider() {
    slides.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
}

function goToPrevSlide() {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateSlider();
}

function goToNextSlide() {
    const maxIndex = totalSlides - 3; // Oxirgi uchlikdan nariga o'tmaslik uchun
    currentIndex = Math.min(currentIndex + 1, maxIndex);
    updateSlider();
}

prevButton.addEventListener('click', goToPrevSlide);
nextButton.addEventListener('click', goToNextSlide);

setInterval(() => {
    const maxIndex = totalSlides - 3;
    currentIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
    updateSlider();
}, 3000); // Har 3 sekundda avtomatik o'tadi