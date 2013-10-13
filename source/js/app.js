$(function () {
	var apiKey = "5nRd9seKwrVIy4gMihKwgiMIueZKH6g0";
	$.ajaxPrefilter(function (options, originalOptions, jqXHR) {
		options.url = "https://api.mongolab.com/api/1/databases/monthbook/collections/" +
				options.url + "?apiKey=" + apiKey;
	});

	function deleteEmptyProperties(obj) {
		var nonempty = false;
		for (var prop in obj) {
			if (obj.hasOwnProperty(prop)) {
				var value = obj[prop]
				if (!value) {
					delete obj[prop];
				} else if (typeof value === "object") {
					if (deleteEmptyProperties(value)) {
						nonempty = true;
					} else {
						delete obj[prop];
					}
				} else {
					nonempty = true;
				}
			}
		}
		return nonempty;
	}

	var AboutView = Backbone.View.extend({
		el: "#page",
		render: function () {
			this.$el.html(yr.run("about", {}));
		}
	});

	var MongolabModel = Backbone.Model.extend({
		parse: function(response) {
			response.id = response._id.$oid;
			return response;
		},
		toJSON: function(options) {
			var json = Backbone.Model.prototype.toJSON.apply(this, arguments);
			if (options && options.cleanup) {
				delete json.edit;
				delete json.expanded;
				deleteEmptyProperties(json);
			} else {
				json.cid = this.cid;
			}
			return json;
		}
	});

	var Student = MongolabModel.extend({
		url: function() {
			if (this.isNew()) {
				return "students";
			} else {
				return "students/" + this.id;
			}
		},
		toggle: function() {
			this.set("expanded", !this.get("expanded"));
		}
	});

	var StudentList = Backbone.Collection.extend({
		url: "students",
		model: Student
	});

	var studentList = new StudentList();


	var StudentListView = Backbone.View.extend({
		el: "#page",
		students: studentList,
		newStudentCid: null,
		events: {
			"click .student .avatar, .student .caption": "toggleStudent",
			"click .new":           "newStudent",
			"submit .student-form": "saveStudent",
			"click .cancel":        "cancelEdit",
			"click .edit":          "editStudent",
			"click .delete":        "deleteStudent"
		},
		toggleStudent: function (ev) {
			var cid = $(ev.currentTarget).closest(".student").data("cid");
			this.students.get(cid).toggle();
		},
		newStudent: function (ev) {
			if (!this.newStudentCid) {
				this.$el.find(".float-wrapper .button").addClass("inactive");
				var student = new Student();
				this.newStudentCid = student.cid;
				this.$el.children(".post:first").before("<div data-cid='" +
								student.cid + "'></div>");
				this.students.unshift(student);
				student.set("edit", true);
			}
			return false;
		},
		editStudent: function (ev) {
			var cid = $(ev.currentTarget).closest(".student").data("cid");
			this.students.get(cid).set("edit", true);
			return false;
		},
		deleteStudent: function (ev) {
			var self = this;
			var studentElem = $(ev.currentTarget).closest(".student");
			var student = this.students.get(studentElem.data("cid"));
			student.destroy({
				success:function () {
					self.students.remove(student);
					studentElem.remove();
				}
			});
			return false;
		},
		saveStudent: function (ev) {
			var self = this;
			var data = $(ev.currentTarget).serializeJSON();
			var student = this.students.get(data.cid);
			student.save(data, {
				cleanup: true,
				success: function (student) {
					if (student.cid === self.newStudentCid) {
						self.$el.find(".float-wrapper .button").removeClass("inactive");
						self.newStudentCid = null;
					}
					student.set("edit", false);
					student.set("expanded", true);
				},
				error: function() {
					alert("error!");
				}
			});
			return false;
		},
		cancelEdit: function (ev) {
			var studentElem = $(ev.currentTarget).closest(".student");
			var student = this.students.get(studentElem.data("cid"));
			if (student.cid === this.newStudentCid) {
				this.$el.find(".float-wrapper .button").removeClass("inactive");
				this.newStudentCid = null;
				this.students.remove(student);
				studentElem.remove();
			}
			student.set("edit", false);
			return false;
		},
		initialize: function () {
			var self = this;
			this.students.on("change", function (model) {
				var data = model.toJSON();
				self.$el.children("[data-cid='" + model.cid + "']")
					.replaceWith(yr.run("students", {
						single: true,
						students: data
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

	var Lector = MongolabModel.extend({
		toggle: function() {
			this.set("expanded", !this.get("expanded"));
		}
	});
	var LectorList = Backbone.Collection.extend({
		url: "lectors",
		model: Lector
	});

	var Lecture = MongolabModel.extend({});
	var LectureList = Backbone.Collection.extend({
		url: "lectures",
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
				self.$el.children("[data-cid='" + model.get("id") + "']")
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
	_.bindAll(aboutView, "render");
	var studentListView = new StudentListView();
	_.bindAll(studentListView, "render");
	var lectorListView = new LectorListView();
	_.bindAll(lectorListView, "render");

	var Router = Backbone.Router.extend({
		routes: {
			"":             aboutView.render,
			"students":     studentListView.render,
			"lectors":      lectorListView.render
		}
	});

	var router = new Router();

	Backbone.history.start();
});