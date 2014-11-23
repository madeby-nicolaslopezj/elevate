if (process.env.ADMIN_EMAIL && process.env.ADMIN_PASSWORD) {

	if (Meteor.users.find({emails: {$elemMatch: {address: process.env.ADMIN_EMAIL}}}).count() === 0) {
		Accounts.createUser({
			email: process.env.ADMIN_EMAIL,
			password: process.env.ADMIN_PASSWORD
		});

		console.log("Account created: " + process.env.ADMIN_EMAIL);
	}
	
}