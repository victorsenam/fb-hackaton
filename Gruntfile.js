module.exports = function (grunt) {

    var vars = {
        sourceExt: '.hbs',
        destExt: '.html',
        sourcePath: './source/',
        destPath: './built/'
    };

    // Project Configuration
    var configs = {
        pkg: grunt.file.readJSON('package.json'),
        // grunt contrib handlebars
        'compile-handlebars': {
            all: {
                files: [
                    {
                        src: 'source/home.hbs', 
                        dest: 'built/home.html'
                    }
                ]
            }
        }
    };


    // load configs
    grunt.initConfig(configs);

    // Load NPM tasks
    grunt.loadNpmTasks('grunt-compile-handlebars');

    // Register tasks
    grunt.registerTask('default', ['compile-handlebars']);
};
