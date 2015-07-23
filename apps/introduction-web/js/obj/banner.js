$(document).ready(function() {
	var lst = [
		'../pic/ad_banner1.jpg',
		'../pic/ad_banner2.gif'

	];
	var htm = '';
	$(lst).each(function(k, v) {
		htm += "<li name='is_tj_r' videoId='"+(k+1)+"' style='padding-right: 0;'>";
		htm += '<img src="'+v+'" />';
		htm += '</li>';
		$('.ad_btn_wrap').append('<a href="javascript:;"></a>');
	});
	/*
	 * 注意下面一截代码！
	 * 这些代码一个都不能少，否则css会出问题。
	 * 只需要把lst换成对应的图片集合就ok了
	 */
	$("#in ul").empty().append(htm);
	$("#in ul").css("width", (lst.length * 100) + "%");
	$("#in ul li").css("width", (100 / lst.length) + "%");
	$(lst).each(function(k1, v1) {
		if (k1 != 0)
			$(".ad_btn_wrap a").eq(k1).css("margin-left", "2%");
	});
	bindEvent();
});
var adIndex = 0,
	timer,
	autoTimer;
 //广告图的滚动
function adMove(el) {
	clearInterval(autoTimer);
	var ind = 0;
	var start = el.scrollLeft;
	var end = el.clientWidth * adIndex;
	var change = end - start;
	var max = $('#in li').length;

	clearInterval(timer);
	timer = setInterval(function() {
		ind++;
		if (ind == 20) {
			$('.ad_btn_wrap a').eq(adIndex).css('background', 'black'); //ff7b23
			clearInterval(timer);
			autoTimer = setInterval(function() {
				adIndex++;
				if (adIndex >= max) {
					adIndex = 0;
				};
				$('.ad_btn_wrap a').css('background', '#888888');
				adMove(document.getElementById('in'));
			}, 3333);
		}
		el.scrollLeft = Tween.Expo.easeOut(ind, start, change, 20);
	}, 33);
}


function bindEvent() {
	//广告事件
	$('#in').on('touchstart', 'img', function(event) {
		var wrap = $(this).parent().parent().parent();
		adIndex = $(this).parent().index();
		pageXStart = event.originalEvent.targetTouches[0].pageX;
	});

	$('#in').on('touchend', 'img', function(event) {
		pageXEnd = event.originalEvent.changedTouches[0].pageX;
		if (pageXEnd - pageXStart > 30) {
			// 左移  && adIndex != 0
			if (adIndex <= 0) {
				adIndex = $('#in li').length;
			};
			adIndex--;
			$('.ad_btn_wrap a').css('background', '#888888');
			adMove(document.getElementById('in'));
		} else if (pageXEnd - pageXStart < -30) {
			// 右移 && adIndex + 1 != $('#in li').length
			if (adIndex + 1 >= $('#in li').length) {
				adIndex = -1;
			};
			adIndex++;
			$('.ad_btn_wrap a').css('background', '#888888');
			adMove(document.getElementById('in'));
		}
	});

	autoTimer = setInterval(function() {
		adIndex++;
		if (adIndex >= 4) {
			adIndex = 0;
		}
		$('.ad_btn_wrap a').css('background', '#888888');
		adMove(document.getElementById('in'));
	}, 3333);
	
	$("[name=is_tj_r]").on("click", this, function(){
		
		
	});
}