document.addEventListener("DOMContentLoaded", () => {
    let radios = document.querySelectorAll(".series__panel__item input");
    let cards = document.querySelectorAll(".series__right__card");

    for (let radio of radios) {
        radio.addEventListener("change", (e) => {
            let actEl = document.querySelector(".series__panel__item input:checked").value;

            for (let card of cards) {
                card.classList.remove("active");
            }

            cards[actEl - 1].classList.add("active");
        })
    }
});