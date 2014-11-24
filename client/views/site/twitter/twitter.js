Tweets = new ReactiveVar([]);

Template.twitter.helpers({
	tweets: function () {
		return Tweets.get().map(function(document, index){
			document.index = index;
			return document;
		});
	},
	isCero: function(index) {
    	return index == 0;
    }
});

Template.twitter.rendered = function () {
	var tf = new TweetFetcher('521862817826103296');
	console.log('fetching tweets');
    tf.fetch(function(tweets)
    {
    	console.log(tweets, 'Tweets fetched');
        Tweets.set(tweets);
    }, 3);
};