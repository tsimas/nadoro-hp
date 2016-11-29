module.exports = function (config) {
    var bowerRepoPathPrefix = 'bower_components/';
    var jUnitOutputFile = 'test-results.xml';
    var coverageReporter = {type: 'html', dir: 'reports'};

    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'test/lib/bind.shim.js',
            bowerRepoPathPrefix + 'jquery/dist/jquery.js',
            bowerRepoPathPrefix + 'angular/angular.js',
            bowerRepoPathPrefix + 'angular-animate/angular-animate.js',
            bowerRepoPathPrefix + 'angular-loading-bar/build/loading-bar.js',
            bowerRepoPathPrefix + 'angular-sanitize/angular-sanitize.js',
            bowerRepoPathPrefix + 'angular-messages/angular-messages.js',
            bowerRepoPathPrefix + 'angular-ui-router/release/angular-ui-router.js',
            bowerRepoPathPrefix + 'angular-bootstrap/ui-bootstrap.js',
            bowerRepoPathPrefix + 'angular-translate/angular-translate.js',
            bowerRepoPathPrefix + 'jasmine-jquery/lib/jasmine-jquery.js',
            bowerRepoPathPrefix + 'angular-loading-overlay/dist/angular-loading-overlay.js',
            bowerRepoPathPrefix + 'angular-loading-overlay-spinjs/dist/angular-loading-overlay-spinjs.js',
            'src/**/*.js',
            'test/**/*.spec.js',
            {
                pattern: 'test/**/*.json',
                included: false,
                watched: true,
                served: true
            }
        ],
        exclude: [],
        ngHtml2JsPreprocessor: {
            // strip app from the file path
            stripPrefix: 'src/'
        },
        preprocessors: {
            'src/**/*.template.html': 'html2js',
            'src/**/*.js': ['coverage']
        },
        port: 9876,
        browserNoActivityTimeout: 30000,
        junitReporter: {
            outputFile: jUnitOutputFile,
            suite: 'judo-web'
        },
        coverageReporter: coverageReporter,
        logLevel: 'INFO',
        colors: true,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true
    });
};

