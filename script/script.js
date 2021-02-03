$(function(){
  //ハンバーガーメニュー
  document.getElementById("menuButton").addEventListener('click',function() {
    this.classList.toggle("active");
    document.getElementById("nav").classList.toggle("active");
    document.getElementById("mask").classList.toggle("active");
  })
  //アコーディオン
  $('#question dt').on('click',function() {
    $(this).next().slideToggle();
    $(this).toggleClass('active');
  })

  //スライダー
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      600: {
        slidesPerView: '2',
        spaceBetween: 60
      },
      830: {
        slidesPerView: '4',
        spaceBetween: 60
      },
    },
  })

  //AOS
  AOS.init();

  // バリデーション
  const $submitBtn = $('#js-submit')
  $('#contact-form input,#contact-form textarea').on('change', function () {
    if (
      $('#contact-form input[type="text"]').val() !== "" &&
      $('#contact-form input[type="email"]').val() !== "" &&
      $('#contact-form input[type="checkbox"]').val() !== "" &&
      $('#contact-form #check-box').prop('checked') === true
    ) {
      $submitBtn.prop('disabled', false);
    } else {
      $submitBtn.prop('disabled', true);
    }
  });

  $('#contact-form').submit(function (event) {
    var formData = $('#contact-form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSde_mt_gsf5_TcsE-vvm_CODRPJ_CbsV9BiyQNI50JNg-fGUw/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".end-message").slideDown();
          $(".submit-btn").fadeOut();
          // window.location.href = "thanks.html";
        },
        200: function () {
          $(".false-message").slideDown();
        }
      }
    });
    event.preventDefault();
  });
});