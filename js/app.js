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
    when('/details/:itemId', {
        templateUrl: 'partials/details.html',
        controller: 'DetailsController'
    }).
    when('/picks/:itemId', {
        templateUrl: 'partials/picks.html',
        controller: 'PicksController'
    }).
    otherwise({
        redirectTo: '/list'
    });
}]);