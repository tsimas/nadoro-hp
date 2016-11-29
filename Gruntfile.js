'use strict';

module.exports = function (grunt) {

    var path        = require('path');
    var lodash      = require('lodash');
    var timeGrunt   = require('time-grunt')(grunt);

    var appConfig = {};

    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt'),
        init: true,
        data: {
            appConfig: appConfig
        }
    });

    grunt.loadNpmTasks('grunt-connect-proxy');
};
