"use strict";

const modalBtn = document.querySelector(".modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

//Open Action
modalBtn.addEventListener("click", function () {
  modalOverlay.classList.add("open-modal");
});

//Close action
const closeAction = function () {
  modalOverlay.classList.remove("open-modal");
};

//Close with X
closeBtn.addEventListener("click", closeAction);

//Close outside X
modalOverlay.addEventListener("click", closeAction);

//Close with ESC key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    return closeAction();
  }
});
