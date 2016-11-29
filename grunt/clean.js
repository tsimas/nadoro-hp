'use strict';
module.exports = function () {
    return {
        'dist': {
            files: [{
                dot: true,
                src: [
                    'dist/{,*/}*',
                    '!dist/{,*/}.git*'
                ]
            }]
        },
        'tmp': {
            files: [{
                dot: true,
                src: [
                    '.tmp/{,*/}*',
                    '!.tmp/{,*/}.git*',
                    '!.tmp/{,*/}.zip'
                ]
            }]
        }
    };
};
