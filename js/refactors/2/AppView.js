var todos = todos || {};

// Component 1: Manage AppView
(function() {
	'use strict';
	// constants
	var ENTER_KEY = 13;

	function AppView($el) {
		$el.on('keyup', '#new-todo', this.create);
	}

	// create new todo function
	AppView.prototype.create = function (e) {
		console.log('create()');
		var $input = $(e.target);
		var val = $input.val().trim();

		if (e.which !== ENTER_KEY || !val) {
			return;
		}

		var todoInfo = {
			id: (new Date()).getTime(),
			title: val,
			completed: false
		};

		$input.val('');

		var todoItem = new todos.TodoItem(todoInfo);

		$('#todo-list').append(todoItem.render());
	};

	// exports
	todos.AppView = AppView;
}());
