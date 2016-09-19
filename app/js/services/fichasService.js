/**
 * Created by david.hernandezgonza on 25/08/2016.
 */

angular.module('arruiApp').factory('FichasService', ['$resource', function ($resource) {
    return $resource('http://127.0.0.1:8080/api/arrui/:id');
}]);