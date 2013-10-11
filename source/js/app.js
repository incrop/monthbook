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
		students: new StudentList(),
		events: {
			"click .student .avatar, .student .caption": "toggleStudent"
		},
		toggleStudent: function (ev) {
			var id = $(ev.currentTarget).closest(".student").data("id");
			this.students.get(id).toggle();
		},
		initialize: function() {
			var self = this;
			this.students.on("change", function (model) {
				self.$el.children("[data-id='" + model.get("id") + "']")
					.replaceWith(yr.run("students", { 
						single: true,
						students: model.toJSON() 
					}));
			});
		},
		render: function () {
			var self = this;
			this.students.fetch({
				success: function(studentList) {
					self.$el.html(yr.run("students", {
						students: studentList.toJSON()
					}));
				}
			});
		}
	});

	var Lector = Backbone.Model.extend({
		toggle: function() {
			this.set("expanded", !this.get("expanded"));
		}
	});
	var LectorList = Backbone.Collection.extend({
		url: "data/lectors.json",
		model: Lector
	});

	var Lecture = Backbone.Model.extend({});
	var LectureList = Backbone.Collection.extend({
		url: "data/lectures.json",
		model: Lecture
	});

	var LectorListView = Backbone.View.extend({
		el: "#page",
		lectors: new LectorList(),
		lectures: new LectureList(),
		events: {
			"click .lector .avatar, .lector .caption": "toggleLector"
		},
		toggleLector: function (ev) {
			var id = $(ev.currentTarget).closest(".lector").data("id");
			this.lectors.get(id).toggle();
		},
		initialize: function() {
			var self = this;
			this.lectors.on("change", function (model) {
				self.$el.children("[data-id='" + model.get("id") + "']")
						.replaceWith(yr.run("lectors", {
							single: true,
							lectors: model.toJSON(), 
							lectures: self.lectures.toJSON()
						}));
			});
		},
		render: function () {
			var self = this;
			$.when(
				this.lectors.fetch(),
				this.lectures.fetch()
			).done(function () {
				self.$el.html(yr.run("lectors", {
					lectors: self.lectors.toJSON(),
					lectures: self.lectures.toJSON()
				}));
			});
		}
	});

	var aboutView = new AboutView();
	var studentListView = new StudentListView();
	var lectorListView = new LectorListView();

	var Router = Backbone.Router.extend({
		routes: {
			"": "about",
			"students": "students",
			"lectors": "lectors"
		},
		about: function () {
			aboutView.render();
		},
		students: function () {
			studentListView.render();
		},
		lectors: function () {
			lectorListView.render();
		}
	});

	var router = new Router();

	Backbone.history.start();
});