(function () {
    'use strict';

    angular
        .module('app.util.globalSpin', [
            'bsLoadingOverlay',
            'bsLoadingOverlaySpinJs',
            'ui.bootstrap'
        ])
        .run(run);

    run.$inject = ['bsLoadingOverlayService'];
    function run(bsLoadingOverlayService) {
        bsLoadingOverlayService.setGlobalConfig({
            delay: 200,
            templateUrl: 'util/global-spin/template/loading-overlay.template.html'
        });
    }

})();
