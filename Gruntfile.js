/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        sencha_app_build: {
            testing_build: {
                environment: 'testing'
            }
        }
    });
    grunt.loadNpmTasks('grunt-sencha-build');
    grunt.registerTask('default', ['sencha_app_build']);
};
