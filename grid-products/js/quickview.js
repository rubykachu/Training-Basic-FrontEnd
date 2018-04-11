$(document).ready(function(){
  var $modal_black = $('.modal--black'),
      $modal__title = $('.modal__title'),
      $modal__price = $('.modal__price'),
      $modal__description = $('.modal__description'),
      prefix__price = $('.modal__price').data('prefix-price');

  $(document).on('click', '.product__quick-view', function() {
    var $this = $(this),
        product_name = $this.closest('.product__item').find('.product__name a').text().trim(),
        product_price = $this.closest('.product__item').find('.product__price').text().trim(),
        product_description = $this.closest('.product__item').find('.product__description').text().trim();

    // Fill in a form
    $modal__title.text(product_name);
    $modal__price.text(prefix__price + ': ' + product_price);
    $modal__description.text(product_description);

    // Show modal
    show_modal();

  });

  // CLOSE MODAL
  $(document).on('click', '#modal__close', function() {
    hide_modal();
  });

  $(document).on('keydown', function(e) {
    if(e.keyCode == 27) {
      hide_modal();
    }
  });

  function show_modal() {
    // fixed_body();
    $modal_black.fadeIn().css('display', 'flex').removeClass('modal--off');
  }

  function hide_modal(){
    // unfixed_body();
    $modal_black.fadeOut().addClass('modal--off')
  }
});
