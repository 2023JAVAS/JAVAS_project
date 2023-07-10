// 햄버거메뉴 열고 닫기
$(function () {
  $(".checkbox").on("click", () => {
    $(".header").toggleClass("active");
    $(".logo").toggleClass("active");
    $(".checkmark span").toggleClass("active");
    $(".menu").slideToggle(); // == display: block
  });
});

// 좌우 스크롤 롤링 230707 좌우롤링 위해 작성 최건
window.onscroll = function () {
  scrollRotate(); // DOM에서 함수 onscroll(),를 호출할 함수 를 만듭니다 scrollRotate()
};

function scrollRotate() {
  // id를 통해 reload 요소를 찾으면 스크롤하여 회전하고 image변수에 저장합니다 .
  let smile = document.getElementById("top");
  // 문서가 현재 세로축을 따라 스크롤되는 픽셀수를 반환하는 Window.pageYOffset 속성을 적용 합니다.
  smile.style.transform = "translateX(" + window.pageYOffset / -4 + "px)";

  let rombo = document.getElementById("bottom");
  // 문서가 현재 세로축을 따라 스크롤되는 픽셀수를 반환하는 Window.pageYOffset 속성을 적용 합니다.
  rombo.style.transform = "translateX(" + window.pageYOffset / 3 + "px)";
}

//스크롤시 이미지 크게 보이기
gsap.set(".scaleDown", { xPercent: -50, yPercent: -50 });
gsap.to(".scaleDown", {
  scale: 2,
  scrollTrigger: {
    trigger: ".main_animation",
    pin: ".main_animation",
    scrub: true,
  },
});

// 스크롤시 선이 그어짐
AOS.init();
