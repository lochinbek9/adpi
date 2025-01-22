"use strict";

// HAMBURGER MENU

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.header__list');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// NEWS TAB MENU

document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".news__menu-item");
  const contentItems = document.querySelectorAll(".news__content-item");

  menuItems.forEach(item => {
    item.addEventListener("click", () => {
      // Remove 'active' class from all content items
      contentItems.forEach(content => content.classList.remove("active"));

      // Add 'active' class to the clicked tab's associated content
      const contentId = item.getAttribute("data-content");
      const targetContent = document.getElementById(contentId);

      
      targetContent.classList.toggle("active");
      

      // If the tab is "News", display timestamps
      if (contentId === "news") {
        const newsList = document.querySelectorAll(".news__content--list li");
        newsList.forEach((news, index) => {
          const currentDate = new Date();
          const timestamp = currentDate.toLocaleString();
          const dateElement = news.querySelector(".news__content--item--date");
          if (!dateElement.dataset.initialized) {
            dateElement.textContent = `Added on: ${timestamp}`;
            dateElement.dataset.initialized = true;
          }
        });
      }
    });
  });
});


