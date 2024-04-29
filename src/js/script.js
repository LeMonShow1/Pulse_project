// $(document).ready(function () {
//   $(".carousel__inner").slick({
//     speed: 500,
//     prevArrow:
//       '<button type="button" class="slick-next"><img src="../icons/chevron left solid.svg"></button>',
//     nextArrow:
//       '<button type="button" class="slick-prev"><img src="../icons/chevron right solid.svg"></button>',
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           dots: true,
//           arrows: false,
//         },
//       },
//     ],
//   });
// });

const slider = tns({
  container: ".carousel__inner",
  items: 1,
  slideBy: "page",
  autoplay: false,
  controls: false,
  nav: false
});

document.querySelector(".prev").addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector(".next").addEventListener('click', function () {
    slider.goTo('next');
});
