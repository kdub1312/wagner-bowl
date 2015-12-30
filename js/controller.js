var wagnerBowlApp = angular.module('wagnerBowlApp', []);
    
wagnerBowlApp.controller('WagnerBowlController', ['$scope', '$http', function WagnerBowlController($scope, $http) {
        
$http.get('js/data.json').success(function(data) {
    $scope.competitors = data;
}); 
            
    }]);
