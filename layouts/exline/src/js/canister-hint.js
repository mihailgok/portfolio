document.addEventListener("DOMContentLoaded", () => {
    let hint = document.querySelector(".canister__hint");
    let hintClose = document.querySelector(".canister__hint__close");
    let qms = document.querySelectorAll(".canister__panel__line__main__item svg");

    function getPosition(parent, child) {
       let parentPos = parent.getBoundingClientRect(),
          childPos = child.getBoundingClientRect(),
          relativePos = {};

       // console.log(child);

       relativePos.top = childPos.top - parentPos.top;
       relativePos.left = childPos.left - parentPos.left + 10;
       relativePos.bottom = childPos.bottom - parentPos.bottom - 10;
       relativePos.right = childPos.right - parentPos.right;

       return relativePos;
    }


    for (let qm of qms) {
       qm.addEventListener("click", () => {
          hint.classList.add("active");

          let pos = getPosition(document.querySelector(".canister__panel"), qm);

          // console.log(pos);

          hint.style.left = pos.left + "px";
          hint.style.bottom = -pos.bottom + "px";
       });
    }

    hintClose.addEventListener("click", () => {
       hint.classList.remove("active");
    });
 });