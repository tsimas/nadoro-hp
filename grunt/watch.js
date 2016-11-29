'use strict';

/**
 * Watch task.
 *
 * Watch definitions, should be used with development only tasks to e.g. trigger rebuilds  when the given conditions are
 * met.
 *
 * @returns {Object}
 */
module.exports = function (grunt, options) {
    var env = grunt.option('env');
    var tasks = [];
    if (env === 'prod') {
        tasks = ['reload'];
    } else {
        tasks = ['reload', 'notify:devBuildFinished'];
    }

    return {
        all: {
            files: [
                // options.appConfig.baseSource + '/**/*.js', 'src/**/*.js',
                // options.appConfig.baseSource + '/**/*.scss', 'src/**/*.scss',
                // options.appConfig.baseSource + '/**/*.html', 'src/**/*.html'
            ],
            tasks: tasks
        }
    };
};
