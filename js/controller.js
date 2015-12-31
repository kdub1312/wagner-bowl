var competitorController = angular.module('competitorController', []);
/*var wagnerBowlApp = angular.module('wagnerBowlApp', []);*/

competitorController.controller('ListController', ['$scope', '$http', function WagnerBowlController($scope, $http) {
        
$http.get('js/data.json').success(function(data) {
    $scope.competitors = data;
}); 
            
    }]);
