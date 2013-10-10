$(function () {

	var AboutView = Backbone.View.extend({
		el: "#page",
		render: function () {
			this.$el.html(yr.run("about", {}));	
		}
	});

	var Student = Backbone.Model.extend({
		toggle: function() {
			this.set("expanded", !this.get("expanded"));
		}
	});

	var StudentList = Backbone.Collection.extend({
		url: "data/students.json",
		model: Student
	});

	var StudentListView = Backbone.View.extend({
		el: "#page",
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
				self.$el.children("[data-id='" + model.get("id") + "']")
					.replaceWith(yr.run("students", { students: model.toJSON() }));
			});
		},
		render: function () {
			var self = this;
			this.collection.fetch({
				success: function(studentList) {
					self.$el.html(yr.run("students", {
						header: "Список студентов",
						students: studentList.toJSON()
					}));
				}
			});
		}
	});

	var aboutView = new AboutView();
	var studentListView = new StudentListView();

	var Router = Backbone.Router.extend({
		routes: {
			"": "about",
			"students": "students"
		},
		about: function () {
			aboutView.render();
		},
		students: function () {
			studentListView.render();
		}
	});

	var router = new Router();

	Backbone.history.start();
});