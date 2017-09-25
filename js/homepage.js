$(function() {
	turnpage('home.html');
	$('.nav-a').click(function(){
		$('.nav-a').parent().removeClass('current');
		$(this).parent().addClass('current');
	});
})
//	底部菜单点击事件
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