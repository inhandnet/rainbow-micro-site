
var MainSelector = function(view, homeBox, hotBox, categoryBox) {

	// 初始化属性

	// 定义视图和父容器
	this.view = view;
	this.homeBox = homeBox;
	this.hotBox = hotBox;
	this.categoryBox = categoryBox;
	
	this.homeBtn = this.view.find("[sid=homeBtn]");
	this.hotBtn = this.view.find("[sid=hotBtn]");
	this.categoryBtn = this.view.find("[sid=categoryBtn]");
	// 执行初始化操作
	this.init();
};

MainSelector.prototype.init = function() {

	this.homeBtn.on("click", this, this.onHomeBtnClick);
	this.hotBtn.on("click", this, this.onHotBtnClick);
	this.categoryBtn.on("click", this, this.onCategoryBtnClick);
};

MainSelector.prototype.onHomeBtnClick = function(event) {

	var self = event.data;
	self.homeBtn.addClass("on");
	self.hotBtn.removeClass("on");
	self.categoryBtn.removeClass("on");
	
	self.homeBox.removeClass("dn");
	self.hotBox.addClass("dn");
	self.categoryBox.addClass("dn");
};

MainSelector.prototype.onHotBtnClick = function(event) {

	var self = event.data;
	self.homeBtn.removeClass("on");
	self.hotBtn.addClass("on");
	self.categoryBtn.removeClass("on");
	
	self.homeBox.addClass("dn");
	self.hotBox.removeClass("dn");
	self.categoryBox.addClass("dn");
};


MainSelector.prototype.onCategoryBtnClick = function(event) {
	var self = event.data;
	self.homeBtn.removeClass("on");
	self.hotBtn.removeClass("on");
	self.categoryBtn.addClass("on");
	
	self.homeBox.addClass("dn");
	self.hotBox.addClass("dn");
	self.categoryBox.removeClass("dn");
};
