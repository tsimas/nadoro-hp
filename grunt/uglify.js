'use strict';

module.exports = function (grunt, options) {

    return {
        options: {
            mangle: false,
            sourceMap: true
        },
        vendor: {
            files: {
                'dist/vendor.min.js': ['.tmp/vendor.js']
            }
        }
    };
};
