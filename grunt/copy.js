'use strict';

/**
 * Copy task.
 *
 * @returns {Object}
 */
module.exports = function (grunt, options) {
    var path = require('path');

    return {
        options: {
            encoding: 'utf-8'
        },
        toTmp: {
            files: [{
                expand: true,
                dot: true,
                cwd: 'src',
                dest: 'tmp',
                src: ['**/*.*', '!mixins/{,*/}*']
            }]
        },
        toDist: {
            files: [{
                expand: true,
                dot: true,
                cwd: '.tmp',
                dest: 'dist',
                src: ['index.html', 'app.css*', 'favicon.*', 'assets/**/*.*']
            }]
        },
        fonts: {
            files: [
                {
                    expand: true,
                    flatten: true,
                    cwd: 'bower_components/font-awesome',
                    src: 'fonts/*',
                    dest: 'dist/fonts'
                },
                {
                    expand: true,
                    flatten: true,
                    cwd: 'bower_components/bootstrap-sass',
                    src: 'assets/fonts/bootstrap/*',
                    dest: 'dist/fonts/bootstrap'
                }
            ]
        }
    };
};
