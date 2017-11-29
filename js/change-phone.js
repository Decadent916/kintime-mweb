$(function(){
	$('#oldphone,#newphone,#sms').focus(function(){
		if($(this).val()=="请输入原手机号"|| $(this).val()=="请输入新手机号"|| $(this).val()=="请输入短信验证码"){
			$(this).attr('type','password');
			$(this).val("");
		};
	});
	$('#oldphone').blur(function(){
		if($(this).val()==""){
			$(this).attr('type','text');
			$(this).val("请输入原手机号");
		};
	});
	$('#newphone').blur(function(){
		if($(this).val()==""){
			$(this).attr('type','text');
			$(this).val("请输入新手机号");
		};
	});
	$('#sms').blur(function(){
		if($(this).val()==""){
			$(this).attr('type','text');
			$(this).val("请输入短信验证码");
		};
	});
	$('#next-phone').bind('click',function(){
		
		
//		ajax
		
	});
})