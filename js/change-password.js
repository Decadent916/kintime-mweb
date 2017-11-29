$(function(){
	$('#oldpassword').focus(function(){
		if($(this).val()=="请输入原密码"){
			$(this).attr('type','password');
			$(this).val("");
		};
	});
	$('#oldpassword').blur(function(){
		if($(this).val()==""){
			$(this).attr('type','text');
			$(this).val("请输入原密码");
		};
	});
	$('#next1').bind('click',function(){
		
		
//		ajax
		turnpage('change-password2.html');
	});
})

