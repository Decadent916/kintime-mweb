$(function(){
	$('.address-item').bind('click',function(e){
		if(!$(this).hasClass('select')){
			$('.address-item').removeClass('select');
			$(this).addClass('select');
		}else{
			$('.address-item').removeClass('select');
		};
	});
})
