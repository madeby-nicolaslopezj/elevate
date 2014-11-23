Template.nav.rendered = function () {
	$('body').scrollspy({ target: '#nav-collapse' })

	$("li.move a, #page-top a, .navbar-brand, .site-map a").click(function() {
		var id = $(this).attr('href');
		
		$('html, body').animate({
	        scrollTop: $(id).offset().top
	    });

	    return false;
	});

	$("li.hidden").on('activate.bs.scrollspy', function () {
		$(".navbar-fixed-top").addClass('navbar-expanded');
	})
	$("li.move").on('activate.bs.scrollspy', function () {
		$(".navbar-fixed-top").removeClass('navbar-expanded');
	})

};