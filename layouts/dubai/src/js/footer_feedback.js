document.addEventListener("DOMContentLoaded", () => {
   let feedback_close = document.querySelectorAll(".feedback_close");
   let feedback_window = document.querySelector(".feedback_window");
   let footer_btn = document.querySelector(".footer_btn");
   let feedback_submit = document.querySelector(".feedback__submit");

   let feedback_wrapper = document.querySelector(".feedback__wrapper");
   let feedback_wrapper_two = document.querySelector(".feedback__wrapper--two");

   footer_btn.addEventListener("click", () => {
      feedback_window.classList.add("feedback_window--active");
   });

   for (let feedback_close_one of feedback_close) {
      feedback_close_one.addEventListener("click", () => {
         feedback_window.classList.remove("feedback_window--active");
      });
   }

   feedback_submit.addEventListener("click", () => {
      feedback_wrapper.classList.add("feedback__wrapper--remove");
      feedback_wrapper_two.classList.add("feedback__wrapper--two--active");
   });
});