$(function(){
	$('#phone').focus(function(){
		if($(this).val()=="请输入手机号"){
			$(this).val("");
		};
	});
	$('#phone').blur(function(){
		if($(this).val()==""){
			$(this).val("请输入手机号");
		};
	});
	$('#sms').focus(function(){
		if($(this).val()=="请输入短信验证码"){
			$(this).val("");
		};
	});
	$('#sms').blur(function(){
		if($(this).val()==""){
			$(this).val("请输入短信验证码");
		};
	});
	$('.password').focus(function(){
		if($(this).val()=="请输入密码（8~16位，包含字母与数字）"|| $(this).val()=="请再次输入密码"){
			$(this).attr('type','password');
			$(this).val("");
		};
	});
	$('#password1').blur(function(){
		if($(this).val()==""){
			$(this).attr('type','text');
			$(this).val("请输入密码（8~16位，包含字母与数字）");
		};
	});
	$('#password2').blur(function(){
		if($(this).val()==""){
			$(this).attr('type','text');
			$(this).val("请再次输入密码");
		};
	});
	
//	按钮
	$('.register-btn').bind('click',function(){
		alert('可点击');
	});
//	按钮不可点击
	$('.register-btn.disabled').attr('disabled',true);
})
