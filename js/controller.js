var wagnerBowlApp = angular.module('wagnerBowlApp', []);
    
wagnerBowlApp.controller('WagnerBowlController', function WagnerBowlController($scope, $http) {
        
$http.get('js/data.json').success(function(data) {
    $scope.competitor = data;
}); 
            
    });
