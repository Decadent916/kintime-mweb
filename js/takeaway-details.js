$(function(){
	//	图片展示区事件
	$(".img-link").bind('click', function(e) {
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
