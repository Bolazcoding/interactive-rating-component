"use strict";
const btns = document.querySelectorAll(".btn-hover");
const submit_btn = document.querySelector(".submit-btn");
const rating_text = document.querySelector(".rating-select");
const section_hidden = document.querySelector("section");
const container_body = document.querySelector(".container-body");

let rating;
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    rating = btns[i].value;
    btns[i].style.backgroundColor = "hsl(0, 100%, 100%)";
    btns[i].style.color = "hsl(216, 12%, 8%)";
    console.log(rating);
  });
}

submit_btn.addEventListener("click", function () {
  if (!rating) {
    alert("Kindly rate and try again!");
  } else {
    container_body.classList.add("hidden");
    section_hidden.classList.remove("section-hidden");
    submit_btn.style.backgroundColor = "hsl(25, 97%, 53%)";
    submit_btn.style.backgroundColor = " hsl(216, 12%, 8%)";
    rating_text.textContent = `You selected ${rating} out of 5`;
  }
});
