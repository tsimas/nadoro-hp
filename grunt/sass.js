'use strict';

module.exports = function () {
    return {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                '.tmp/app.css': '.tmp/app.scss'
            }
        }
    };
};
