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
        options: {
            wrapped: false
        },

        // grunt contrib handlebars
        handlebars: {
            all: {
                filenames: ['home','list','page','vote','list']
            },
        }
    };

    // handlebars
    configs.handlebars.all.files = {};
    for (var i = 0; i < configs.handlebars.all.filenames.length; i++) {
        configs.handlebars.all.files[vars.destPath + configs.handlebars.all.filenames[i] + vars.destExt] = vars.sourcePath + configs.handlebars.all.filenames[i] + vars.sourceExt;
    }

    // load configs
    grunt.initConfig(configs);

    // Load NPM tasks
    grunt.loadNpmTasks('grunt-contrib-handlebars');

    // Register tasks
    grunt.registerTask('default', ['handlebars']);
};
