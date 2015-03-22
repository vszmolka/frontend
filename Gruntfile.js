/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        sencha_app_build: {
            testing_build: {
                environment: 'testing'
            }
        },
        shell: {
            options: {
                stderr: false
            },
            buildfulldoc: {
                command: 'jsduck touch/src app --output docs --warning -all:touch/src'
            },
            buildappdoc: {
                command: 'jsduck app --output docs --warning -all:touch/src'
                
            }
        },
        jshint: {
            files: ['app/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        }
    });
    grunt.loadNpmTasks('grunt-sencha-build');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sencha_app_build']);
    grunt.registerTask('buildoc', ['shell:buildfulldoc']);
    grunt.registerTask('buildocmin', ['shell:buildappdoc']);
    grunt.registerTask('all', ['sencha_app_build', 'shell']);


};
