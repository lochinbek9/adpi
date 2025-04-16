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

// ============================= TABS-MENU==================================


const newsData = {
    local: [
        { id: 'local-1', title: 'Mahalliy Yangilik 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: './img/news-main-img.png' },
        { id: 'local-2', title: 'Mahalliy Yangilik 2', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', image: './img/news-main-img.png' },
        { id: 'local-3', title: 'Mahalliy Yangilik 3', content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image: './img/news-main-img.png' }
    ],
    world: [
        { id: 'world-1', title: 'Xalqaro Yangilik 1', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', image: './img/news-main-img.png' },
        { id: 'world-2', title: 'Xalqaro Yangilik 2', content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image: './img/news-main-img.png' },
        { id: 'world-3', title: 'Xalqaro Yangilik 3', content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', image: 'https://via.placeholder.com/600x300' }
    ],
    sports: [
        { id: 'sports-1', title: 'Sport Yangilik 1', content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', image: './img/news-main-img.png' },
        { id: 'sports-2', title: 'Sport Yangilik 2', content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.', image: './img/news-main-img.png' },
        { id: 'sports-3', title: 'Sport Yangilik 3', content: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.', image: './img/news-main-img.png' }
    ]
};

function openTab(tabName) {
    // Hide all tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => button.classList.remove('active'));

    // Show selected tab content and set button as active
    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}

function setMainNews(tabName, element) {
    const newsId = element.getAttribute('data-id');
    const news = newsData[tabName].find(item => item.id === newsId);
    const mainNews = document.querySelector(`#${tabName} .main-news`);
    const latestNews = document.querySelector(`#${tabName} .latest-news`);

    // Update main news
    mainNews.innerHTML = `
        <div class="news-item" data-id="${news.id}">
            <img src="${news.image}" alt="Main News">
            <h3>${news.title}</h3>
            <p>${news.content}</p>
        </div>
    `;

    // Update latest news (exclude the main news)
    const latestNewsItems = newsData[tabName].filter(item => item.id !== newsId);
    latestNews.innerHTML = latestNewsItems.map(item => `
        <div class="news-item" data-id="${item.id}" onclick="setMainNews('${tabName}', this)">
            <h3>${item.title}</h3>
            <p>${item.content}</p>
        </div>
    `).join('');
}