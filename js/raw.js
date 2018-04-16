// 35:00 - 39:00 https://youtu.be/LzrWzs_577k
// Declare namespace. Namespace is a object
var todos = {};

(function() {
	'use strict';
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
				<input class="toggle" type="checkbox" ">\
				<label>' + todoItem.title + '</label>\
				<button class="destroy"></button>\
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
	function toggle(event) {
		var el = event.target;

		$(el).closest('li').toggleClass('completed');
	}

	// exports
	todos.create  = create;
	todos.destroy = destroy;
	todos.toggle  = toggle;
}());

$(document).ready(function(){
	$('#new-todo').on('keyup', todos.create);
	$('#todo-list').on('click', '.destroy', todos.destroy);
	$('#todo-list').on('change', '.toggle', todos.toggle);
});
