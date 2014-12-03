Router.map(function() {

	this.route('site', {
		path: '/',
		loadingTemplate: 'adminLoading',
		waitOn: function() {
			return [orion.subs.subscribe('dictionary')] 
		},
		onAfterAction: function() {
			if (!Meteor.isClient) {
				return;
			}
			SEO.set({
				title: orion.dictionary.get('seoTitle'),
				link: {
					icon: orion.dictionary.get('seoFavIcon.link'),
				},
				meta: {
					'description': orion.dictionary.get('seoDescription')
				},
				og: {
					'title': orion.dictionary.get('seoTitle'),
					'description': orion.dictionary.get('seoDescription'),
					'image': orion.dictionary.get('seoImage.link')
				}
			});
		}
	});

});