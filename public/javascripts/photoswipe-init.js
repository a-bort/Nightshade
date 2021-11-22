var openPhotoSwipe = function(i){
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = window.galleryJson; // defined in the gallery ejs file

  // define options (if needed)
  var options = {
      // optionName: 'option value'
      // for example:
      index: i
  };
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  // Initializes and opens PhotoSwipe
  gallery.init();
};

//openPhotoSwipe();

$("a.gallery-link").on("click", function(e){
  e.preventDefault();
  var index = parseInt($(e.currentTarget).attr("data-index"));
  console.log(index);

  openPhotoSwipe(index);
});
