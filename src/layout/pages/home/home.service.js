(function () {
    'use strict';

    angular
        .module('app.layout.pages.home')
        .service('HomeService', Service);

    Service.$inject = ['$log'];

    function Service($log) {
        var vm = this;
        vm.$log = $log;
    }

    Service.prototype.hello = function () {
        this.$log.info('Im a HomeService.');
    };

})();