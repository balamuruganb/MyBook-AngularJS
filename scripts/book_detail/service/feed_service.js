"use strict"

bookDetail.factory('Feed', function() {
	
	function Feed (id, type) {
		this.id = id;
		this.type = type;
		this.date = new Date();
	};
	
	Feed.prototype = {
		getId : function() {
			return this.id;
		}, 
		getType : function() {
			return this.type;
		}, 
		getDate : function() {
			return this.date;
		}
	};
	
	return Feed;
});

bookDetail.factory('TextFeed', function(Feed) {
	
	function TextFeed (text, id) {
		Feed.call(this, id, "Text");
		this.text = text;
	};
	
	TextFeed.prototype = Object.create(Feed.prototype);
	
	TextFeed.prototype.getFeed = function() {
		return this.text;
	};
	
	return TextFeed;
});


bookDetail.factory('URLFeed', function(Feed) {
	
	function URLFeed (url, id) {
		Feed.call(this, id, "URL");
		this.url = url;
	};
	URLFeed.prototype  =  Object.create(Feed.prototype);
	
	URLFeed.prototype.getFeed = function() {
		return this.url;
	};
	
	return URLFeed;
});


// Service Definition.....
bookDetail.service('FeedService', function(TextFeed, URLFeed) {
	
	this.createFeed = function(feedValue, id) {

		if (feedValue == "") {
			alert("Invalid Data. Please provide valid info");
			return;
		}
		  
		var feed = undefined;
		if (feedValue.toUpperCase().indexOf("HTTP") == 0) {
			feed = new URLFeed(feedValue, id);
		} else {
			feed = new TextFeed(feedValue, id);
		}
	  	return feed;
	}
	
});


