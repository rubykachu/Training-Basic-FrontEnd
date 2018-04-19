var todos = todos || {};

// Component 2: Manage event item
(function() {
	'use strict';
	function TodoItem(options) {
		this.options = options
	}

	// Render item. Return object html
	TodoItem.prototype.render = function(event) {
		/*jshint multistr:true*/
		var html = '\
		<li class="" data-id="' + this.options.id + '">\
			<div class="view">\
				<input class="toggle" type="checkbox" ">\
				<label>' + this.options.title + '</label>\
				<button class="destroy"></button>\
			</div>\
			<input class="edit" value="' + this.options.title + '">\
		</li>';

		this.$item = $(html);
		// Cần phải truyền bind(this), để có thể sử dụng this trong các function của prototype
		this.$item.on('click', '.destroy', this.destroy.bind(this));
		this.$item.on('change', '.toggle', this.toggle.bind(this));
		return this.$item;
	}

	// Remove a todo item
	TodoItem.prototype.destroy = function(event) {
		// var el = event.target;
		// $(el).closest('li').remove();
		// Nếu khong bind(this) thì this lúc này là element button
		this.$item.remove();
	}

	// Toggle complete
	TodoItem.prototype.toggle = function(event) {
		// var el = event.target;
		// $(el).closest('li').toggleClass('completed');
		this.$item.toggleClass('completed');
	}

	// exports
	todos.TodoItem = TodoItem;
}());
