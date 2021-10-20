/*menu*/

const menuDrop = document.querySelector(".header__burger");
const dropCcontent = document.querySelector(".header__menu");

menuDrop.addEventListener("click", () => {
  if (dropCcontent.classList.contains("header__menu_active")) {
    dropCcontent.classList.remove("header__menu_active");
  } else {
    dropCcontent.classList.add("header__menu_active");
  }
});
