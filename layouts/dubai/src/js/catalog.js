document.addEventListener("DOMContentLoaded", () => {

   let all_marks = [
      {
         pos: { lat: 25.229763, lng: 55.289308 },
         text: "100 064 AED",
         address: "Дубай. Palm West Beach",
         header: "СТУДИЯ PENINSULA 3 В ЦЕНТРЕ ДУБАЯ ОТ SELECT GROUP",
         bedrooms: "3 спальни",
         bathrooms: "2 ванная",
         area: 44,
         perMeter: "120 713 AED / м2",
         images: ["img/house_card.jpeg", "img/house_card1.jpeg", "img/house_card2.jpeg"]
      },
      {
         pos: { lat: 25.197180, lng: 55.274247 },
         text: "20 064 AED",
         address: "Дубай. Palm East Rich",
         header: "СТУДИЯ PENINSULA 3 В ЦЕНТРЕ ДУБАЯ ОТ SELECT GROUP",
         bedrooms: "5 спальни",
         bathrooms: "2 ванная",
         area: 50,
         perMeter: "300 435 AED / м2",
         images: ["img/house_card1.jpeg", "img/house_card2.jpeg", "img/house_card.jpeg"]
      },
      {
         pos: { lat: 25.131471, lng: 55.294965 },
         text: "233 064 AED",
         address: "Дубай. Looked Place",
         header: "СТУДИЯ PENINSULA 3 В ЦЕНТРЕ ДУБАЯ ОТ SELECT GROUP",
         bedrooms: "2 спальни",
         bathrooms: "1 ванная",
         area: 90,
         perMeter: "72 504 AED / м2",
         images: ["img/house_card2.jpeg", "img/house_card1.jpeg", "img/house_card.jpeg"]
      },
   ];

   function houseCardConstructor(images) {
      str = "";
      i = 0;
      for (let img of images) {
         str += `<img src="${img}" alt="" class="house_card__img ${i === 0 ? 'house_card__img--active' : ''}">`
         i++;
      }

      return str;
   }

   // Initialize and add the map
   let map;
   let map_card = document.querySelector(".map_house_card");

   async function initMap() {
      try {
         // The location of Uluru
         const position = { lat: 25.229763, lng: 55.289308 };
         // 25.229763, 55.289308
         // Request needed libraries.
         //@ts-ignore
         const { Map } = await google.maps.importLibrary("maps");
         const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

         // The map, centered at Uluru
         let map = new Map(document.getElementById("map"), {
            zoom: 11,
            center: position,
            mapId: "DEMO_MAP_ID",
            disableDefaultUI: true,
         });

         for (let mark of all_marks) {
            const priceTag = document.createElement("div");

            priceTag.className = "map_mark";
            priceTag.classList.add("maintext");
            priceTag.textContent = mark.text;

            const markerView = new google.maps.marker.AdvancedMarkerView({
               map,
               position: mark.pos,
               content: priceTag,
            });

            markerView.addListener("click", () => {
               map_card.innerHTML = `
            <div class="house_card__slider">
               
               ${houseCardConstructor(mark.images)}

               <div class="house_card__pagination">
               </div>
            </div>
            <div class="house_card__text">
               <div class="house_card__location maintext light">
                  <svg fill="none">
                     <use xlink:href="img/sprite.svg#location"></use>
                  </svg>
                  <span>${mark.address}</span>
               </div>

               <h4 class="house_card__header subtitle reg caps">
                  ${mark.header}
               </h4>

               <div class="house_card__info maintext">
                  <div class="house_card__info_block">
                     <svg fill="none">
                        <use xlink:href="img/sprite.svg#bed"></use>
                     </svg>
                     ${mark.bedrooms}
                  </div>
                  <div class="house_card__info_block">
                     <svg fill="none">
                        <use xlink:href="img/sprite.svg#bath"></use>
                     </svg>
                     ${mark.bathrooms}
                  </div>
                  <div class="house_card__info_block">
                     <svg fill="none">
                        <use xlink:href="img/sprite.svg#room"></use>
                     </svg>
                     ${mark.area} м<sup>2</sup>
                  </div>
               </div>

               <div class="house_card__price">
                  <p class="house_card__price_full h6 demi">${mark.text}</p>

                  <p class="house_card__price_per maintext light">269 064 AED / м<sup>2</sup></p>
               </div>
            </div>

            <button class="house_card__close">
               <svg>
                  <use xlink:href="img/sprite.svg#close-circle"></use>
               </svg>
            </button>`;

               map_card.classList.add("map_house_card--active");
               document.querySelector('.catalog_main').classList.add("catalog_main--active");

               let map_card_close = document.querySelector(".house_card__close");

               map_card_close.addEventListener("click", () => {
                  map_card.classList.remove("map_house_card--active");
                  document.querySelector('.catalog_main').classList.remove("catalog_main--active");
               });

               let all_imgs = map_card.querySelectorAll(".house_card__img");
               let pagination = map_card.querySelector(".house_card__pagination");
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
            });

         }

      }
      catch (e) {
         console.log(e);
      }
   }
   initMap();



   let map_btn = jQuery(".map_btn");
   let catalog_map = jQuery(".catalog__map");
   let main_grid = jQuery(".catalog_main__grid");
   let pages = document.querySelector(".pages");
   let sort_panel = $(".catalog_main__top");

   map_btn.on("click", () => {
      map_btn.toggleClass('map_btn--active');
      catalog_map.toggleClass("catalog__map--active");
      main_grid.toggleClass("catalog_main__grid--active");
      pages.classList.toggle("pages--active");
      sort_panel.toggleClass("catalog_main__top--remove");
   });
});