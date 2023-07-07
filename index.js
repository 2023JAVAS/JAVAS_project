// 햄버거메뉴 열고 닫기
$(function () {
  $('.checkbox').on('click', () => {
    $('.header').toggleClass('active');
    $('.logo').toggleClass('active');
    $('.checkmark span').toggleClass('active');
    $('.menu').slideToggle(); // == display: block
  });
});

// 좌우 스크롤 롤링 230707 좌우롤링 위해 작성 최건
window.onscroll = function () {
  scrollRotate(); // DOM에서 함수 onscroll(),를 호출할 함수 를 만듭니다 scrollRotate()
};

function scrollRotate() {
  // id를 통해 reload 요소를 찾으면 스크롤하여 회전하고 image변수에 저장합니다 .
  let smile = document.getElementById('top');
  // 문서가 현재 세로축을 따라 스크롤되는 픽셀수를 반환하는 Window.pageYOffset 속성을 적용 합니다.
  smile.style.transform = 'translateX(' + window.pageYOffset / -4 + 'px)';

  let rombo = document.getElementById('bottom');
  // 문서가 현재 세로축을 따라 스크롤되는 픽셀수를 반환하는 Window.pageYOffset 속성을 적용 합니다.
  rombo.style.transform = 'translateX(' + window.pageYOffset / 3 + 'px)';
}

<<<<<<< HEAD
//스크롤시 이미지 크게 보이기
// const zoomElement = document.querySelector('.zoom');
// const fadeElement = document.querySelector('.fade');
// const afterZoomElement = document.querySelector('.room_category');
// const imgElement = document.querySelector('img');
// const WIDTH = document.body.clientWidth;
// const HEIGHT = zoomElement.clientHeight;
// const IMAGE_WIDTH = imgElement.clientWidth;
// const IMAGE_HEIGHT = imgElement.clientHeight;
// const ZOOM_SPEED = 100; // Lower is faster
// const ZOOM_BREAKPOINT = WIDTH / IMAGE_WIDTH; // When it should stop zooming in
// const IMAGE_HEIGHT_MAX = IMAGE_HEIGHT * ZOOM_BREAKPOINT;
// const ABSOLUTE = ZOOM_BREAKPOINT * ZOOM_SPEED; // Absolute position, when the Element reached maximum size

// // Fade --------------------------------------------------------------------------------------
// const FADE_SPEED = 500; // Lower is faster
// let fade = 1;
// let prev = 0;
// // -------------------------------------------------------------------------------------- Fade

// function anim() {
//   let scroll = window.scrollY;
//   let temp = scroll / ZOOM_SPEED;
//   let zoom = temp > 1 ? temp : 1;

//   // Only update the Elements scale, when we are below the breakpoint
//   if (zoom < ZOOM_BREAKPOINT) {
//     // Only scale the Image, so the Zoom element does not mess with the document width
//     imgElement.style.transform = `scale(${zoom})`;
//     // Sets the Elements position to fixed, so it can resize without scrolling away
//     zoomElement.style.top = '0px';
//     zoomElement.style.position = 'fixed';
//   } else {
//     // Makes sure the Element always reaches Max Size
//     imgElement.style.transform = `scale(${ZOOM_BREAKPOINT})`;
//     // Sets the elements position to absolute, so it will scroll with the rest of the document
//     zoomElement.style.position = 'absolute';
//     zoomElement.style.top = ABSOLUTE + 'px';
//   }

//   // Fade --------------------------------------------------------------------------------------
//   let dif = prev - scroll;

//   if (zoom < ZOOM_BREAKPOINT - FADE_SPEED / ZOOM_SPEED) {
//     fade = 1;
//   } else if (zoom > ZOOM_BREAKPOINT) {
//     fade = 0;
//   } else {
//     fade += dif / FADE_SPEED;
//   }

//   fadeElement.style.opacity = fade;
//   prev = scroll;
//   // -------------------------------------------------------------------------------------- Fade
// }

// // Resets scroll position on every reload
// if ('scrollRestoration' in history) {
//   history.scrollRestoration = 'manual';
// }

// document.addEventListener('scroll', () => window.requestAnimationFrame(anim));

// // Fade --------------------------------------------------------------------------------------
// zoomElement.style.opacity = 1;
// // -------------------------------------------------------------------------------------- Fade

// // Positions the afterZoom element right below the zoomed image
// afterZoomElement.style.top =
//   ABSOLUTE + IMAGE_HEIGHT_MAX / 1 + HEIGHT / 1 + 'px';
=======
gsap.set('.scaleDown', { xPercent: -50, yPercent: -50 });
gsap.to('.scaleDown', {
  scale: 2,
  scrollTrigger: {
    trigger: '.main_animation',
    pin: '.main_animation',
    scrub: true,
  },
});
>>>>>>> 98868152a70ec3568261d6f55d3c6ce047add142
