var app = angular.module('newsApp', []);

// let base_url = 'https://newsapi.org/v2/everything?apiKey=85c3b3c07b8c403f9c800fe512f59f6b&sources='

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
    ];




    // $scope.phrase = "Welcome to my page!";
    
    // $scope.showNews = function(){
    //     $scope.channel.number++ ;
    // }

}]);

app.controller('newsViewController', function($scope, HttpService) {
    
//     HttpService.getPost()
//     .then(function(response) {
//     $scope.post = response;
//   });

  HttpService.getSources()
  .then(function(response) {
   $scope.sourceWebsites = response;
 });

 HttpService.showNews()
  .then(function(response) {
   $scope.news = response;
 });

 HttpService.showCards()
 .then(function(response) {
  $scope.cards = response;
});

 $scope.showCards = function(index){
        var i = $scope.sourceWebsites.sources[index].id;
        console.log(i)
        return i; 
    }
})


.service('HttpService', function($http) {
    return {
        getSources: function() {
          return $http.get('https://newsapi.org/v2/sources?apiKey=85c3b3c07b8c403f9c800fe512f59f6b')
            .then(function(response) {
            console.log('Get Sources', response);
            return response.data;
          });
        },

        showCards: function(){
            // var source = document.getElementById('viewNews').value
            // console.log(source)
            // console.log($scope.sourceWebsites.sources[index].id)
            return $http.get('https://newsapi.org/v2/everything?apiKey=85c3b3c07b8c403f9c800fe512f59f6b&sources=mashable')
            .then(function(response) {
                console.log('Show Channel Wise', response);
                return response.data;
            });
        },

        showNews: function(){
            // var source = document.getElementById
            // console.log(source)
            return $http.get('https://newsapi.org/v2/everything?sources=the-next-web&apiKey=85c3b3c07b8c403f9c800fe512f59f6b')
            .then(function(response) {
                console.log('Show News', response);
                return response.data;
            });
        },
      }
});