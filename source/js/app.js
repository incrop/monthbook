$(function () {


	var Student = Backbone.Model.extend({
		toggle: function() {
			this.set("expanded", !this.get("expanded"));
		}
	});

	var StudentList = Backbone.Collection.extend({
		url: "data/students.json",
		model: Student
	});

	var StudentView = Backbone.View.extend({
		el: ".student",
		initialize: function() {
			this.listenTo(this.model, "change", this.render);
		},
		render: function () {
			self.$el.html(yr.run('students', { students: this.model }));
		}
	});

	var StudentListView = Backbone.View.extend({
		el: "#content",
		collection: new StudentList(),
		events: {
			"click .student .avatar, .student .caption": "toggleStudent"
		},
		toggleStudent: function (ev) {
			var id = $(ev.currentTarget).closest(".student").data("id");
			this.collection.get(id).toggle();
		},
		initialize: function() {
			var self = this;
			this.collection.on("change", function (model) {
				self.$el.children("[data-id='" + model.id + "']")
					.replaceWith(yr.run("students", { single: true, students: model.toJSON() }));
			});
		},
		render: function () {
			var self = this;
			this.collection.fetch({
				success: function(studentList) {
					var data = studentList.toJSON();
					data[24].expanded = true;
					self.$el.html(yr.run("students", { students: data }));
				}
			});
		}
	});

	var StudentPost = Backbone.View.extend({

		render: function () {
			this.$el.html(yr.run('students', { students: this.model.toJSON() }));
		},

		toggle: function() {
			this.model.toggle();
		}
	});

	var Router = Backbone.Router.extend({
		routes: {
			"": "students"
		}
	});


	var studentListView = new StudentListView();

	var router = new Router();
	router.on("route:students", function() {
		studentListView.render();
	});

	Backbone.history.start();
});