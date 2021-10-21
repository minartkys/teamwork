/*menu*/

const dropBtn = document.querySelector(".header__burger");
const dropContent = document.querySelector(".header__menu");

dropBtn.addEventListener("click", () => {
  if (dropContent.classList.contains("header__menu_active")) {
    dropContent.classList.remove("header__menu_active");
    dropBtn.setAttribute("src","./images/burger.svg")
  } else {
    dropContent.classList.add("header__menu_active");
    dropBtn.setAttribute("src","./images/close.svg")
  }
});
