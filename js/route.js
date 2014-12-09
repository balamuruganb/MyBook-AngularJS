(function() {
  var app = angular.module('route', ['ngRoute']);
  
   app.config(function($routeProvider) {
   $routeProvider
	   .when('/login', {
	     templateUrl: './view/login.html',
	     controller: 'BookController'
	   })
	   .when('/book', {
	     templateUrl: './view/book.html',
	   })
	   .otherwise({
	         redirectTo: '/login'
	       });
	   });
})();