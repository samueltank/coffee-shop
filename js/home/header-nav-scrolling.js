"use strict";

/* script para determinar o estilo da barra quando a rolagem ocorrer */
const header = document.querySelector(".container-sec-home-header");
const logo   = document.querySelector(".header-sec-home-logo");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
  logo.classList.toggle("dynami-logo", window.scrollY > 0);
});
