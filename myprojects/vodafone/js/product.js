 $(document).ready(function() {
  $('.color-choose input').on('click', function() {
      var Color = $(this).attr('data-image');

      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + Color + ']').addClass('active');
      $(this).addClass('active');
  });

  (function() {
  $('button').on('click', function() {
    $("#action").html("button was clicked");
    console.log("the button was clicked");
  });
})();

});