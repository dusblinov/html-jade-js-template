module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          sourceMap: true
        },
        files: {
          "./public/assets/css/main.css": "src/less/main.less"
        }
      }
    },
    jade: {
      release: {
        options: {
          pretty: true
        },
        files: [{
          cwd: "src/jade",
          src: "*.jade",
          dest: "src/prepage",
          expand: true,
          ext: ".html"
        }]
      }
    },
    posthtml: {
      options: {
        use: [
          require('posthtml-bem')({
            elemPrefix: '__',
            modPrefix: '--',
            modDlmtr: '-'
          })

        ]
      },
      build: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'src/prepage/',
          src: ['*.html'],
          dest: 'public/page/'
        }]
      }
    },
    concat: {
      dist: {
        src: ['src/js/lib/*.js', 'src/js/modules/*.js', 'src/js/app.js'],
        dest: 'src/js/temp/dobroserdie.js'
      }
    },
    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015']
      },
      dist: {
        files: {
          'public/assets/js/dobroserdie.js': 'src/js/temp/dobroserdie.js'
        }
      }
    },
    watch: {
      scripts: {
        files: ['src/jade/*.jade', 'src/jade/*/*.jade', 'src/less/*.less', 'src/less/*/*.less', 'src/js/modules/*.js', 'src/js/modules/app.js'],
        tasks: ['jade', 'posthtml', 'less', 'concat', 'babel', ],
        options: {
          spawn: false
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-posthtml');


  grunt.registerTask('default', ['jade', 'posthtml', 'less', 'concat', 'babel', 'watch']);
  grunt.registerTask('babeltask', ['babel']);

};