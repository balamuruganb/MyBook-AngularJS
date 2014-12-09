myBook.controller('LoginController', function($scope, $location) {

	$scope.user = {
					userName : "",
				    password : ""
				  };
	
	$scope.login = function() {
		
		if ($scope.user.userName === "bala" && $scope.user.password === "bala") {
	  		 $scope.$parent.loggedIn = true;
			 $location.path("/book");			
		} else {
	  		$scope.$parent.loggedIn = false;
		}
	};
	
	$scope.logout = function() {
		
		$location.path("/login");			
		$scope.$parent.loggedIn = false;
		$scope.user.userName = "";
		$scope.user.password = "";
	};
});	  
	  