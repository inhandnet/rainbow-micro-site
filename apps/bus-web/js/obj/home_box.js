var HomeBox = function(view, recommandList, classList) {

	// 初始化属性
	this.recommandVideoItems = [];
	this.classBoxList = [];
	this.videoList = null;
	this.recommandList = recommandList;
	this.classList = classList;
	this.classVedioData = null;
	
	// 定义视图和父容器
	this.view = view;

	// 执行初始化操作
	this.init();
};

HomeBox.prototype.init = function() {

	
	//初始化recommend
	for (var index in this.recommandList) {
		this.recommandVideoItems.push(new RecommandVideoItem(this.recommandList[index], this));
	}
	
	this.loadVideoList();
	
	this.view.find("[sid=seemoreBtn]").on("click", this, this.onSeemoreBtnClick);
};

HomeBox.prototype.loadVideoList = function() {

	var self = this;
	
	myAjax({
		type : "get",
		url : "/movie-web/data/list.xml",
		dataType : 'xml',
		success : function(xml) {
			
			self.classVedioList = [];
			for(var index in self.classList) {
				
				var classId = self.classList[index].id;
				var videos = [];
				
				$(xml).find("video[classId="+classId+"]").each(function(index, domEle){
				
					if(index > 2) {
						return false;
					}
					var item = $(domEle);
					var videoData = {};
					videoData.id = item.find("id").text();
					videoData.classId = item.find("classId").text();
					videoData.title = item.find("title").text();
					videoData.hPosterUrl = item.find("hPosterUrl").text();
					videoData.vPosterUrl = item.find("vPosterUrl").text();
					videoData.playLength = item.find("playLength").text();
					videos.push(videoData);
				});
				
				self.classList[index].videos = videos;
			}
			self.initClassBox();
		},
		error : function(e) {
			//alert(e)
		}
	});
	
};

HomeBox.prototype.initClassBox = function() {

	//初始化class
	this.classBoxList.push(new ClassBox(this.classList[0],this));
	this.classBoxList.push(new ClassBox(this.classList[1],this));
};



HomeBox.prototype.onSeemoreBtnClick = function(event) {

	var self = event.data;
	for(var i = 2 ; i < self.classList.length; i++) {
		
		self.classBoxList.push(new ClassBox(self.classList[i],self));
	}
	
	self.view.find("[sid=seemoreBtn]").hide();
};

HomeBox.prototype.addRecommandVideoItem = function(html) {

	return this.view.find("[sid=recommandList]").append(html).children().last();
}

HomeBox.prototype.addClassBox = function(html) {

	return this.view.find("[sid=classList]").append(html).children().last();
}


var ClassBox = function(data, container) {

	// 初始化属性
	this.data = data;
	this.videos = [];

	// 定义视图和父容器
	this.view = null;
	this.container = container;

	// 执行初始化操作
	this.init();
};

ClassBox.template = null;

ClassBox.prototype.init = function() {

	if (ClassBox.template == null)
		ClassBox.template = $("#class_box_template").html();

	this.view = this.container.addClassBox(ClassBox.template);

	this.view.find("[sid=className]").html(this.data.name);
	this.view.find("[sid=moreBtn]").on("click", this, this.onMoreBtnClick);
	
	for (var index in this.data.videos) {
		this.videos.push(new ClassVideoItem(this.data.videos[index], this));
	}
};

ClassBox.prototype.onMoreBtnClick = function(event) {

	var self = event.data;
	window.location.href = "list.html?wefun-classId="+self.data.id+"&wefun-className="+self.data.name;
};

ClassBox.prototype.addItem = function(html) {

	return this.view.find("[sid=vedioList]").append(html).children().last();
};


var ClassVideoItem = function(data, container) {

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

ClassVideoItem.template = null;

ClassVideoItem.prototype.init = function() {

	if (ClassVideoItem.template == null)
		ClassVideoItem.template = $("#class_video_item_template").html();

	this.view = this.container.addItem(ClassVideoItem.template);

	this.view.find("[sid=poster]").attr("src", this.posterUrl);
	this.view.find("[sid=playLength]").html(this.playLength );
	this.view.find("[sid=title]").html(this.getTitle());
	this.view.on("click", this, this.onViewClick);
};

ClassVideoItem.prototype.onViewClick = function(event) {

	var self = event.data;
	window.location.href = "play.html?wefun-videoId="+self.id;
};

ClassVideoItem.prototype.getTitle = function() {
	
	if(this.title.length > 15) {
		
		return this.title.substr(0,12) + "...";
	}
	
	return this.title;
};


var RecommandVideoItem = function(data, container) {

	// 初始化属性
	this.data = data;
	this.id = data.id;
	this.classId = data.classId;
	this.title = data.title;
	this.posterUrl = data.posterUrl;
	this.playLength = data.playLength;
	
	// 定义视图和父容器
	this.view = null;
	this.container = container;

	// 执行初始化操作
	this.init();
};

RecommandVideoItem.template = null;

RecommandVideoItem.prototype.init = function() {

	if (RecommandVideoItem.template == null)
		RecommandVideoItem.template = $("#recommend_video_item_template").html();

	this.view = this.container.addRecommandVideoItem(RecommandVideoItem.template);

	this.view.find("[sid=poster]").attr("src", this.posterUrl);
	this.view.find("[sid=playLength]").html(this.playLength + " min");
	this.view.find("[sid=title]").html(this.getTitle());
	this.view.on("click", this, this.onViewClick);
};

RecommandVideoItem.prototype.onViewClick = function(event) {

	var self = event.data;
	window.location.href = "play.html?wefun-videoId="+self.id
};

RecommandVideoItem.prototype.getTitle = function() {
	
	if(this.title.length > 33) {
		
		return this.title.substr(0,30) + "...";
	}
	
	return this.title;
};