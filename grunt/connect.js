'use strict';

/**
 * Connect task.
 *
 * Used to run the application in development mode.
 *
 * TODO: list of proxies should come from the outside!
 *
 * Optional run parameters:
 * --with-proxy=true: enables the proxy-ing of backend calls
 *
 * @param {Object} grunt
 * @returns {Object}
 */
module.exports = function (grunt) {
    var modRewrite = require('connect-modrewrite');

    return {
        options: {
            base: ['dist/'],
            port: 9000,
            hostname: '0.0.0.0'
        },
        proxies: {
            context: '/api',
            host: 'localhost', // Proxy to this host
            rewrite: {
                '/api': '/'
            },
            port: 8181,
            changeOrigin: true,
            https: false,
            xforward: false
        },
        livereload: {
            options: {
                open: false,
                middleware: function (connect, options) {
                    var middlewares = [];

                    middlewares.push(require('grunt-connect-proxy/lib/utils').proxyRequest);

                    middlewares.push(modRewrite(['!\\.html|\\.js|\\.svg|\\.css|\\.jpg|\\.ico|\\.png|\\.gif|\\.otf|\\.woff|\\.ttf|\\.TTF /index.html [L]']));
                    middlewares.push(connect().use('/bower_components', connect.static('./bower_components')));
                    middlewares.push(connect.static(options.base[0]));

                    return middlewares;
                }
            }
        }
    };
};
