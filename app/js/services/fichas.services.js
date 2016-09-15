/**
 * Created by david.hernandezgonza on 25/08/2016.
 */

angular.module('arruiApp').factory('Arruis', ['$resource', function ($resource) {
    return $resource('http://localhost:8080/api/arrui/:id', {}, {});
}]);