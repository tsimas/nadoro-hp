(function () {
    'use strict';

    angular
        .module('app.layout.pages.home', [])
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('app.pages.home', {
                url: 'home',
                parent: 'app',
                templateUrl: 'layout/pages/home/home.template.html',
                controller: 'HomeController',
                controllerAs: 'HomeController',
                data: {
                    pageTitle: function () { return 'Home'; },
                }
            });
    }
})();
