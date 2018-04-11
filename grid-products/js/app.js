$(document).ready(function() {

  // Scroll sticky navigation
  var top = $('.page-header__nav').offset().top;
  $(window).scroll(function (event) {
    var y = $(this).scrollTop();
    if (y >= top)
      $('.page-header__nav').addClass('fixed');
    else
      $('.page-header__nav').removeClass('fixed');
    $('.page-header__nav').width($('.page-header__nav').parent().width());
  });

  // Handle Logic Navigation
  $('.nav__link').click(function(){
    var $this = $(this),
        type = $this.data('type');

    // active item by event click
    $('.nav__link').removeClass('active');
    $this.addClass('active');

    // show data by product type
    if ( $.inArray(type, product_types()) >= 0 ) {
      $('.product-type').hide();
      $('#' + type + '-type').show();
    }
    else {
      $('.product-type').show();
    }
    return false;
  });

  // Get product type
  function product_types() {
    let type = []
    $.each($('.product-type'), function(index, element){
      type.push($(element).data('type'));
    });
    return type;
  }
});
