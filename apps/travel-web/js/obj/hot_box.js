var HotBox = function(view) {
	
	// 初始化属性
	this.data = null;
	this.top3Videos = [];
	this.hotVideos = [];

	// 定义视图和父容器
	this.view = view;

	// 执行初始化操作
	this.init();
};

HotBox.prototype.init = function() {
	
};

HotBox.prototype.addTop3Video = function(html) {
	
	return this.view.find("[sid=top3Container]").append(html).children().last();
};

HotBox.prototype.addHotVideo = function(html) {
	
	return this.view.find("[sid=hotVideoContainer]").append(html).children().last();
};
