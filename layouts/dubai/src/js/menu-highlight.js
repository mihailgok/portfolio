document.addEventListener('DOMContentLoaded', function () {
   try{
      document.querySelector(`.nav__link[href="${window.location.pathname.replace("/bur/", "")}"]`).classList.add('nav__link--active');
   }
   catch{
   }
});