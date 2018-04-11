$(document).ready(function() {
  var cartArray = {}
      max_item = 4;

  $(document).on('click', '.product__compare', function(e) {
    var $this   = $(this),
        $figure = $this.closest('.product__figure'),
        type    = $this.data('type'),
        index   = $this.data('index'),
        id      = parseInt(e.timeStamp)
        html    = '';

    if (object_length(cartArray) < max_item) {
      // select only one
      if ( $figure.children('.product__figure--selected').length < 1 ) {
        // Handle select item to compare products &check;
        $figure.prepend('<div class="product__figure--selected" id="'+ id +'"></div>');
        $this.addClass('text--disable');

        // Push data into object
        cartArray[id] = json[type][index];
      }
    }
    else {
      alert("You can only select 4 items")
    }

    // Show data on web
    show_list_items();

    return false;
  });

  // Handle unselected item
  $(document).on('click', '.product__figure--selected', function() {
    var $this = $(this),
        $product__compare = $this.parent().find('.product__compare')
        id = $this.prop('id'),
        html = '';

    $product__compare.removeClass('text--disable');
    $this.remove();
    delete cartArray[id];
    show_list_items();
  });

  function show_list_items() {
    var html = '';
    html += '<ul class="body__product product modal--white__product">';
      html += fill_data_in_modal_compare()
    html += '</ul>';
    $('.modal-compare__result').html(html);
  }

  function fill_data_in_modal_compare() {
    let result = ''
    $.each(cartArray, function(key, data) {
      result += item_product('', key, data.name, data.price, data.image, data.desc, false)
    });
    return result;
  }

  // Show modal white
  $('#compare-products').click(function() { show_modal_compare(); });

  // Off modal white
  $('#modal--white-btn-close').click(function() { hide_modal_compare() });

  // Show modal compare
  function show_modal_compare() {
    // fixed_body();
    $('#modal-compare').css('top', 0, function() {
      $(this).removeClass('modal--effect-uptodown')
    });
  }

  // Hide modal compare
  function hide_modal_compare() {
    // unfixed_body();
    $('#modal-compare').css('top', -1000, function() {
      $(this).addClass('modal--effect-uptodown')
    });
  }
});
