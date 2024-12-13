let scrollers = document.querySelectorAll(".filter");

function prityNumber(number) {
   let prevNumber = '' + number;
   let newNum = [];
   let j = 0;
   for (let i = prevNumber.length - 1; i >= 0; i--) {
      if (j % 3 === 0) {
         newNum.unshift(" ");
      }
      j++;
      newNum.unshift(prevNumber[i]);
   }

   return newNum.join("").trim();
}

for (let scroller of scrollers) {
   const rangeInput = scroller.querySelectorAll(".range-input input"),
      priceInput = scroller.querySelectorAll(".price-input input"),
      range = scroller.querySelector(".slider .progress");
   let priceGap = 1000;

   // console.log(scroller.classList)

   if(scroller.classList.contains("noinput")){
      priceGap = 1;
   }

   priceInput.forEach((input) => {
      input.addEventListener("input", (e) => {
         let minPrice = parseInt(priceInput[0].value.replaceAll(" ", "")),
            maxPrice = parseInt(priceInput[1].value.replaceAll(" ", ""));
         // console.log(minPrice);
         // console.log(maxPrice);
         if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
            if (e.target.className === "input-min") {
               rangeInput[0].value = minPrice;
               range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
            } else {
               rangeInput[1].value = maxPrice;
               range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
         }
      });

      input.addEventListener("blur", (e) => {
         input.value = prityNumber(input.value);
      });

      input.addEventListener("focus", (e) => {
         input.value = input.value.replaceAll(" ", "");
      });
   });

   rangeInput.forEach((input) => {
      input.addEventListener("input", (e) => {
         let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

         if (maxVal - minVal < priceGap) {
            if (e.target.className === "range-min") {
               rangeInput[0].value = maxVal - priceGap;
            } else {
               rangeInput[1].value = minVal + priceGap;
            }
         } else {
            priceInput[0].value = prityNumber(minVal);
            priceInput[1].value = prityNumber(maxVal);
            range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
         }
      });


      priceInput[0].dispatchEvent(new Event('input'));
      priceInput[1].dispatchEvent(new Event('input'));
      rangeInput[0].dispatchEvent(new Event('input'));
      rangeInput[1].dispatchEvent(new Event('input'));
   });
}