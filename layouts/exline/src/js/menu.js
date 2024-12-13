document.addEventListener('DOMContentLoaded', function () {
   let burger = document.querySelector(".header__burger");
   let mobmenu = document.querySelector(".mobile_menu");
   let mobLinks = document.querySelectorAll(".mobile__nav__link");

   burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      mobmenu.classList.toggle("active");
   })

   for(let mobLink of mobLinks) {
      mobLink.addEventListener("click", () => {
         burger.classList.remove("active");
         mobmenu.classList.remove("active");
      });
   }
});