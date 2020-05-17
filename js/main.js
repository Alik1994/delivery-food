var CardButton = document.querySelector("#card-btn");
var Modal = document.querySelector(".modal");
var Close = document.querySelector(".close");

CardButton.addEventListener("click", function (event) {
  Modal.classList.add("is-open");
});

Close.addEventListener("click", function (event) {
  Modal.classList.remove("is-open");
});

new WOW().init();
