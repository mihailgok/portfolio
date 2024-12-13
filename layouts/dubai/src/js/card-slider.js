document.addEventListener("DOMContentLoaded", () => {
   let swipers = document.querySelectorAll(".house_card__slider");

   for (let swiper of swipers) {
      let all_imgs = swiper.querySelectorAll(".house_card__img");
      let pagination = swiper.querySelector(".house_card__pagination");
      let i = 0
      for (let img of all_imgs) {
         i++;
         let new_btn = document.createElement("button");
         new_btn.addEventListener("mouseover", function () {
            for (oneimg of all_imgs) {
               oneimg.classList.remove("house_card__img--active");
            }
            all_btns = this.parentNode.querySelectorAll(".house_card__pagination_btn");
            for (let all_btn of all_btns) {
               all_btn.classList.remove("house_card__pagination_btn--active");
            }

            this.classList.add("house_card__pagination_btn--active");
            img.classList.add("house_card__img--active");
         });

         new_btn.classList.add("house_card__pagination_btn");
         if (i === 1)
            new_btn.classList.add("house_card__pagination_btn--active");

         pagination.append(new_btn);
      }
   }

});