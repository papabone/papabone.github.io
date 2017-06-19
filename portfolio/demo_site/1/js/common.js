$(document).ready(function() {
	
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
});
					