/**
 * Created by david.hernandezgonza on 25/08/2016.
 */

/**
 * Fichero de carga de configuración, vistas, etc...
 */

angular.module('arruiApp').config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider.state("home", {
        url: "/home",
        templateUrl: "views/fichas.html"
    });
});