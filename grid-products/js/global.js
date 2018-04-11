var $body = $('body');

function item_product(type, index, name, price = '', image = '', desc = '', controls = true) {
  let item_html = '';

  item_html += '<li class="product__item">'
    item_html += '<figure class="product__figure">'

      item_html += '<div class="product__image">'
        item_html += '<img src="'+ image +'" alt="">'

      if (controls == true) {
        item_html += '<div class="product__control">'
          item_html += '<button class="product__quick-view product--btn">Quickview</button>&#9679;'
          item_html += '<button class="product__compare product--btn" data-type="'+ type +'" data-index="'+ index +'">Compare</button>'
        item_html += '</div>'
      }

      item_html += '</div>'

      item_html += '<figcaption>'
        item_html += '<p class="product__name"><a href="">'+ name +'</a></p>'
        item_html += '<p class="product__price">'+ format_currency(price) +' VND</p>'
        item_html += '<div class="product__description">'+ desc +'</div>'
      item_html += '</figcaption>'

    item_html += '</figure>'
  item_html += '</li>'

  return item_html;
}

function format_currency(price)
{
	price += '';
	x = price.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? ',' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + '.' + '$2');
	}
	return x1 + x2;
}

function object_length(objects) {
  return Object.keys(objects).length
}

function fixed_body() {
  $body.addClass('fixed');
}

function unfixed_body() {
  $body.removeClass('fixed');
}
