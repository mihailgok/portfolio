document.addEventListener("DOMContentLoaded", () => {
    let pluses_cards = document.querySelectorAll(".pluses__swiper__card");
    let card_num = +document.querySelector(".pluses__swiper__card.active").dataset.num;
    let logoL = document.querySelector(".logoL");
    let logoR = document.querySelector(".logoR");
    let allSvgs = document.querySelectorAll(".pluses__swiper__svg_anim");
    let leftSvgs = document.querySelector(".pluses__swiper__svg_R");
    let prevBtn = document.querySelector(".pluses__swiper__prev");
    let nextBtn = document.querySelector(".pluses__swiper__next");
    let svg_btns = document.querySelectorAll(".pluses__swiper__svg__btn");

    for (let svg_btn of svg_btns) {
        svg_btn.addEventListener("click", () => {
            pluses_cards[+svg_btn.dataset.num].click();
        });
    }

    prevBtn.addEventListener("click", () => {
        if (window.innerWidth <= 650) return false;

        if (card_num === 0) {
            card_num = pluses_cards.length;
        }
        card_num--;
        pluses_cards[card_num].click();
    });

    nextBtn.addEventListener("click", () => {
        if (window.innerWidth <= 650) return false;

        if (card_num === pluses_cards.length - 1) {
            card_num = -1;
        }
        card_num++;
        pluses_cards[card_num].click();
    });

    function restartAnim() {
        logoL.classList.remove("logoL");
        logoR.classList.remove("logoR");

        setTimeout(() => {
            logoL.classList.add("logoL");
            logoR.classList.add("logoR");
        }, 10)

        for (let oneSvg of allSvgs) {
            oneSvg.classList.remove("pluses__swiper__svg_anim");
            leftSvgs.classList.remove("pluses__swiper__svg_R");
        }

        setTimeout(() => {
            for (let oneSvg of allSvgs) {
                oneSvg.classList.add("pluses__swiper__svg_anim");
                leftSvgs.classList.add("pluses__swiper__svg_R");
            }
        }, 10)
    }

    for (let pluses_card of pluses_cards) {
        pluses_card.addEventListener("click", (e) => {
            e.preventDefault();
            let newNum = +pluses_card.dataset.num;

            for (let p_card of pluses_cards) {
                p_card.classList.remove("active");
                p_card.classList.remove("pluses__swiper__card1");
                p_card.classList.remove("pluses__swiper__card2");
                p_card.classList.remove("pluses__swiper__card3");
                p_card.classList.remove("pluses__swiper__card4");
                p_card.classList.remove("pluses__swiper__card6");
                p_card.classList.remove("pluses__swiper__card7");
                p_card.classList.remove("pluses__swiper__card8");
                p_card.classList.remove("pluses__swiper__card9");
            }
            for (let svg_btn of svg_btns) {
                svg_btn.classList.remove("active");
            }

            document.querySelector(".pluses__swiper__svg__btn_" + (newNum + 1)).classList.add("active");

            switch (newNum) {
                case 3:
                    pluses_cards[(newNum - 1) % 9].classList.add("pluses__swiper__card4");
                    pluses_cards[(newNum - 2) % 9].classList.add("pluses__swiper__card3");
                    pluses_cards[(newNum - 3) % 9].classList.add("pluses__swiper__card2");
                    pluses_cards[8].classList.add("pluses__swiper__card1");
                    break;
                case 2:
                    pluses_cards[(newNum - 1) % 9].classList.add("pluses__swiper__card4");
                    pluses_cards[(newNum - 2) % 9].classList.add("pluses__swiper__card3");
                    pluses_cards[8].classList.add("pluses__swiper__card2");
                    pluses_cards[7].classList.add("pluses__swiper__card1");
                    break;
                case 1:
                    pluses_cards[(newNum - 1) % 9].classList.add("pluses__swiper__card4");
                    pluses_cards[8].classList.add("pluses__swiper__card3");
                    pluses_cards[7].classList.add("pluses__swiper__card2");
                    pluses_cards[6].classList.add("pluses__swiper__card1");
                    break;
                case 0:
                    pluses_cards[8].classList.add("pluses__swiper__card4");
                    pluses_cards[7].classList.add("pluses__swiper__card3");
                    pluses_cards[6].classList.add("pluses__swiper__card2");
                    pluses_cards[5].classList.add("pluses__swiper__card1");
                    break;
                default:
                    pluses_cards[(newNum - 1) % 9].classList.add("pluses__swiper__card4");
                    pluses_cards[(newNum - 2) % 9].classList.add("pluses__swiper__card3");
                    pluses_cards[(newNum - 3) % 9].classList.add("pluses__swiper__card2");
                    pluses_cards[(newNum - 4) % 9].classList.add("pluses__swiper__card1");
            }

            pluses_cards[(newNum + 1) % 9].classList.add("pluses__swiper__card6");
            pluses_cards[(newNum + 2) % 9].classList.add("pluses__swiper__card7");
            pluses_cards[(newNum + 3) % 9].classList.add("pluses__swiper__card8");
            pluses_cards[(newNum + 4) % 9].classList.add("pluses__swiper__card9");

            pluses_card.classList.add("active");
            card_num = +pluses_card.dataset.num;
            restartAnim();
        });
    }

    if (window.innerWidth <= 650) {
        let pluses_swiper = new Swiper(".pluses__swiper__cards", {
            wrapperClass: 'pluses__swiper__cards__container',
            slideClass: 'pluses__swiper__card',
            slidesPerView: 1,
            spaceBetween: "2%",
            navigation: {
                nextEl: '.pluses__swiper__next',
                prevEl: '.pluses__swiper__prev',
            }
        });

        pluses_swiper.on("slideChangeTransitionStart", () => {
            restartAnim();
        });
    }
});