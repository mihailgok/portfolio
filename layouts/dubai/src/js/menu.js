let header = document.querySelector('.header');

window.onscroll = function () {
   let scroll = document.documentElement.scrollTop || document.body.scrollTop;

   if (scroll > 0){
      header.classList.add('header--active');
   }
   
   else{
      header.classList.remove('header--active');
   }
};