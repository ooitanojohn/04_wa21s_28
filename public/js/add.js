// jquery
$(function () {
  $(window).on("scroll", () => {
    // 各 sectionの内容をスクロールでfade on off
    if ($(this).scrollTop() > 1000) {
      $(".introduction > .slide-top").fadeOut(1000);
    } else {
      $(".introduction > .slide-top").fadeIn(1000);
    }
    // scrollLink
    // スクロールによって表示を変更
    if ($(this).scrollTop() > 300) {
      $(".scrolldown span").text("Next. Page");
    } else {
      $(".scrolldown span").text("Click.Scroll");
    }
  });
  // scrollLinkを押すと動的にnextへ移動
  $("#contentsSlider").on("click", () => {
    if ($(this).scrollTop() < 300) {
      var scrollHeight = 1400;
    } else if ($(this).scrollTop() < 1400) {
      var scrollHeight = 2200;
    } else if ($(this).scrollTop() < 2300) {
      var scrollHeight = 3100;
    } else if ($(this).scrollTop() < 3200) {
      var scrollHeight = 4000;
    }
    $("body,html").animate(
      {
        scrollTop: scrollHeight,
      },
      1000
    );
    console.log(1);
    return false;
  });
  // fixedLink
  $("#scrollBtnTop").hide();
  $(window).on("scroll", () => {
    // スクロールが100pxの位置に達したらボタンを表示
    if ($(this).scrollTop() > 100) {
      $("#scrollBtnTop").fadeIn();
    } else {
      $("#scrollBtnTop").fadeOut();
    }
  });
  // トップダウンを押すと動的にトップへ移動
  $("#scrollBtnTop,#scrollBtnTop2").on("click", () => {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      1000
    );
    // 親要素への影響をなくす
    return false;
  });
  // slickImg
  $(".slider").slick({
    dots: true,
    autoplay: true,
    speed: 3000,
  });
});

// modal window 変数
const signUp = document.getElementsByClassName("signUpFadeOut")[0];
const logIn = document.getElementsByClassName("logInFadeOut")[0];
// open
const modalOpen = document.getElementsByClassName("modalBtn");
modalOpen[0].addEventListener("click", () => {
  logIn.classList.remove("logInFadeOut");
  document.body.classList.add("overflow-hidden");
});
modalOpen[1].addEventListener("click", () => {
  signUp.classList.remove("signUpFadeOut");
  document.body.classList.add("overflow-hidden");
});
// modal解除用背景
const modalBg = document.getElementsByClassName("modal_back");
modalBg[1].addEventListener("click", () => {
  logIn.classList.add("logInFadeOut");
  document.body.classList.remove("overflow-hidden");
});
modalBg[0].addEventListener("click", () => {
  signUp.classList.add("signUpFadeOut");
  document.body.classList.remove("overflow-hidden");
});

// modal下部リンク
const toggleLinks = document.getElementsByClassName("loginbtn");
// signUpLink
toggleLinks[1].addEventListener("click", () => {
  logIn.classList.add("logInFadeOut");
  signUp.classList.remove("signUpFadeOut");
  document.body.classList.add("overflow-hidden");
});
// loginLink
toggleLinks[0].addEventListener("click", () => {
  signUp.classList.add("signUpFadeOut");
  logIn.classList.remove("logInFadeOut");
  document.body.classList.add("overflow-hidden");
});
// bottomSignUpLink
toggleLinks[3].addEventListener("click", () => {
  signUp.classList.remove("signUpFadeOut");
  document.body.classList.add("overflow-hidden");
});
