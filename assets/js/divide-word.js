/***********************************************
 * Divide-Word jQuery plugin
 * This is a free jQuery plugin. Please feel free to use it in your projects.
 * The plugin divide a word into separate spletters 
 * Licensed under MIT
 * @author ynzkai
 * @date: 2017/06/02
 * @version 1.0.0
 * http://
 ***********************************************/
;(function($) {
  var options = {
	speed: 1000,
	spanclass: "letter",
	style: "default",
	strs: []
  };

  var timer;
  var $lines = [];
  var rpos = "399px";
  var lpos = "-399px";

  function letter_in() {
	$line = $lines[0];
	var speed = options.speed;
    for(var j=0; j<$line.length; j++) {
      $line[j].animate({"left": "0px", "opacity": 1}, speed+=30);
    }
  }

  function letter_out() {
	$line = $lines.shift();
	var speed = options.speed;
    for(var j=0; j<$line.length; j++) {
      $line[j].animate({"left": lpos, "opacity": 0}, speed+=30);
      $line[j].animate({"left": rpos}, 0);
    }
	$lines.push($line);
  }

  function letter_boom() {
	$line = $lines.shift();
	var speed = options.speed;
    for(var j=0; j<$line.length; j++) {
      $line[j].animate({"top": (Math.random()-0.5)*600,"left": (Math.random()-0.5)*600, "opacity": 0}, speed+=30);
      $line[j].animate({"top": 0, "left": rpos}, 0);
    }
	$lines.push($line);
  }

  function move_letter() {
	if(options.style == "boom") {
	  letter_boom();
	} else {
	  letter_out();
	}
	letter_in();
  }

  jQuery.fn.extend({
    divide_word: function(opts) {
      $.extend(options, opts);

	  var $inner = $('<div style="position:relative;"></div>');
	  for(var i in options.strs) {
		pos = (i==0) ? 0 : rpos;
		opc = (i==0) ? 1 : 0;
		var letters = options.strs[i].split('');
		var $wraper = $('<p style="position:absolute; z-index:-1; left:0; top:0; width:100%; height:100%;"></p>');
		var $line = [];
		for(var j in letters) {
			var $span = $('<span class="'+options.spanclass+'" style="opacity:'+opc+'; position:relative; left:'+pos+';">'+letters[j]+'</span>');
			$wraper.append($span);
			$line.push($span);
		}
		$lines.push($line);
		$inner.append($wraper);
	  }
	  $(this).append($inner);

	  timer = setInterval(move_letter, options.speed * 2.5);

      return this;
    },

	stop_animate: function() {
	  clearInterval(timer);
	},
	resume_animate: function() {
	  timer = setInterval(move_letter, options.speed * 2.5);
	}
  });

})(jQuery);
