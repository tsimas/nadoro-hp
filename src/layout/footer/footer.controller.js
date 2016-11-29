(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('FooterController', Controller);

    Controller.$inject = ['$rootScope'];

    function Controller($rootScope) {
        var vm = this;
        vm.$rootScope = $rootScope;
        vm.defaultText = 'This is the footer';
    }

})();
