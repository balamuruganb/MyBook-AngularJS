bookDetail.controller('FeedController', function(FeedService, $scope, Feed) {
  	
	$scope.feeds = [];
	$scope.feedContent = "";
	$scope.createFeed = function() {
		var feed = FeedService.createFeed($scope.feedContent, $scope.feeds.length);
		if (feed instanceof Feed) {
			$scope.feeds.push(FeedService.createFeed($scope.feedContent, $scope.feeds.length));
		}
		$scope.feedContent = "";
	};
	
	$scope.removeFeed = function(feedId) {
		
	     for (var i = 0, length = $scope.feeds.length; i < length; i++) {
	     	if ($scope.feeds[i].getId() == feedId) {
				$scope.feeds.splice(i, 1);
				break;
			}
		 }
	};
});
