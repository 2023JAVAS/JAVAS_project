//  첫번째 슬라이드 : swiper 플러그인 사용
const mySwiper1 = new Swiper(".mySwiper1", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//  두번째 슬라이드 : swiper 플러그인 사용
const swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
const swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});

// 객실 도면 팝업창
function popup() {
  var url =
    "https://2023javas.github.io/JAVAS_project/room/room_ocean_villa/images/room_plan.jpg";
  var name = "popup";
  var option =
    "width = 700, height = 800, top = 100, left = 600, location = no";
  window.open(url, name, option);
}
