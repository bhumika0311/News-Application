var app = angular.module('newsApp', []);

app.controller('newsViewController', ['$scope', function($scope){
    $scope.channel = {
        number:  1,
        name:'ABP News',
        country: "India"
    };

    $scope.phrase = "Welcome to my page!";
    
    $scope.showNews = function(){
        $scope.channel.number++ ;
    }
}]);