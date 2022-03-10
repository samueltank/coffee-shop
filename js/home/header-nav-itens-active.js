"use strict";

// para capturar a posição de uma elemento: .getBoundingClientRect();

const navLinks = document.querySelectorAll(".nav-list-item > a");
const bean     = document.querySelector("#coffee-bean-bar");


function active() {
  navLinks.forEach((item) => {
    item.classList.remove("active");
    // arrow func. não recebe "this".
  }); 
  this.classList.add("active");
  this.appendChild(bean);  

  /* Testing for move bean: */

  // const elementCoordenate = this.getBoundingClientRect().x;
  // const beanCoordenate    = bean.getBoundingClientRect().x = 
  // elementCoordenate;
  // const beanReposition    = beanCoordenate;
  // console.log(beanCoordenate)

  // if (navLinks[1].classList.contains("active")) {
  //   bean.style.transform = `translateX(${beanReposition}px)`;
  // };

  
}

navLinks.forEach((item) => {
  item.addEventListener("click", active);
});