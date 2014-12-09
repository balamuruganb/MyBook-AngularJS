(function() {
var app = angular.module('directives', []);

  app.directive('bookHeader', function() {
    return {
      restrict : 'E',
      templateUrl:'./view/book-header.html',
	};
  });
  
  app.directive('bookFooter', function() {
    return {
      restrict : 'E',
      templateUrl:'./view/book-footer.html',
	};
  });
  
})();