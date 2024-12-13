document.addEventListener("DOMContentLoaded", () => {

   let filter_window = document.querySelector(".filter_window");
   let filter_open = document.querySelector(".filter_open");
   let filter_close = document.querySelector(".filter_window_close");
   try {

      filter_open.addEventListener("click", () => {
         filter_window.classList.add("filter_window--active");
      });

      filter_close.addEventListener("click", () => {
         filter_window.classList.remove("filter_window--active");
      });
   }
   catch(e) {
      console.log(e);
   }

});