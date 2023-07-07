// 오시는길 toggle
$(".accordion_menu").on("click", (e) => {
  const target = $(e.target);
  target.next("p").slideToggle();
  target.next(".bus").css({ display: "flex" });
  target.parent().siblings().find("p").slideUp();
});

// 화살표 toggle
$(".accordion_menu img").on("click", (e) => {
  const target = $(e.target);
  target.toggleClass("active");
});

// 섹션스크롤
window.addEventListener(
  "wheel",
  function (e) {
    e.preventDefault();
  },
  { passive: false }
);
var $html = $("html");

var page = 1;

var lastPage = $(".content").length;

$html.animate({ scrollTop: 0 }, 10);

$(window).on("wheel", function (e) {
  if ($html.is(":animated")) return;

  if (e.originalEvent.deltaY > 0) {
    if (page == lastPage) return;

    page++;
  } else if (e.originalEvent.deltaY < 0) {
    if (page == 1) return;

    page--;
  }
  var posTop = (page - 1) * $(window).height();

  $html.animate({ scrollTop: posTop });
});

// 아코디언메뉴 화살표
