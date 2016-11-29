'use strict';
module.exports = function () {
    return {
        options: {
            base: '.tmp/',
            quoteChar: '\'',
            singleModule: true,
            indentString: '    ',
            useStrict: true,
            module: 'app.templates',
            htmlmin: {
                collapseWhitespace: true,
                removeComments: true
            }
        },
        main: {
            src: ['.tmp/**/*.template.html'],
            dest: 'dist/app.templates.js'
        }
    };
};
