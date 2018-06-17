var user_ids_in_chatbox = [];
const ENTER_CODE = 13

$(document).ready(function(){
  // Style scroll
  $.mCustomScrollbar.defaults.axis="y";
  $("#js-wall-wrapper").mCustomScrollbar({theme:"rounded-dark"});

  // Autosize textarea
  $(document).on('focus', 'textarea', function(e){ autosize(e.target); })

  // Get width sidebar friend
  var width_sidebar_friend = $('.side-friends').outerWidth();

  // Open chatbox
  $('.js-chatlist-people').on('click', function(){
    var username = $(this).data('name'),
        user_id = $(this).data('id');

    // if user_id isset
    if ($.inArray(user_id, user_ids_in_chatbox) != -1) {
      return false;
    }
    user_ids_in_chatbox.push(user_id);

    chatbox = render_chatbox(username, user_id)
    $('.chat-wrapper').append(chatbox);

    // Scroll to bottom
    $panel_body = chatbox.children('.panel-content').children('.panel-body');
    $panel_body.scrollTop($('.js-chatbox-body')[0].scrollHeight);

    displayChatBox();
    return false;
  });

  // Remove chatbox
  $(document).on('click', '.chat-remove', function() {
    var $this = $(this),
        id = $this.data('id'),
        $chatbox = $('#chatbox-' + id) ;
    $chatbox.remove();
    user_ids_in_chatbox.splice($.inArray(id, user_ids_in_chatbox), 1);

    displayChatBox();
    return false;
  });

  // Toggle chatbox
  $(document).on('click', '.js-chatbox-head', function(){
    var $this = $(this),
        $chatbox = $this.parent(),
        height_heading = $this.outerHeight(),
        height_chatbox = $chatbox.outerHeight(),
        bottom = height_chatbox - height_heading

    if ( parseInt($chatbox.css('bottom')) < 0 ) {
      $chatbox.css('bottom', 0).removeClass('bg-panel-chat--hide')
    } else {
      $chatbox.css('bottom', '-' + bottom + 'px').addClass('bg-panel-chat--hide');
    }
  });

  // Send message when enter textarea
  $(document).on('keypress', '.js-chatbox-editor' , function(e) {
    if (e.keyCode == ENTER_CODE && !e.shiftKey) {
      var $this = $(this),
          message = $this.val();

      // Reset message
      $this.val('');

      if(message.trim().length != 0){
        var $panel_body = $this.closest('.panel-content').children('.panel-body');
        $panel_body.append( render_message_chatbox('', message) );
        $panel_body.scrollTop($('.js-chatbox-body')[0].scrollHeight);
      }
      return false;
    }
  });


  function displayChatBox(){
    var distance = 10,
        limit = 4, // limit chatbox display on screen
        i = $('.side-friends').outerWidth() + distance, // start position
        j = $('.panel-chat').outerWidth() + distance;  //next position

    $.each( user_ids_in_chatbox, function(index, value) {
      if( index < limit ){
        $('#chatbox-' + value).css("right", i);
        $('#chatbox-' + value).show();
        i = i + j;
      } else{
        $('#chatbox-' + value).hide();
      }
    });
  }

  function render_chatbox(username, user_id) {
    html = "\
      <div class='panel panel-chat' id='chatbox-"+ user_id +"' style='right: 200px'> \
        <div class='panel-heading bg-gradient js-chatbox-head'> \
          <a href='#' class='chat-username'><span class='friend_activity'></span><span>"+ username +"</span></a> \
          <a href='#' class='chat-remove' data-id='"+ user_id +"'><i class='glyphicon glyphicon-remove'></i></a> \
        </div> \
        <div class='panel-content'> \
          <div class='panel-body js-chatbox-body'> \
            <div class='chat-message'> \
              <img src='images/profile.jpg' class='avatar'/> \
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora aut porro quidem corrupti molestias voluptates, dolor, impedit at perspiciatis reprehenderit, aliquid molestiae fuga odio alias dolorum earum suscipit repellat laboriosam?</span> \
            </div> \
            <div class='chat-message your-message'> \
              <span>Lorem ipsum</span> \
              <img src='images/profile.jpg' class='avatar'/> \
            </div> \
            <div class='chat-message your-message'> \
              <span>Dolor \
              sit amet</span> \
              <img src='images/profile.jpg' class='avatar'/> \
            </div> \
            <div class='chat-message'> \
              <img src='images/profile.jpg' class='avatar'/> \
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora aut porro quidem corrupti molestias voluptates, dolor, impedit at perspiciatis reprehenderit, aliquid molestiae fuga odio alias dolorum earum suscipit repellat laboriosam?</span> \
            </div> \
          </div> \
          <div class='panel-footer'> \
            <textarea name='message' class='form-control js-chatbox-editor' placeholder='Nhập tin nhắn...'></textarea> \
          </div> \
        </div> \
      </div> \
    "
    return $(html);
  }

  function render_message_chatbox(avatar, message) {
    html = "\
      <div class='chat-message your-message'> \
        <img src='images/profile.jpg' class='avatar'/> \
        <span>"+ message +"</span> \
      </div> \
    "
    return $(html);
  }
});
