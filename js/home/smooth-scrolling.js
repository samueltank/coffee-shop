"use strict";

const itemsMenu = document.querySelectorAll(".nav-list-item a");


const scrollToPosition = (to) => {
  window.scroll({
    top: to,
    behavior: "smooth"
  });
};

const getScrollTop = (element) => {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
};

const scrollToItem = (event) => {
  event.preventDefault();
  const to = getScrollTop(event.target) - 60;

  scrollToPosition(to);
};

itemsMenu.forEach( item => {
  item.addEventListener("click", scrollToItem, true);
})