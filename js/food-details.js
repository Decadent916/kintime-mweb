$(function() {
	//	套餐点击事件
	$('.otherdetails-item').click(function() {
		$('.otherdetails-item').removeClass('current');
		$(this).addClass('current');
	});
	//	查看全部套餐点击事件
	$('.show-btn').click(function() {
		if($(this).parent().hasClass('hide-con')) {
			$(this).parent().removeClass('hide-con');
			$('.show-btn .iconfont').removeClass('icon-jiantouxia');
			$('.show-btn .iconfont').addClass('icon-jiantoushang');
		} else {
			$(this).parent().addClass('hide-con');
			$('.show-btn .iconfont').removeClass('icon-jiantoushang');
			$('.show-btn .iconfont').addClass('icon-jiantouxia');
		}
	});
	//	图片展示区滑动事件
	$(".img-discon").on("swipe", function() {
		$(".img-discon").text("滑动检测!");
	});
})