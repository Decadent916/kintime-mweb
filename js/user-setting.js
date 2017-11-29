$(function(){
	////	昵称修改
	$('#user-name').on('tap',function(e){
		$('.discount-con').show();
		$('.user-namecon').show();
		$('#user-newname').val($('#user-name .text-con').text());
		$('#user-newname').on('input propertychange',function(){
			$('#save-btn').attr('disabled',false);
			$('#save-btn').addClass('active');
		});
		$('#cancel-btn').on('tap',function(){
			$('.discount-con').hide();
			$('.user-namecon').hide();
			$('#save-btn').attr('disabled',true);
			$('#save-btn').removeClass('active');
		});
		$('#save-btn').on('tap',function(){
			$('.discount-con').hide();
			$('.user-namecon').hide();
			$('#save-btn').attr('disabled',true);
			$('#save-btn').removeClass('active');
			
//			ajax
			
			
			
			
			
		})
	});
//	性别修改
	$('#user-sex').on('tap',function(e){
		if($('#user-sex .text-con').text() === '男'){
			$('#man').prop('checked',true);
		}else{
			$('#woman').prop('checked',true);
		};
		$('.discount-con').show();
		$('.user-sexcon').show();
		$('#sex-cancel-btn').on('tap',function(){
			$('.discount-con').hide();
			$('.user-sexcon').hide();
		})
		$('#sex-save-btn').on('tap',function(){
			$('.discount-con').hide();
			$('.user-sexcon').hide();
			
			
//			ajax
			
			
			
			
			
		});
	});
//	手机号
	$('#user-phone').on('tap',function(){
		location.href="change-phone.html";
	});
//	密码
	$('#user-password').on('tap',function(){
		location.href="change-password.html";
	})
//	头像
	$('#user-img').on('tap',function(e){
		$('.discount-con').show();
		$('.user-avatar').show();
		var file;
		$('#album,#camera').on('change',function(e){
			$('.discount-con').hide();
			$('.user-avatar').hide();
			file = e.target.files[0];
			var reader = new FileReader();
			reader.onload = function(e){
				if(typeof(Storage)!=='undefined'){
					localStorage.avatar = e.target.result;
					location.href=('avatar-cut.html');
				}else{
					alert("浏览器不支持");
				}
			};
			reader.readAsDataURL(file);
		});
	});
//	蒙板
	$('.discount-con').on('tap',function(e){
		$('.user-namecon').hide();
		$('.user-sexcon').hide();
		$('.user-avatar').hide();
		$('.discount-con').hide();
	});
	$('.discount-con .user-namecon,.discount-con .user-sexcon,.discount-con .user-avatar').on('tap',function(e){
		e.stopPropagation();
	})
})
