document.addEventListener("DOMContentLoaded", () => {
   async function initMap() {
      const position = { lat: 25.229763, lng: 55.289308 };

      const { Map } = await google.maps.importLibrary("maps");
      const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

      let map = new Map(document.getElementById("map"), {
         zoom: 11,
         center: position,
         mapId: "DEMO_MAP_ID",
         disableDefaultUI: true,
      });

      const priceTag = document.createElement("div");

      priceTag.className = "single_map_mark";

      const markerView = new google.maps.marker.AdvancedMarkerView({
         map,
         position: { lat: 25.131471, lng: 55.294965 },
         content: priceTag,
      });

   }
   initMap();
});