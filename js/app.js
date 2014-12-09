(function() {
  var app = angular.module('app', ['route']);
  
  app.controller('BookController', function($scope, $route, $location) {
  	
  	$scope.userName = "";
  	$scope.password = "";
	$scope.loggedIn = false;
  	
  	$scope.login = function() {
  		
  		if ($scope.userName === "bala" && $scope.password === "bala") {
	  		$scope.loggedIn = true;
			 $location.path("/book");			
 		} else {
	  		$scope.loggedIn = false;
 		}
  	}
	
	$scope.logout = function() {
  		
		$location.path("/login");			
  		$scope.loggedIn = false;
		$scope.userName = "";
		$scope.password = "";
  	}
	
  });
  
})();