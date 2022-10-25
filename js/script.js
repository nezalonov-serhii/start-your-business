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

      centerMode: true, //Поумолчанию false основной слайд становится поцентру

      responsive: [
         //Адаптивка
         {
            breakpoint: 400,
            settings: {
               slidesToShow: 2,
            },
         },
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 5,
               arrows: true,
            },
         },
      ],
      mobileFirst: true,
   });
});

$(document).ready(function () {
   $(".slider-press").slick({
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1500,
      easing: "ease",
      infinite: true,

      autoplay: true,
      autoplaySpeed: 2500,
      pauseOnFocu: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,

      centerMode: true,

      responsive: [
         //Адаптивка
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2,
            },
         },
      ],
      mobileFirst: true,
   });
});
