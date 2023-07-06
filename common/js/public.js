// 햄버거메뉴 열고 닫기
$(".checkbox").on("click", () => {
  $(".header").toggleClass("active");
  $(".logo").toggleClass("active");
  $(".checkmark span").toggleClass("active");
  $(".menu").slideToggle(); // == display: block
});
