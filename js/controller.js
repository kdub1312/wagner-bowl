var competitorController = angular.module('competitorController', []);
/*var wagnerBowlApp = angular.module('wagnerBowlApp', []);*/

competitorController.controller('ListController', ['$scope', '$http', function WagnerBowlController($scope, $http) {
        
$http.get('js/data.json').success(function(data) {
    $scope.competitors = data;
}); 
            
    }]);

competitorController.controller('DetailsController', ['$scope', '$http', '$routeParams', function WagnerBowlController($scope, $http, $routeParams) {
        
$http.get('js/data.json').success(function(data) {
    $scope.competitors = data;
    $scope.whichItem = $routeParams.itemId;
}); 
            
    }]);

competitorController.controller('PicksController', ['$scope', '$http', '$routeParams', function WagnerBowlController($scope, $http, $routeParams) {
        
$http.get('js/data.json').success(function(data) {
    $scope.competitors = data;
    $scope.whichItem = $routeParams.itemId;
}); 
            
    }]);
