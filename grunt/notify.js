'use strict';

/**
 * Grunt notify task.
 *
 * Creates visual notifications for grunt tasks. Should only be used in development.
 *
 * @returns {Object}
 */
/* jshint ignore:start */
module.exports = function () {
    return {
        devBuildFinished: {
            options: {
                enabled: true,
                max_jshint_notifications: 5, //jscs:disable
                title: 'Success',
                message: 'Build has finished!',
                success: true,
                duration: 2
            }
        },
        appStarted: {
            options: {
                enabled: true,
                max_jshint_notifications: 1, //jscs:disable
                title: 'Hush!',
                message: 'The app is running!',
                success: true,
                duration: 2
            }
        }
    };
};
/* jshint ignore:end */
