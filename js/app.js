var myApp = angular.module('myApp', [
    'ngRoute',
    'competitorController'    
]);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/list', {
        templateUrl: 'partials/competitor-list.html',
        controller: 'ListController'
    }).
    otherwise({
        redirectTo: '/list'
    });
}]);