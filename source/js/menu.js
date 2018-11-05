var main_menu = document.querySelector(".main-navigation");
var button_menu = document.querySelector(".main-navigation__button");
var first_icon = document.querySelector(".main-navigation__button::before");
var second_icon = document.querySelector(".main-navigation__button::after");

main_menu.classList.remove("main-navigation--nojs");

button_menu.addEventListener("click", function() {

  if (main_menu.classList.contains("main-navigation--closed")) {
    main_menu.classList.remove("main-navigation--closed");
    main_menu.classList.add("main-navigation--opened");
  } else {
    main_menu.classList.add("main-navigation--closed");
    main_menu.classList.remove("main-navigation--opened");
  }
});
