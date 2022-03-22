"use strict";

document
  .querySelector(".container-with-arrows")
  .addEventListener("wheel", (e) => {
    if (e.deltaY > 0) {
      e.target.scrollBy(3, 0);
    } else {
      e.target.scrollBy(-3, 0);
    }
    e.preventDefault();
  });
