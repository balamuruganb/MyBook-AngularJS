"use strict"
function Feed (id) {
	this.id = id;
	this.date = new Date();
}

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
}

function URLFeed (url, id) {
	Feed.call(this, id);
	this.url = url;
}

function TextFeed (text, id) {
	Feed.call(this, id);
	this.text = text;
}

URLFeed.prototype = {
	getFeed : function() {
		return this.text;
	}
}


TextFeed.prototype = {
	getFeed : function() {
		return this.url;
	}
}

URLFeed.prototype  =  Object.create(Feed.prototype);
TextFeed.prototype = Object.create(Feed.prototype);

// Service Definition.....
bookDetail.service('FeedService', function() {
	
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
	  	return feed;	}
	
});


