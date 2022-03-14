"use strict";

const navLinks = document.querySelectorAll(".nav-list-item > a");
const bean     = document.querySelector("#coffee-bean-bar");

// função para aplicação de animação de levante ao click:
function active() {
  navLinks.forEach((item) => {
    item.classList.remove("active");
  }); 
  this.classList.add("active");

  // captura e armazenamento posição X e largura do elemento 'this':
  let elementCoordenateX = this.getBoundingClientRect().x;
  let elementWidth       = this.getBoundingClientRect().width;

  // captura e armazenamento posição X e largura do elemento 'bean':
  let beanCoordenateX    = bean.getBoundingClientRect().x;
  let beanWidth          = bean.getBoundingClientRect().width;

  // objetos com coordenadas necessárias para animação:
  let elementThis = { // objeto elemento.
    "AxisX" : Math.round(elementCoordenateX),
    "center": Math.round(elementWidth / 2)
  };
  let beanObject  = { // objeto 'bean'.
    "AxisX" : Math.round(beanCoordenateX),
    "center": Math.round(beanWidth / 2)
  };

  let move = (elementThis.AxisX - beanObject.AxisX) +
    (elementThis.center - beanObject.center);

  console.log(elementThis);
  console.log(beanObject);
  console.log(move);  

  bean.style.transform += `translate(${move}px, 0px)`;
}


navLinks.forEach((item) => {
  item.addEventListener("click", active);
});
