$(function(){
	$('#account').focus(function(){
		if($(this).val()=="请输入手机号"){
			$(this).val("");
		};
	});
	$('#account').blur(function(){
		if($(this).val()==""){
			$(this).val("请输入手机号");
		};
	});
	$('#password').focus(function(){
		if($(this).val()=="请输入密码"){
			$(this).attr('type','password');
			$(this).val("");
		};
	});
	$('#password').blur(function(){
		if($(this).val()==""){
			$(this).attr('type','text');
			$(this).val("请输入密码");
		};
	});
	
	$('.login-btn').bind('click',function(){
		alert('可点击');
	});
//	按钮不可点击
	$('.login-btn.disabled').attr('disabled',true);
})
