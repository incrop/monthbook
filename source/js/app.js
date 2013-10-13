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
		render: function () {
			this.$el.html(yr.run("about", {}));
			$("#page").children().hide();
			this.$el.show();
		},
		initialize: function () {
			this.$el.hide().appendTo($("#page"));
		}
	});

	var BaseModel = Backbone.Model.extend({
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
		},
		toggle: function() {
			this.set("expanded", !this.get("expanded"));
		},
		url: function() {
			if (this.isNew()) {
				return this.mongoCollection;
			} else {
				return this.mongoCollection + "/" + this.id;
			}
		}
	});

	var BaseCollection = Backbone.Collection.extend({
		url: function () {
			return this.model.prototype.mongoCollection;
		}
	});

	var Student = BaseModel.extend({
		mongoCollection: "students"
	});

	var StudentList = BaseCollection.extend({
		model: Student
	});

	var BaseListView = Backbone.View.extend({
		events: {
			"click .post .fold-handle": "toggleItem",
			"click .new":               "newItem",
			"click .edit":              "editItem",
			"click .cancel":            "cancelEdit",
			"submit .edit-form":        "saveItem",
			"click .delete":            "deleteItem"
		},
		toggleItem: function (ev) {
			var cid = $(ev.currentTarget).closest(".post").data("cid");
			this.collection.get(cid).toggle();
		},
		initialize: function () {
			var self = this;
			this.collection.on("change", function (model) {
				var data = model.toJSON();
				self.$el.children("[data-cid='" + model.cid + "']")
						.replaceWith(yr.run(
								self.templatingModule,
								self.modelRenderData(model)
						));
			});
			this.$el.hide().appendTo($("#page"));
		},
		fetchData: function () {
			return this.collection.fetch();
		},
		render: function () {
			var self = this;
			self.$el.html(yr.run(
					self.templatingModule,
					self.collectionRenderData()
			));
			this.$el.children(":first").find(".loader").show();
			$("#page").children().hide();
			this.$el.show();
			this.fetchData().done(function() {
				self.$el.html(yr.run(
						self.templatingModule,
						self.collectionRenderData()
				));
			});
		},
		newItem: function (ev) {
			if (!this.newCid) {
				this.$el.find(".float-wrapper .new.button").addClass("inactive");
				var model = new this.ModelClass();
				this.newCid = model.cid;
				this.$el.children(".post:first")
						.before("<div data-cid='" + model.cid + "'></div>");
				this.collection.unshift(model);
				model.set("edit", true);
			}
			return false;
		},
		editItem: function (ev) {
			var cid = $(ev.currentTarget).closest(".post").data("cid");
			this.collection.get(cid).set("edit", true);
			return false;
		},
		saveItem: function (ev) {
			var self = this;
			var data = $(ev.currentTarget).serializeJSON();
			var model = this.collection.get(data.cid);
			self.$el.children("[data-cid='" + model.cid + "']").find(".loader").show();
			model.save(data, {
				cleanup: true,
				success: function (model) {
					if (model.cid === self.newCid) {
						self.$el.find(".float-wrapper .button").removeClass("inactive");
						self.newCid = null;
					}
					model.set("edit", false);
					model.set("expanded", true);
				}
			});
			return false;
		},
		cancelEdit: function (ev) {
			var modelElem = $(ev.currentTarget).closest(".post");
			var model = this.collection.get(modelElem.data("cid"));
			if (model.cid === this.newCid) {
				this.$el.find(".float-wrapper .button").removeClass("inactive");
				this.newCid = null;
				this.collection.remove(model);
				modelElem.remove();
			}
			model.set("edit", false);
			return false;
		},
		deleteItem: function (ev) {
			var self = this;
			var modelElem = $(ev.currentTarget).closest(".post");
			var model = this.collection.get(modelElem.data("cid"));
			self.$el.children("[data-cid='" + model.cid + "']").find(".loader").show();
			model.destroy({
				success:function () {
					self.collection.remove(model);
					modelElem.remove();
				}
			});
			return false;
		}
	});


	var StudentListView = BaseListView.extend({
		templatingModule: "students",
		ModelClass: Student,
		modelRenderData: function (model) {
			return {
				single: true,
				students: model.toJSON()
			}
		},
		collectionRenderData: function () {
			return {
				students: this.collection.toJSON()
			}
		}
	});

	var Lector = BaseModel.extend({
		mongoCollection: "lectors"
	});

	var LectorList = BaseCollection.extend({
		model: Lector
	});

	var Lecture = BaseModel.extend({
		mongoCollection: "lectures"
	});

	var LectureList = BaseCollection.extend({
		model: Lecture
	});

	var LectorListView = BaseListView.extend({
		templatingModule: "lectors",
		ModelClass: Lector,
		lectures: new LectureList(),
		modelRenderData: function (model) {
			return {
				single: true,
				lectors: model.toJSON(),
				lectures: this.lectures.toJSON()
			}
		},
		collectionRenderData: function () {
			return {
				lectors: this.collection.toJSON(),
				lectures: this.lectures.toJSON()
			}
		},
		fetchData: function () {
			return $.when(
				BaseListView.prototype.fetchData.apply(this, arguments),
				this.lectures.fetch()
			)
		}
	});

	var aboutView = new AboutView();
	var studentListView = new StudentListView({
		collection: new StudentList()
	});
	studentListView.render();
	var lectorListView = new LectorListView({
		collection: new LectorList()
	});

	var Router = Backbone.Router.extend({
		routes: {
			"":         "about",
			"students": "students",
			"lectors":  "lectors"
		}
	});

	var router = new Router();
	router.on("route:about", function () {
		aboutView.render();
	});
	router.on("route:students", function () {
		studentListView.render();
	});
	router.on("route:lectors", function () {
		lectorListView.render();
	});

	Backbone.history.start();
});