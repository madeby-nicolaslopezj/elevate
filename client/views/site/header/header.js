Template.header.helpers({
	getImage: function () {
		var images = orion.dictionary.get('headerBackgroundImages', []);
		if (images.length == 1) {
			return images[0].link;
		} else if (images.length > 1) {
			return images[Math.floor((Math.random() * images.length))].link;
		}
		return '';
	}
});