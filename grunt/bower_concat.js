'use strict';

module.exports = function () {
    return {
        options: {
            separator : ';\n'
        },
        vendorJS: {
            dest: 'dist/vendor.js',
            dependencies: {
                'angular': 'jquery',
                'ag-grid': 'angular'
            },
            mainFiles: {
                'angular-ui': ['build/angular-ui.js'],
                'angular-loading-overlay-spinjs' : ['dist/angular-loading-overlay-spinjs.js']
            },
            bowerOptions: {
                relative: false
            },
            exclude: [
                'bootstrap'
            ]
        },
        vendorCSS: {
            cssDest: 'dist/vendor.css',
            include: [
                'angular-loading-bar',
                'angular-ui',
                'font-awesome'
            ],
            mainFiles: {
                'angular-ui': ['build/angular-ui.css']
            },
            bowerOptions: {
                relative: false
            },
            exclude: [
                'bootstrap'
            ]
        }
    };
};
