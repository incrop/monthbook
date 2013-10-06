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
				expand: true,
				flatten: true,
				src: "<%=srcDir%>/css/*",
				dest: "<%=tgtDir%>/css/"
			},
			yateRuntime: {
				expand: true,
				flatten: true,
				src: "node_modules/yate/lib/runtime.js",
				dest: "<%=tgtDir%>/js/"
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
					"<%=tgtDir%>/js/runtime.js",
					"<%=tgtDir%>/js/*.js",
					"!<%=tgtDir%>/js/app.min.js",
					"<%=srcDir%>/js/*"
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
				dest: '<%=tgtDir%>/js/',
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
		"clean:target", "env:dev", "preprocess:html", "yate", "copy:yateRuntime", "copy:css", "clean:yateobj"
	]);
	grunt.registerTask("prod", [
		"clean:target", "env:prod", "preprocess:html", "yate", "copy:yateRuntime",
		"cssmin:css", "uglify:js", "clean:yateobj", "clean:afterProd"
	]);
};


