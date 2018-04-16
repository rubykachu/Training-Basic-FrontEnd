// constants
var ENTER_KEY = 13;
var ESCAPE_KEY = 27;

// create new todo function
// onkeyup="create(event);"
function create(e) {
	// console.log('create()');
	var $input = $(e.target);
	var val = $input.val().trim();

	if (e.which !== ENTER_KEY || !val) {
		return;
	}

	var todoItem = {
		id: (new Date()).getTime(),
		title: val,
		completed: false
	};

	$input.val('');
	/*jshint multistr:true*/
	var html = '\
	<li class="" data-id="' + todoItem.id + '">\
		<div class="view">\
			<input class="toggle" type="checkbox" onchange="toggle(event); ">\
			<label>' + todoItem.title + '</label>\
			<button class="destroy" onclick="destroy(event);"></button>\
		</div>\
		<input class="edit" value="' + todoItem.title + '">\
	</li>';

	$('#todo-list').append(html);
}

// remove a todo item
function destroy(event) {
	var el = event.target;

	$(el).closest('li').remove();
}

// toggle complete
function toggle( ) {
	var el = event.target;
	$(el).closest('li').toggleClass('completed');
}
