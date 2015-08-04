var resultList = null;

$(function() {

	$(".backi").on("click", this, function() {

		history.go(-1)
	});

	$(".historyi").on("click", this, function() {

		window.location.href = 'history.html';
	});
	
	var keywords = getUrlParam("keywords");
	
	var results = [];
	myAjax({
		type : "get",
		url : "/movie-web/data/list.xml",
		dataType : 'xml',
		success : function(xml) {
			
			$(xml).find("video").each(function(index, domEle){
				
				var item = $(domEle);
				if(item.find("title").text().toLowerCase().indexOf(keywords.toLowerCase()) > -1) {
					var videoData = {};
					videoData.id = item.find("id").text();
					videoData.classId = item.find("classId").text();
					videoData.title = item.find("title").text();
					videoData.hPosterUrl = item.find("hPosterUrl").text();
					videoData.vPosterUrl = item.find("vPosterUrl").text();
					videoData.playLength = item.find("playLength").text();
					results.push(videoData)
				}
			});
			resultList = new ResultList("resultList", results);
			
		},
		error : function(e) {
			
		}
	});

});

var ResultList = function(id, dataList) {
	
	// 初始化属性
	this.videoItemList = [];
	this.dataList = dataList;

	// 定义视图和父容器
	this.view = $("#" + id);
	
	// 执行初始化操作
	this.init();
};

ResultList.prototype.init = function() {

	for(var index in this.dataList) {
		this.videoItemList.push(new ResultItem(this.dataList[index], this));
	}
};

ResultList.prototype.addItem = function(itemHtml) {

	return this.view.append(itemHtml).children().last();
};


var ResultItem = function(data, container) {
	
	// 初始化属性
	this.data = data;
	this.id = data.id;
	this.classId = data.classId;
	this.title = data.title;
	this.posterUrl = data.vPosterUrl;
	this.playLength = data.playLength;
	this.intro = data.intro;
	// 定义视图和父容器
	this.view = null;
	this.container = container;

	// 执行初始化操作
	this.init();
};

ResultItem.template = null;

ResultItem.prototype.init = function() {
	
	if(ResultItem.template == null)
		ResultItem.template = $("#result_item_template").html();
	
	this.view = this.container.addItem(ResultItem.template);

	this.view.find("[sid=poster]").attr("src", this.posterUrl);
	this.view.find("[sid=poster]").attr("alt", this.title);
	this.view.find("[sid=playLength]").html(this.playLength );
	this.view.find("[sid=title]").html(this.getTitle());
	this.view.find("[sid=intro]").html(this.intro);
	this.view.on("click", this, this.onVideoClick);
};

ResultItem.prototype.onVideoClick = function(event) {
	
	var self = event.data;
	window.location.href = 'play.html?wefun-videoId='+self.id;
};

ResultItem.prototype.getTitle = function() {
	
	if(this.title.length > 43) {
		
		return this.title.substr(0,40) + "...";
	}
	
	return this.title;
};

ResultItem.prototype.getIntro = function() {
	
	if(this.intro.length > 125) {
		
		return this.intro.substr(0,120) + "...";
	}
	
	return this.intro;
};



