var historyList = null;

$(function() {

	$(".backi").on("click", this, function() {

		history.go(-1)
	});

	var historyJson = $.cookie("wefun-history");
	var history = [];
	if(historyJson){
		history = $.parseJSON(historyJson);
	}
	
	historyList = new HistoryList("historyList", history);
});

var HistoryList = function(id, dataList) {
	
	// 初始化属性
	this.videoItemList = [];
	this.dataList = dataList;

	// 定义视图和父容器
	this.view = $("#" + id);
	
	// 执行初始化操作
	this.init();
};

HistoryList.prototype.init = function() {

	var index = this.dataList.length - 1;
	for( ; index >= 0; index--) {
		this.videoItemList.push(new HistoryItem(this.dataList[index], this));
	}
};

HistoryList.prototype.addItem = function(itemHtml) {

	return this.view.append(itemHtml).children().last();
};


var HistoryItem = function(data, container) {
	
	// 初始化属性
	this.data = data;
	this.id = data.id;
	this.classId = data.classId;
	this.title = data.title;
	this.posterUrl = data.hPosterUrl;
	this.playLength = data.playLength;
	// 定义视图和父容器
	this.view = null;
	this.container = container;

	// 执行初始化操作
	this.init();
};

HistoryItem.template = null;

HistoryItem.prototype.init = function() {
	
	if(HistoryItem.template == null)
		HistoryItem.template = $("#history_item_template").html();
	
	this.view = this.container.addItem(HistoryItem.template);

	this.view.find("[sid=poster]").attr("src", this.posterUrl);
	this.view.find("[sid=poster]").attr("alt", this.title);
	this.view.find("[sid=playLength]").html(this.playLength + " min");
	this.view.find("[sid=title]").html(this.title);
	this.view.on("click", this, this.onVideoClick);
};

HistoryItem.prototype.onVideoClick = function(event) {
	
	var self = event.data;
	window.location.href = 'play.html?wefun-videoId='+self.id;
};
