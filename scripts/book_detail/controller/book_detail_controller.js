var bookDetail = angular.module('bookdetail', []);
  
bookDetail.controller('BookDetailController', function($scope, $location) {
  	
	if (!$scope.$parent.loggedIn) {
		$location.path("/login");	
		return;
	}
	
});
  
