document.addEventListener("DOMContentLoaded", () => {
   // let window_back = document.querySelector('.window_back');
   let feedback__window = document.querySelector('.form_sended');
   let close = document.querySelector('.form_sended__close');
   let sendbtn = document.querySelector('.application__btn');

   sendbtn.addEventListener('click', function () {
      // window_back.classList.add('window_back--active');
      document.querySelector("body").classList.toggle("stop-scroll");
      feedback__window.classList.add('form_sended--active');
   });

   close.addEventListener('click', function () {
      // window_back.classList.remove('window_back--active');
      document.querySelector("body").classList.toggle("stop-scroll");
      feedback__window.classList.remove('form_sended--active');
   });
});