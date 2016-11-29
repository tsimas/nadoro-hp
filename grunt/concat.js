'use strict';

module.exports = function () {
    var endOfLine = require('os').EOL;
    return {
        options: {
            sourceMap: true,
            sourceMapStyle: 'embed',
            separator: ';'
        },
        dist: {
            src: ['.tmp/**/*.js'],
            dest: 'dist/app.js',
            nonull: true
        }
    };
};
