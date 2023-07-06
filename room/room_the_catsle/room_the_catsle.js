// 햄버거메뉴 열고 닫기
$(function () {
  $(".checkbox").on("click", () => {
    $(".header").toggleClass("active");
    $(".logo").toggleClass("active");
    $(".checkmark span").toggleClass("active");
    $(".menu").slideToggle(); // == display: block
  });
});

// a가 가지고 있는 기본 이벤트 제거
$('a[href="#"]').on("click", (evt) => {
  evt.preventDefault();
});

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
