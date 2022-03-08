"use strict";

const header = document.querySelector(".container-sec-home-header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});