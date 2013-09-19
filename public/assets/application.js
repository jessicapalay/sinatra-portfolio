$(document).ready(function() {
	$(".navigation a").click(function(event) {
		event.preventDefault();
		anchor = $(this);
		$(".page:visible, .navigation:visible").slideUp("fast", function() {
			selector = "." + anchor.attr("data")
			$(selector).show()
			$(".navigation-1").show()
		});
	});
});

$(document).ready(function() {
	$(".navigation-1 a").click(function(event) {
		event.preventDefault();
		item = $(this);
		$(".about-page:visible, .work-page:visible, .contact-page:visible").fadeOut("fast", function() {
			select = "." + item.attr("data-page")
			$(select).fadeIn("slow")
		});
	});
});


$(document).ready(function() {
     $('input[type="submit"]').attr('disabled','disabled');
     $('input[type="text"], input[type="email"], #message').keyup(function() {
        if($(this).val() != '') {
           $('input[type="submit"]').removeAttr('disabled');
        }
     });
 });