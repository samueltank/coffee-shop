"use strict";

const circles = document.querySelector(".circle");

/* cria vários elementos <li> */

const createLi = function (quantity) {
  const cont = quantity;
  let arrElement = [];

  for (let i = 0; i < cont; ++i) {
    const li = document.createElement("li");
    const random = (min, max) => Math.random() * (max - min) + min;

    const size = Math.floor(random(10, 120));
    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}px`;

    const position = Math.floor(random(1, 99));
    li.style.left = `${position}%`;

    const delay = Math.floor(random(5, 0.1));
    li.style.animationDelay = `${delay}s`;

    const duration = Math.floor(random(24, 12));
    li.style.animationDuration = `${duration}s`;

    li.style.animationTimingFunction = `cubic-bezier(
      ${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()}
      )`;

    arrElement.push(li);
  }

  return arrElement;
};

const applyElemInDOM = function (elementArr) {
  const arr = elementArr;

  circles.replaceChildren(...arr);
};

applyElemInDOM(createLi(20));
