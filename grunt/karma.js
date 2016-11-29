'use strict';

/**
 * VTesting!
 *
 * @returns {Object}
 */
module.exports = function () {
    return {
        options: {
            configFile: 'karma.conf.js'
        },
        platform: {
            singleRun: true,
            reporters: ['spec', 'junit', 'coverage']
        },
        platformDev: {
            singleRun: true
        }
    };
};
