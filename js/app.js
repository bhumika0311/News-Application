var app = angular.module('newsApp', []);

app.controller('newsViewController', ['$scope', function($scope){
    $scope.channels = [
        {
            number:  1,
            name:'ABP News',
            countries: ["India", "USA", "UK"]
        },
        {
            number:  2,
            name:'Zee News',
            countries: ["India", "UK"]
        },
        {
            number:  3,
            name:'Aajtak',
            countries: ["India", "USA"]
        },
        {
            number:  4,
            name:'India News',
            countries: ["India", "USA", "UK"]
        }



    // $scope.phrase = "Welcome to my page!";
    
    // $scope.showNews = function(){
    //     $scope.channel.number++ ;
    // }
];

}]);