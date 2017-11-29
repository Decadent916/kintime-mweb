$(function(){
	var color = 0;
	var before = $(window).scrollTop();
	var m_top = $('.menu-con').offset().top;
	var t_height = $('.top-navbar').height();
	var top = m_top-t_height;
	var top2 = Math.floor($('.shop-info').height()+$('.menu-con').height());
	var com_height = $(window).height()-t_height-$('.menu-con').height()-$('.shopping-cart-con').height();//	点菜栏的高度
	$(window).scroll(function(){
		var scrolltop = $(window).scrollTop();
		var delta = scrolltop - before;
		var color_add = 1.1/top;
		if(delta>0){
			if(scrolltop<top){
				color = color_add*scrolltop;
				$('.top-navbar').css('background','rgba(255,255,255,'+color+')');
				if(color>0.9){
					$('.return-con .iconfont').css('color','#333');
					$('.search-box').css('background','#E7E6E7');
				}
			}else{
				$('body').addClass('active');
				$('.menu-con').addClass('active');
				$('.com-left-con').addClass('active');
				$('.com-right-con').addClass('active');
				$('.main-con').css('margin-top','1rem');
				$('.com-left-con').css('height',com_height);
				$('.com-right-con').css('height',com_height);
			}
		}else{
			if(scrolltop<top){
				color = color_add*scrolltop;
				$('.top-navbar').css('background','rgba(255,255,255,'+color+')');
				if(color<0.9){
					$('.return-con .iconfont').css('color','#fff');
					$('.search-box').css('background','#fff');
				};
				$('.menu-con').removeClass('active');
				$('.main-con').css('margin-top','0');
				$('.com-left-con').removeClass('active');
				$('.com-right-con').removeClass('active');
			}
		};
		before = scrolltop;
	});
	
//	菜单数量事件
	$('.num-con .add-btn').click(function(){
		var food_cart_num = parseInt($(this).parent().find('.food-cart-num').html());
		food_cart_num++;
		$(this).parent().find('.food-cart-num').html(food_cart_num);
		$(this).parent().find('.food-cart-num').css('display','block');
		$(this).parent().find('.less-btn').css('display','block');
	});
	$('.num-con .less-btn').click(function(){
		var food_cart_num = parseInt($(this).parent().find('.food-cart-num').html());
		food_cart_num--;
		if(food_cart_num === 0){
			$(this).parent().find('.food-cart-num').html(food_cart_num);
			$(this).parent().find('.food-cart-num').css('display',' none');
			$(this).parent().find('.less-btn').css('display','none');
		}else{
			$(this).parent().find('.food-cart-num').html(food_cart_num);
			$(this).parent().find('.food-cart-num').css('display','block');
			$(this).parent().find('.less-btn').css('display','block');
		}
		
	});
	
//	菜单栏点击事件
	$('.menu-con .menu-item').bind('click',function(e){
		$('.menu-con .menu-item').removeClass('active');
		$('.main-con .item').removeClass('active');
		$(this).addClass('active');
		$('.main-con .item').eq($(this).index()).addClass('active');
		//	图片
		if($('.details-con').hasClass('active')){
			var dic = 0;
			$('.details-img-item').each(function(){
				dic = dic + $(this).outerWidth(true);
			});
			$('.details-img-con').css('width',dic+1);
		};
	});
	
//	左右侧联动
	var before2 = $('.com-right-con').scrollTop();
	$('.com-right-con').bind('scroll',function(e){
		e.preventDefault();
		var scrolltop2 = $('.com-right-con').scrollTop();
		var delta2 = scrolltop2 - before2;
		if(delta2<0&&Math.floor($('.right-sort').eq(0).offset().top)>(top2-2)&&Math.floor($('.right-sort').eq(0).offset().top)<(top2+2)){
			$('body').removeClass('active');
//			$('.main-con').removeClass('active');
			$('.right-sort').removeClass('active');
//			$('.menu-con').removeClass('active');
//			$('.main-con').css('margin-top','0');
//			$('.com-left-con').removeClass('active');
//			$('.com-right-con').removeClass('active');
		}else if(delta2>0){
			$('.right-sort').each(function(e){
				if(Math.floor($(this).offset().top)<(top2-1)&&Math.floor($(this).offset().top)>(top2-1-$(this).height())){
					$('.right-sort').removeClass('active');
					$(this).addClass('active');
				}
			})
		}else if(delta2<0){
			$('.right-sort').each(function(e){
				if(Math.floor($(this).offset().top) > (top2-1)&& Math.floor($(this).offset().top) < (top2+Math.floor($('.right-sort').eq($(this).index()-1).height()))&&!($(this).index()== 0)){
					$(this).removeClass('active');
					$('.right-sort').eq($(this).index()-1).addClass('active');
				}
			})
		}
		before2 = scrolltop2;
		
	});
	$('.left-sort').bind('click',function(e){
		e.preventDefault();
		$('.left-sort').removeClass('active');
		$(this).addClass('active');
		$('html,body').animate({
			scrollTop:top+1
		},500);
		var ScrollTop = 0;
		for(var i=0;i<$(this).index();i++){
			ScrollTop = ScrollTop+$('.right-sort').eq(0).height()+2*$('.right-sort-title').height()+2;
		}
		$('.com-right-con').animate({
			scrollTop:ScrollTop
		},500);
	})
	
//	规格选择
	$('.price-num-s .num-con').bind('click',function(e){
		$('.norm-discon').css('display', 'block');
	});
	$('.norm-con').bind('click',function(e){
		e.stopPropagation();
	});
	$('.content-item-option .option-item').bind('click',function(e){
		$(this).parent('.content-item-option').find('.option-item').removeClass('active');
		$(this).addClass('active');
	});
	$('.join-cart-con .join-btn').bind('click',function(e){
		$('.norm-discon').css('display', 'none');
	})
	$('.norm-discon').bind('click',function(e){
		e.stopPropagation();
		$(this).css('display','none');
	});
//	图片展示区事件
	$(".details-img-item,.shop-info-file").bind('click', function(e) {
		$(".img-discon").css('display', 'block');
	});
	//	左右滑动图片
	var ImageSwiper = function(imgs, minRange) {
		this.imgBox = imgs
		this.imgs = imgs.children
		this.cur_img = 1 //起始图片设为1 ,而非0,将在图片显示方法中作-1处理
		this.ready_moved = true //判断每次滑动开始的标记变量
		this.imgs_count = this.imgs.length
		this.touchX //触控开始的手指最初落点
		this.minRange = Number(minRange)
		this.fadeIn //图片切换的方式,这里使用淡入淡出
		this.fadeOut
		this.bindTouchEvn() //初始化绑定滑动事件
		this.showPic(this.cur_img) //显示图片方法,注意其中图片编号的-1处理
	};
	ImageSwiper.prototype.bindTouchEvn = function() {
		this.imgBox.addEventListener('touchstart', this.touchstart.bind(this), false);
		this.imgBox.addEventListener('touchmove', this.touchmove.bind(this), false);
		this.imgBox.addEventListener('touchend', this.touchend.bind(this), false);
	};
	ImageSwiper.prototype.touchstart = function(e) {
		if(this.ready_moved) {
			var touch = e.touches[0];
			this.touchX = touch.pageX;
			this.ready_moved = false;
		};
	};
	ImageSwiper.prototype.touchmove = function(e) {
		e.preventDefault();
		var minRange = this.minRange;
		var touchX = this.touchX;
		var imgs_count = this.imgs_count;

		if(!this.ready_moved) {

			var release = e.changedTouches[0];
			var releasedAt = release.pageX;
			if(releasedAt + minRange < touchX) {
				this.ready_moved = true;
				if(this.cur_img > (imgs_count - 1)) {
					this.cur_img = 0;
				};
				this.cur_img++;
				this.showPic(this.cur_img);

			} else if(releasedAt - minRange > touchX) {
				if(this.cur_img <= 1) {
					this.cur_img = imgs_count + 1
				};
				this.cur_img--;
				this.showPic(this.cur_img);
				this.ready_moved = true;
			};
		};

	};

	ImageSwiper.prototype.touchend = function(e) {
		e.preventDefault();
		var minRange = this.minRange;
		var touchX = this.touchX;
		var imgs_count = this.imgs_count;
		if(!this.ready_moved) {
			var release = e.changedTouches[0];
			var releasedAt = release.pageX;
			if(releasedAt + minRange < touchX) {
				this.ready_moved = true;
				if(this.cur_img > (imgs_count - 1)) {
					this.cur_img = 0;
				};
				this.cur_img++;
				showPic(this.cur_img);

			} else if(releasedAt - minRange > touchX) {
				if(this.cur_img <= 1) {
					this.cur_img = imgs_count + 1
				};
				this.cur_img--;
				showPic(this.cur_img);
				this.ready_moved = true;
			}else {
				$(".img-discon").css('display', 'none');
			};
		};

	};
	//在样式表中设置好 .fadeIn 的透明度为0
	ImageSwiper.prototype.fadeIn = function(e) {
		e.classList.add("fadein");
	};

	ImageSwiper.prototype.fadeOut = function(e) {
		Array.prototype.forEach.call(e, function(e) {
			e.className = "img-item";
		});
	};

	ImageSwiper.prototype.showPic = function(cur_img) {
		this.hidePics(this.imgs);
		//得到图片元素的真实索引
		var index = cur_img - 1;
		this.fadeIn(this.imgs[index]);
		$('.img-nums').html(this.imgs_count);
		$('.img-num').html(this.cur_img);
	}
	ImageSwiper.prototype.hidePics = function(e) {
		this.fadeOut(e);

	}
	//传参
	var imgs = new ImageSwiper(document.getElementById('carousel-con'), 30);
	
	

	

})
