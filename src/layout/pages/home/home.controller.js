(function () {
    'use strict';

    angular
        .module('app.layout.pages.home')
        .controller('HomeController', Controller);

    Controller.$inject = ['$rootScope', 'HomeService'];

    function Controller($rootScope, HomeService) {
        var vm = this;
        vm.$rootScope = $rootScope;
        vm.HomeService = HomeService;

        vm.init();
    }

    Controller.prototype.init = function () {
        this.HomeService.hello();
        this.defaultText = 'This is the Home page';
    }

})();
