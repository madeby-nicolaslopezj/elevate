Router.map(function() {

	this.route('site', {
		path: '/',
		loadingTemplate: 'adminLoading',
		waitOn: function() {
			return [orion.subs.subscribe('dictionary')] 
		},
		onAfterAction: function() {
			var dict;
			if (!Meteor.isClient) {
				return;
			}
			dict = orion.dictionary.collection.findOne();
			SEO.set({
				title: dict.seoTitle,
				link: {
					icon: dict.seoFavIcon.link,
				},
				meta: {
					'description': dict.seoDescription
				},
				og: {
					'title': dict.seoTitle,
					'description': dict.seoDescription,
					'image': dict.seoImage.link
				}
			});
		}
	});

});