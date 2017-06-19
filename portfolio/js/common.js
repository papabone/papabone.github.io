$(document).ready(function() {
	
	//кнопка sandwiich
	$(".nav_toggle").click(function() {
		$("#sandwich").toggleClass("active");
	});
	
	$(".nav_mnu ul a").click(function() {
		$(".nav_mnu").fadeOut(600);
		$("#sandwich").toggleClass("active");
	});

	$(".nav_toggle").click(function() {
		if ($(".nav_mnu").is(":visible")) {
			$(".nav_mnu").fadeOut(600);
		} else {
			$(".nav_mnu").fadeIn(600);
		};
	});

  //initialize SWIPPER touch-slider
  var pageName = ["Нулевой", "Портфолио", "Навыки", "Главная", "Навыки", "Портфолио"],
   swiperH = new Swiper('.swiper-container-h', {
    // Optional parameters 
    	initialSlide: 2,
    	grabCursor: true,
    	pagination: '.swiper-pagination-h',
    	paginationClickable: true,
    	paginationBulletRender: function (index, className) {
        return '<span class="' + className + '">' + pageName[(index+1)] + '</span>';
      },
      keyboardControl: true,
      threshold: 25,
      speed: 1000
  });
  var swiperV = new Swiper('.swiper-container-v', {
      pagination: '.swiper-pagination-v',
      paginationClickable: true,
      direction: 'vertical',
      mousewheelControl: true,
      keyboardControl: true,
      speed: 500
  });
    var swiperV = new Swiper('.swiper-container-v1', {
      pagination: '.swiper-pagination-v1',
      paginationClickable: true,
      direction: 'vertical',
      mousewheelControl: true,
      keyboardControl: true,
      speed: 1000
  });
  
  //popup form
  $("#contact").click(function() {
    $("#contact-form").addClass("active"),
    $(".swiper-pagination-h").addClass("disactive"),
    $(".disappear").addClass("disactive"),
    swiperH.lockSwipeToNext(),
    swiperH.lockSwipeToPrev();
  });
    //крестик для выхода
  $("#esc").click(function() {
    $("#contact-form").removeClass("active"),
    $(".swiper-pagination-h").removeClass("disactive"),
    $(".disappear").removeClass("disactive"),
      swiperH.unlockSwipeToNext(),
      swiperH.unlockSwipeToPrev();
  });

  //popup img
    //скрыть фоновые блоки
  $("#min_port_dis_03, #min_port_dis_04,#min_port_dis_05, #min_port_dis_08, #min_port_dis_09,#min_port_dis_10, #min_port_dis_11").click(function() {
    $(".swiper-pagination-h").addClass("disactive"),
    $(".swiper-pagination-v").addClass("disactive"),
    $(".swiper-container-v").addClass("disactive"),
    swiperH.lockSwipeToNext(),
    swiperH.lockSwipeToPrev();
  });
    //открыть попап
  $("#min_port_dis_03").click(function() {
    $("#img_port_dis_03").addClass("active")
  });
  
  $("#min_port_dis_04").click(function() {
    $("#img_port_dis_04").addClass("active")
  });
  
  $("#min_port_dis_05").click(function() {
    $("#img_port_dis_05").addClass("active")
  });
  
  $("#min_port_dis_08").click(function() {
    $("#img_port_dis_08").addClass("active")
  });

  $("#min_port_dis_09").click(function() {
    $("#img_port_dis_09").addClass("active")
  });
  
  $("#min_port_dis_10").click(function() {
    $("#img_port_dis_10").addClass("active")
  });
  
  $("#min_port_dis_11").click(function() {
    $("#img_port_dis_11").addClass("active")
  });

  //крестик для выхода
  $(".esc_port_dis").click(function() {
      $("#img_port_dis_03, #img_port_dis_04, #img_port_dis_05").removeClass("active"),
      $("#img_port_dis_08, #img_port_dis_09, #img_port_dis_10,#img_port_dis_11").removeClass("active"),
      $(".swiper-pagination-h").removeClass("disactive"),
      $(".swiper-pagination-v").removeClass("disactive"),
      $(".swiper-container-v").removeClass("disactive"),
      swiperH.unlockSwipeToNext(),
      swiperH.unlockSwipeToPrev();
  });

  //escape для выхода (глобально)
  $(document).keydown(function(e){
    if (e.keyCode == 27){
      $("#img_port_dis_03, #img_port_dis_04, #img_port_dis_05").removeClass("active"),
      $("#img_port_dis_08, #img_port_dis_09, #img_port_dis_10,#img_port_dis_11").removeClass("active"),
      $(".swiper-pagination-h").removeClass("disactive"),
      $(".swiper-pagination-v").removeClass("disactive"),
      $(".swiper-container-v").removeClass("disactive"),
      $("#contact-form").removeClass("active"),
      $(".swiper-pagination-h").removeClass("disactive"),
      $(".disappear").removeClass("disactive"),
      swiperH.unlockSwipeToNext(),
      swiperH.unlockSwipeToPrev();
    }
  });
});






					