$(function(){
	$('.bank-select').bind('click',function(){
		$('.discount-con').css('display','block');
	});
	$('.discount-con').bind('click',function(e){
		e.stopPropagation();
	});
	$('.select-con').bind('click',function(e){
		e.stopPropagation();
	});
	$('.bank-item').bind('click',function(e){
		$('.bank-item').removeClass('selected');
		$(this).addClass('selected');
	});
	$('.determine-btn').bind('click',function(e){
		$('.discount-con').css('display','none');
	});
})