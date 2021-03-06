module.exports = function (grunt) {
	grunt.initConfig({
		srcDir: "source",
		tgtDir: "target",

		pkg: grunt.file.readJSON("package.json"),

		env: {
			dev: { ENV: "dev" },
			prod: { ENV: "prod" }
		},

		clean: {
			target: "<%=tgtDir%>/**/*",
			yateobj: "<%=srcDir%>/templates/*.obj",
			afterProd: [
				"<%=tgtDir%>/js/**/*",
				"!<%=tgtDir%>/js/app.min.js"
			]
		},

		copy: {
			css: {
				files: [{
					expand: true,
					cwd: "<%=srcDir%>/css/",
					src: ["**"],
					dest: "<%=tgtDir%>/css/"
				}]
			},
			js: {
				files: [{
					expand: true,
					cwd: "<%=srcDir%>/js/",
					src: ["**"],
					dest: "<%=tgtDir%>/js/"
				}]
			},
			dev: {
				files: [{
					expand: true,
					cwd: "<%=srcDir%>/dev/",
					src: ["**"],
					dest: "<%=tgtDir%>/dev/"
				}]
			},
			img: {
				files: [{
					expand: true,
					cwd: "<%=srcDir%>/img/",
					src: ["**"],
					dest: "<%=tgtDir%>/img/"
				}]
			},
			yateRuntime: {
				files: [{
					src: "node_modules/yate/lib/runtime.js",
					dest: "<%=tgtDir%>/js/yate/runtime.js"
				}]
			}
		},

		cssmin: {
			css: {
				src: "<%=srcDir%>/css/*",
				dest: "<%=tgtDir%>/css/main.min.css"
			}
		},

		uglify: {
			js: {
				src: [
					"<%=srcDir%>/js/jquery-1.10.2.js",
					"<%=srcDir%>/js/json2.js",
					"<%=srcDir%>/js/jquery.serializeJSON.js",
					"<%=srcDir%>/js/underscore.js",
					"<%=srcDir%>/js/backbone.js",
					"<%=srcDir%>/js/*",
					"<%=tgtDir%>/js/yate/runtime.js",
					"<%=tgtDir%>/js/yate/*.js",
					"!<%=tgtDir%>/js/app.min.js"
				],
				dest: "<%=tgtDir%>/js/app.min.js"
			}
		},

		preprocess: {
			html : {
				src : "<%=srcDir%>/index.html",
				dest : "<%=tgtDir%>/index.html"
			}
		},

		yate: {
			templates: {
				dest: '<%=tgtDir%>/js/yate/',
				src: '<%=srcDir%>/templates/*.yate',
				ext: '.js',
				expand: true,
				flatten: true
			}
		}

	});

	var tasks = ["grunt-contrib-clean", "grunt-contrib-copy", "grunt-env", "grunt-preprocess", "grunt-yate",
			"grunt-contrib-cssmin", "grunt-contrib-uglify"];

	for (var i = 0; i < tasks.length; i++) {
		grunt.loadNpmTasks(tasks[i]);
	}

	grunt.registerTask("dev", [
		"clean:target", "env:dev", "preprocess:html", "yate", "copy:yateRuntime",
		"copy:css", "copy:js", "copy:dev", "copy:img", "clean:yateobj"
	]);
	grunt.registerTask("prod", [
		"clean:target", "env:prod", "preprocess:html", "yate", "copy:yateRuntime",
		"cssmin:css", "uglify:js", "copy:img", "clean:yateobj", "clean:afterProd"
	]);
};


