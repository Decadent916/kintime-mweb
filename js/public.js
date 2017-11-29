function turnpage(url) {
	var ajaxurl = url;
	$.ajax({
		type: "post",
		url: ajaxurl,
		success: function(html) {
			$('.main').html(html);
		}
	});
}