$(document).ready(function () {

  // resize img
  function resize_background_img() {
	var $img = $("#home #background img");
	var width = $(window).width();
	var height = $(window).height();
	var img_width = $img.width();
	var img_height = $img.height();
	var img_left = (width-img_width)/2 + "px";
	var img_top = (height-img_height)/2 + "px";
	if(img_width/img_height < width/height) {
	  img_width = "100%";
	  img_height = "auto";
	} else {
	  img_width = "auto";
	  img_height = "100%";
	}
	$img.css({"width": img_width, "height": img_height, "left": img_left, "top": img_top});
  }
  resize_background_img();
  resize_background_img(); // call this function 2 times explicitly
  $(window).resize(function(){
	resize_background_img();
  });

  // divide words
  $("#home #slide-text").divide_word({strs: ["Web developer", "Web designer", "Mobile developer"], style: "boom"});
  $("#home #center-panel").mouseenter(function (){
	$("#home #slide-text").stop_animate();
  });
  $("#home #center-panel").mouseleave(function (){
	$("#home #slide-text").resume_animate();
  });

  // navbar
  $("#home header #navbar #button").click(function (){
	var $navbar = $("#home header #navbar");
	var $navbtn = $("#home header #navbar #button");
	if($navbar.hasClass("expand_menu")) {
		$navbar.removeClass("expand_menu");
	} else {
		$navbar.addClass("expand_menu");
	}

  });
});
