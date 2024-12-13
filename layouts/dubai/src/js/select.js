document.addEventListener("DOMContentLoaded", () => {
   let selects = document.querySelectorAll(".select");

   for (let select of selects) {
      let select_main = select.querySelector(".select_btn span");
      select_btns = select.querySelectorAll(".select_block .select_btn");

      for (let select_btn of select_btns) {
         select_btn.addEventListener("click", () => {
            let textStr = [];
            for (let select_btn1 of select_btns) {
               let select_btn1_val = select_btn1.querySelector("input:checked");
               if (select_btn1_val) {
                  textStr.push(select_btn1_val.value);
               }
            }

            if (textStr.length !== 0) {
               select_main.textContent = textStr.join(", ");
            }
            else {
               select_main.textContent = "Не выбрано";
            }
         });
      }
   }
});