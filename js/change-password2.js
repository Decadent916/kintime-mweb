$(function(){
	$('#newpassword0,#newpassword1').focus(function(){
		if($(this).val()=="请设置新密码（8-16位，包含字母与数字）"|| $(this).val()=="请再次输入新密码"){
			$(this).attr('type','password');
			$(this).val("");
		};
	});
	$('#newpassword0').blur(function(){
		if($(this).val()==""){
			$(this).attr('type','text');
			$(this).val("请设置新密码（8-16位，包含字母与数字）");
		};
	});
	$('#newpassword1').blur(function(){
		if($(this).val()==""){
			$(this).attr('type','text');
			$(this).val("请再次输入新密码");
		};
	});
	$('#next2').bind('click',function(){
		
		
//		ajax
		
	});
})