'use strict';

/**
 * JSHint task.
 */
module.exports = function () {
    return {
        options: {
            node: true,
            jasmine: true,
            jshintrc: '.jshintrc',
            reporter: require('jshint-stylish')
        },
        generated: {
            src: [
                'Gruntfile.js'
            ]
        },
        test: {
            options: {
                jshintrc: 'test/.jshintrc'
            },
            src: ['test/spec/{,*/}*.js']
        }
    };
};
