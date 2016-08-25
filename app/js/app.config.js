/**
 * Created by david.hernandezgonza on 25/08/2016.
 */

/**
 * Fichero de carga de configuración, vistas, etc...
 */

angular.module('arruiApp')
    .config(function ($stateProvider, $urlRouteProvider) {

        $urlRouteProvider.otherwise("/home");

        $stateProvider.state("stateHome", {
            /*
           Views se utiliza cuando queremos aplicar multiples vistas en el mismos estado.
           En nuestro caso solo vamos a aplicar una por ahora.
             */
            views: {
                "": {
                  template: "<h1>Hola caracola!!</h1>"
                },
                "home": {
                    url: "/home",
                    templateUrl: "/app/views/fichas.html"
                }
            }
        });
    });