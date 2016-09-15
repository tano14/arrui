/**
 * Created by david.hernandezgonza on 12/09/2016.
 */
angular.module('arruiApp').controller('FichasController', function ($scope, Arruis){

    $scope.listaArruis = Arruis.query();

});