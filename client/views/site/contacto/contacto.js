AutoForm.hooks({
	contactoForm: {
		onSuccess: function(operation, result, template) {
			$(".contacto-form").addClass('ready');
		}
	}
});