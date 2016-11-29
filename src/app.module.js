
(function () {
    'use strict';

    angular
        .module('app', ['3partyDepModules', 'app.layout', 'app.widgets', 'app.util'])
        .config(config)
        .config(configHttp)
        .run(run);

    config.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', '$httpProvider', '$rootScopeProvider'];
    function config($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider, ENV, $rootScopeProvider) {
        $rootScopeProvider.digestTtl(30);
        $locationProvider.html5Mode(true).hashPrefix('!');
        $httpProvider.defaults.headers.delete = {'Content-Type': 'application/json'};
        $httpProvider.defaults.headers.common['Accept'] = 'application/json; q=1, text/plain; q=0.9, text/html; q=0.8';
        $httpProvider.defaults.headers.common['Cache-Control'] = 'no-cache';
        $httpProvider.defaults.headers.common['Pragma'] = 'no-cache';

        $stateProvider
            .state('app', {
                abstract: true,
                url: '/',
                redirectTo: 'app.page.home', // There is power in this one
                parent: '',
                templateUrl: 'app.template.html',
                ncyBreadcrumb: {
                    skip: true
                }
            })
            .state('notFound', {
                templateUrl: 'widgets/error/404/404.template.html',
                data: {
                    pageTitle: function () { return 'Page not found'; }
                }
            });

        $urlRouterProvider.otherwise(notFound);
    }

    configHttp.$inject = ['$httpProvider'];
    function configHttp($httpProvider) {}

    run.$inject = [];
    function run() {}

    notFound.$inject = ['$injector', '$location'];
    function notFound($injector, $location) {
        var $state = $injector.get('$state', 'notFoundRouteProvider');
        $state.go('notFound');
        return $location.path();
    }

})();
