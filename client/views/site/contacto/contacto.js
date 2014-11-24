AutoForm.hooks({
	contactoForm: {
		onSuccess: function(operation, result, template) {
			$(".contacto-form").addClass('ready');
		}
	}
});

Template.contacto.rendered = function () {
	$("textarea[name=message]").val("");
};