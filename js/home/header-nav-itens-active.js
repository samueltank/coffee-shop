"use strict";

const navLinks = document.querySelectorAll(".nav-list-item > a");
const bean     = document.querySelector("#coffee-bean-bar");


function active() {
  navLinks.forEach((item) => {
    item.classList.remove("active");
    this.classList.add("active");
    // arrow func. não tem 
  }); 

  // move bean:
  (function() {
    
  })();
}

navLinks.forEach((item) => {
  item.addEventListener("click", active);
});