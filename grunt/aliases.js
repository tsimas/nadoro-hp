'use strict';

/**
 * Task aliases.
 *
 * Contains task collections which can be run on their own, simplifying the procedure.
 *
 * @returns {Object}
 */
module.exports = function () {

    return {
        'default': [
            'build'
        ],
        'build': [
            'clean:tmp',
            'clean:dist',
            'copy:toTmp',
            'html2js',
            'bower_concat:vendorJS',
            'bower_concat:vendorCSS',
            //'uglify:vendor',
            'copy:fonts',
            'sass:dist',
            'copy:toDist',
            'concat:dist',
            'replace:jsmaps'
        ],
        'reload': [
            'build'
        ],
        'run': [
            'build',
            'configureProxies:server',
            'connect:livereload',
            'notify:appStarted',
            'watch'
        ],
        'test': [
            'karma:platform'
        ],
        'test-dev': [
            'karma:platformDev'
        ]
    };
};
