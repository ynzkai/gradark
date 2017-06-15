var openPhotoSwipe = function(index) {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  var items = [];
  var portfolio_items = $("#portfolio .items figure");
  portfolio_items.each(function (){
  	var img = $(this).find("img");
  	var height = $(window).height();
  	items.push({src: img.attr("src"), w: height/img.height()*img.width(), h: height});
  });
  
  var options = {
  	index: parseInt(index)-1,
  	bgOpacity: 0.95,
    //showAnimationDuration: 0,
    //hideAnimationDuration: 0
      
  };

  
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();

  $("button.pswp__button.pswp__button--arrow--left").click(function (){ gallery.prev(); });
  $("button.pswp__button.pswp__button--arrow--right").click(function (){ gallery.next(); });
}
