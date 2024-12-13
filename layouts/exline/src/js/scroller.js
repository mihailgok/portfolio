document.addEventListener("DOMContentLoaded", () => {

    var path = 'image/';
    pdt360DegViewer('scroll_main1', 24, path, 'png', false, false, true, false, false, false, false);   //draggable;
    pdt360DegViewer('scroll_main2', 24, path, 'webp', false, false, true, false, false, false, false);   //draggable;
    pdt360DegViewer('scroll_main3', 24, path, 'png', false, false, true, false, false, false, false);   //draggable;
    pdt360DegViewer('scroll_main4', 24, path, 'webp', false, false, true, false, false, false, false);   //draggable;
 
    let all_imgs = document.querySelectorAll(".viewer img");

    for (let one_img of all_imgs) {
        let shadow_img = one_img.parentNode.parentNode.querySelector(".scroll_shadow img");

        observer = new MutationObserver((changes) => {
            changes.forEach(change => {
                if (change.attributeName.includes('src')) {
                    shadow_img.src = one_img.src;
                }
            });
        });

        observer.observe(one_img, { attributes: true });
    }

    let all_cards = document.querySelectorAll(".canister__scroller__card");
    let all_btns = document.querySelectorAll(".canister__btn");
    let btn_list = document.querySelector(".canister__btns");
    let header = document.querySelector(".canister__header");

    for (let btn of all_btns) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            btn_list.classList.remove("active");
            for (let card of all_cards) {
                card.classList.remove("active");
            }
            for (let b of all_btns) {
                b.classList.remove("active");
            }

            btn.classList.add("active");
            document.querySelector("#" + btn.dataset.id).classList.add("active");
        });
    }

    header.addEventListener("click", () => {
        btn_list.classList.toggle("active");
    });

});