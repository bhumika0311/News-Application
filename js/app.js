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

app.controller('newsViewController', function($scope, HttpService) {
    HttpService.getPost()
    .then(function(response) {
    $scope.post = response;
  });

  HttpService.getUsers()
  .then(function(response) {
   $scope.users = response;
 });
})

.service('HttpService', function($http) {
    return {
        getPost: function() {
          // $http returns a promise, which has a then function, which also returns a promise.
          return $http.get('http://jsonplaceholder.typicode.com/posts/1')
            .then(function (response) {
            // In the response, resp.data contains the result. Check the console to see all of the data returned.
            console.log('Get Post', response);
            return response.data;
          });
        },
        getUsers: function() {
          // $http returns a promise, which has a then function, which also returns a promise.
          return $http.get('http://jsonplaceholder.typicode.com/users')
            .then(function(response) {
            // In the response, resp.data contains the result. Check the console to see all of the data returned.
            console.log('Get Users', response);
            return response.data;
          });
        }
      }
});