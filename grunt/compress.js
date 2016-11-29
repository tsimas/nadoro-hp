'use strict';

/**
 * Compress task.
 *
 * Used by the build process. It can compress built sources therefore simplifying the release management.
 *
 * @returns {Object}
 */
module.exports = function (grunt, options) {
    var path = require('path');
    return {
        prod: {
            options: {
                mode: 'zip',
                archive: 'dist/nadoro_homepage.zip'
            },
            expand: true,
            cwd: 'dist/',
            src: ['**/*', '!**/.*']
        }
    };
};
