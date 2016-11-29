(function () {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.$inject = ['$rootScope', '$timeout'];

    function AppController($rootScope , $timeout) {
        var vm = this;
        vm.$timeout = $timeout;
        vm.$rootScope = $rootScope;
    }

})();
