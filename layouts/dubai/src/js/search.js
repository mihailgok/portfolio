document.addEventListener("DOMContentLoaded", function () {
   let searches = document.querySelectorAll(".search");

   for (let search of searches) {
      let search_input = search.querySelector(".search_main__input");
      let search_reset = search.querySelector(".search_reset");

      search_input.addEventListener("focus", () => {
         search_input.parentNode.parentNode.parentNode.classList.add("search--active");
      });

      search_input.addEventListener("blur", () => {
         search_input.parentNode.parentNode.parentNode.classList.remove("search--active");
      });

      search_reset.addEventListener("click", () => {
         search_input.value = "";
         search_input.focus();
      });

   }
});