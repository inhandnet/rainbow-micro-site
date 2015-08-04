
var VideoList = function(id) {
	
	// 初始化属性
	this.videoItemList = [];
	this.dataList = [];
	this.count = 0;
	this.pageSize = 6;

	// 定义视图和父容器
	this.view = $("#" + id);
//	this.mView = mui("#" + id);//调用下拉刷新必须使用mui选择器
	// 执行初始化操作
	this.init();
};

VideoList.prototype.init = function() {

	
};

VideoList.prototype.setData = function(dataList) {

	this.dataList = dataList;
	for(var index in this.dataList)
		this.videoItemList.push(new VideoItem(this.dataList[index], this));
};


//videoList.prototype.pullupRefresh = function() {
//	this.loadData();
//	this.mView.pullRefresh().endPullupToRefresh(false); //参数为true代表没有更多数据了。
//}

VideoList.prototype.addItem = function(itemHtml) {

	return this.view.append(itemHtml).children().last();
};

var VideoItem = function(data, container) {

	// 初始化属性
	this.data = data;
	this.id = data.id;
	this.classId = data.classId;
	this.title = data.title;
	this.posterUrl = data.vPosterUrl;
	this.playLength = data.playLength;
	
	// 定义视图和父容器
	this.view = null;
	this.container = container;

	// 执行初始化操作
	this.init();
};

VideoItem.template = null;

VideoItem.prototype.init = function() {
	
	if(VideoItem.template == null)
		VideoItem.template = $("#video_item_template").html();
	
	this.view = this.container.addItem(VideoItem.template);

	this.view.find("[sid=poster]").attr("src", this.posterUrl);
	this.view.find("[sid=poster]").attr("alt", this.title);
	this.view.find("[sid=playLength]").html(this.playLength );
	this.view.find("[sid=title]").html(this.getTitle());
	this.view.on("click", this, this.onVideoClick);
};

VideoItem.prototype.onVideoClick = function(event) {
	
	var self = event.data;
	window.location.href = 'play.html?wefun-videoId='+self.id;
};

VideoItem.prototype.getTitle = function() {
	
	if(this.title.length > 15) {
		
		return this.title.substr(0,12) + "...";
	}
	
	return this.title;
};


