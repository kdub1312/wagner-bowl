var competitorController = angular.module('competitorController', []);
/*var wagnerBowlApp = angular.module('wagnerBowlApp', []);*/

competitorController.controller('CompetitorListController', ['$scope', '$http', function WagnerBowlController($scope, $http) {
        
$http.get('js/data.json').success(function(data) {
    $scope.competitors = data;
}); 
            
    }]);
