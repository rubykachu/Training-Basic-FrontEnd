$(document).ready(function(){
  var $list_products = $('.list-products');
  var html = '';

  $.each(json, function(type, data) {
    html += '<section class="product-type" id="'+ type +'-type" data-type="'+ type +'">';
      html += '<h1 class="title-page"><span class="title-page__text">'+ type +'</span></h1>'
      html += '<ul class="body__product product">'

      $.each(data, function(index, item) {
        html += item_product(type, index, item.name, item.price, item.image, item.desc)
      });

      html += '</ul>'
    html += '</section>'
    $list_products.html(html);
  });
});
