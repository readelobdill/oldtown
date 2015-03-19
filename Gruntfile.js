module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
       srcCSS: {
         src: [
           'src/sass/*.scss',
         ],
         dest: 'src/style.css',
       },
       scriptsJS: {
         src: [
           'src/scripts/*.js'
         ],
         dest: 'src/scripts.js',
       },
       libsJS: {
         src: [
           'src/libs/*.js'
         ],
         dest: 'src/libs.js',
       }
     },
     htmlmin: {                                     // Task
       build: {                                      // Target
         options: {                                 // Target options
           removeComments: true,
           collapseWhitespace: true
         },
         files: {                                   // Dictionary of files
           'build/index.html': 'src/index.html'
         }
       }
     },
     uglify: {
       buildScripts: {
         src: 'src/scripts/*.js',
         dest: 'build/scripts.js'
       },
       buildLibs: {
         src: 'src/libs/*.js',
         dest: 'build/libs.js'
       }
     },
    sass: {
      build: {
        options: {
          style: 'compressed',
          sourcemap: 'none'
        },
        files: {
          'build/style.css': 'src/style.css'
        }
      },
      src: {
        options: {
          style: 'expanded',
          sourcemap: 'none'
        },
        files: {
          'src/style.css': 'src/style.css'
        }
      }
    },
    watch: {
      js: {
        files: ['src/scripts/*.js'],
        tasks: ['concat:libsJS', 'concat:scriptsJS']
      },
      css: {
        files: ['src/sass/*.scss'],
        tasks: ['concat:srcCSS', 'sass:src']
      },
      templates: {
        files: ['src/partials/*.html'],
        tasks: ['ngtemplates:src']
      }
    },
    ngtemplates:{
        build:{
            options:{
                module:'app',         // (Optional) The module the templates will be added to
                htmlmin: { 
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true 
                }
            },
            cwd: 'src/partials/',
            src: '*.html',
            dest:'build/templates.js'
        },
        src:{
            options:{
                base:'src/partials',        // $templateCache ID will be relative to this folder
                module:'app'               // (Optional) The module the templates will be added to
            },
            cwd: 'src/partials/',
            src: '*.html',
            dest: 'src/templates.js'
        }
    },
    connect: {
        src: {
            options: {
                port: 8001,
                keepalive: true,
                base: 'src'
            }
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'htmlmin', 'uglify', 'sass', 'ngtemplates']);

};