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

  function reloacate_img() {
    resize_background_img();
    resize_background_img(); // call this function 2 times explicitly
  }

  reloacate_img();
  $(window).resize(function(){
	reloacate_img();
  });

  // divide words
  $("#home #slide-text").divide_word({strs: ["Web developer", "Web designer", "Mobile developer"], style: "boom"});
  $("#home #center-panel").mouseenter(function (){
	$("#home #slide-text").stop_animate();
  });
  $("#home #center-panel").mouseleave(function (){
	$("#home #slide-text").resume_animate();
  });

  // navbar button
  $("#home header #navbar #button").click(function (){
	var $navbar = $("#home header #navbar");
	if($navbar.hasClass("expand_menu")) {
	  $navbar.removeClass("expand_menu");
	} else {
	  $navbar.addClass("expand_menu");
	}

  });


  // scroll
  $("#links .home").click(function() { $(document).scrollTo("#home", 1000); });
  $("#links .about").click(function() { $(document).scrollTo("#about", 1000); });
  $("#home #down-button").click(function() { $(document).scrollTo("#about", 1000); });
  $("#links .services").click(function() { $(document).scrollTo("#services", 1000); });
  $("#links .portfolio").click(function() { $(document).scrollTo("#portfolio", 1000); });
  $("#links .blog").click(function() { $(document).scrollTo("#blog", 1000); });
  $("#links .contact").click(function() { $(document).scrollTo("#contact", 1000); });

  // waypoints navbar
  var waypoints = $("#about").waypoint({
	offset: 50, 
    handler: function(direction) {
	  if(direction == "down") {
	    $("#home header").addClass("fixed");
	  } else {
	    $("#home header").removeClass("fixed");
	  }
    }
  });
  // waypoints skills
  var waypoints = $("#about #skills").waypoint({
	offset: "90%", 
    handler: function(direction) {
	  if(direction == "down") {
        var $bars = $("#about #skills .skill .front-bar");
        var $circles = $("#about #skills .skill .front-bar .circle");
        $bars.css("width", 0);
        $circles.css("display", "none");
	    $bars.each(function(){
	      var width = parseInt($(this).find(".percent").data("percent"));
	      $(this).animate({"width": width+"%"}, 1000, "swing", function() {
	        $circles.fadeIn("fast");
	      });
	    });
	  }
    }
  });

  // skill percents
  $("#about #skills .skill .percent").each(function (){
	$(this).text($(this).data("percent"));
  });
  $("#about #skills .skill .front-bar").each(function (){
	var width = parseInt($(this).find(".percent").data("percent"));
	$(this).css("width", width+"%");
  });
});
