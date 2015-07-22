mui.init({
	swipeBack: false,
	statusBarBackground: '#f7f7f7',
});

var main = null;
mui.plusReady(function() {
	console.log("当前页面URL："+plus.webview.currentWebview().getURL());
	main = mui.preload({
		id: 'html/main.html',
		url: 'html/main.html',
		styles: {
			zindex: 1
		},
		show: {
			aniShow: 'none'
		}
	});
	$("#clickBtn").on("tap", function() {
		
		main.show("slide-in-bottom", 200, function(){
			
			mui.currentWebview.hide("none");
		})
	});

});

//首页返回键处理
//处理逻辑：1秒内，连续两次按返回键，则退出应用；
var first = null;
mui.back = function() {

	//首次按键，提示‘再按一次退出应用’
	if (!first) {
		first = new Date().getTime();
		mui.toast('再按一次退出应用');
		setTimeout(function() {
			first = null;
		}, 1000);
	} else {
		if (new Date().getTime() - first < 1000) {
			plus.runtime.quit();
		}
	}
};