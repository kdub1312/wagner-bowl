var myApp = angular.module('myApp', [
    'ngRoute',
    'artistControllers'    
]);

myApp.config(['$routeProvider' function($routeProvider) {
    $routeProvider.
    when('/list', {
        templateUrl: 'partials/competitor-list.html',
        controller: 'CompetitorListController'
    }).
    otherwise({
        redirectTo: '/list'
    });
}]);