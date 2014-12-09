var myBook = angular.module('myBook', ['bookdetail', 'ngRoute']);
  
myBook.controller('BookController', function($scope) {
  	
	$scope.loggedIn = false;
	
});

myBook.config(function($routeProvider) {
   $routeProvider
	   .when('/login', {
     templateUrl: './views/login.html',
     controller: 'BookController'
   })
   .when('/book', {
     templateUrl: './views/book_detail.html',
   })
   .otherwise({
         redirectTo: '/login'
   });
});

  
