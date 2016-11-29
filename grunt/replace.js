'use strict';

module.exports = function (grunt) {
    var path = require('path');

    var task = {
        jsmaps: {
            options: {
                patterns: [
                    {
                        match: /..\/.tmp\//g,
                        replacement: './'
                    }
                ]
            },
            files: [
                {expand: true, flatten: true, src: ['dist/app.js.map'], dest: 'dist'}
            ]
        }
    };
    return task;
};
