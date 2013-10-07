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

	var studentList = new StudentList();

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
		render: function () {
			var self = this;
			studentList.fetch({
				success: function(studentList) {
					var data = studentList.toJSON();
					data[24].expanded = true;
					self.$el.html(yr.run('students', { students: data }));
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