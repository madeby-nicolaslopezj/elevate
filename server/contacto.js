Meteor.methods({
	contactSend: function(doc) {
	// Important server-side check for security and data integrity
	check(doc, contactFormSchema);

	// Build the e-mail text
	var text = "Nombre: " + doc.name + "\n"
			+ "Email: " + doc.email + "\n\n"
			+ doc.message;

	this.unblock();

	// Send the e-mail
	Email.send({
		to: process.env.MAIL_EMAILTO,
		from: process.env.MAIL_EMAILFROM,
		subject: "Contacto Elevate de " + doc.name,
		text: text
	});
	}
});