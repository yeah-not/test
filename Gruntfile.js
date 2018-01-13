"use strict";

module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-browser-sync");
  grunt.loadNpmTasks("grunt-postcss");

  grunt.initConfig({


    less: {
      styles: {
        files: {
          "css/style.css": "less/style.less"
        }
      }
    },

    postcss: {
      styles: {
        options: {
          processors: [
            require("autoprefixer")({browsers: ["last 3 versions"]}),
          ]
        },
        src: "css/style.css"
      }
    },

    browserSync: {
      server: {
        bsFiles: {
          src: [
            "*.html",
            "css/*.css"
          ]
        },
        options: {
          server: "./",
          watchTask: true,
          notify: false,
          open: true,
          cors: true,
          ui: false
        }
      }
    },

    watch: {
      html: {
        files: ["*.html"],
      },
      styles: {
        files: ["less/**/*.less"],
        tasks: ["build"]
      }
    }
  });

  grunt.registerTask("serve", ["browserSync", "watch"]);
  grunt.registerTask("build", ["less", "postcss"]);

};
