"use strict";

document
  .querySelector(".all-cards-container")
  .addEventListener("wheel", (e) => {
    if (e.deltaY > 0) {
      e.target.scrollBy(5, 0);
    } else {
      e.target.scrollBy(-5, 0);
    }
    e.preventDefault();
  });
