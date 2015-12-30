var wagnerBowlApp = angular.module('wagnerBowlApp', []);
    
wagnerBowlApp.controller('WagnerBowlController', function WagnerBowlController($scope) {
        
        $scope.creator = {
            'name' : 'Kevin Wagner',
            'title' : 'admin',
            'company' : 'All District'
        }
    });
