"use strict";

const slideHandler = function() {
  const slider = document.getElementById("slider");
  const slide = function() {
    if (window.scrollY > 212) {
      slider.classList.add("visible");
    } else {
      slider.classList.remove("visible");
    }
  };

  document.addEventListener("scroll", slide);
};

document.addEventListener("DOMContentLoaded", slideHandler);
