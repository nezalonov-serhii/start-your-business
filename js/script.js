$(document).ready(function () {
   $(".slider").slick({
      arrows: false, // по дефолту включено стрелки навигацыи
      adaptiveHeight: true, //меняет высоту автоматически под высоту фото
      slidesToShow: 1, //Количество отображаемых слайдов
      slidesToScroll: 1, //сколько слайдов пролистывать
      speed: 1500, //По умолчанию 350ms
      easing: "ease", //liner поумолчанию
      infinite: true, //По умолчанию true slick-disabled

      // Autoplay
      autoplay: true, //Автопроигрывание по умвлчанию false
      autoplaySpeed: 1000,
      pauseOnFocu: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,

      centerMode: true, //Поумолчанию false основной слайд становится поцентру

      rows: 2,

      responsive: [
         //Адаптивка
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 2,
            },
         },
         {
            breakpoint: 1200,
            settings: {
               autoplay: false,
               slidesToShow: 5,
               arrows: true,
            },
         },
      ],
      mobileFirst: true,
   });
});
