bookDetail.filter('reverse', function() {
  return function(feeds) {
    return feeds.slice().reverse();
  };
});