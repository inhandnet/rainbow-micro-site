var CommonSelector = function(btnList, boxList) {
	
	this.btnList = btnList;
	this.boxList = boxList;
	
	this.init();
};

CommonSelector.prototype.init = function() {
	
	var self = this;
	for(var index in this.btnList) {
		this.btnList[index].on("click", {self:this,selectIndex:index}, this.onBtnClick);
	}
	
};

CommonSelector.prototype.onBtnClick = function(event) {
	
	var self = event.data.self;
	var selectIndex = event.data.selectIndex;
	for(var index in self.btnList) {
		if(selectIndex == index)
			self.btnList[index].addClass("on");
		else
			self.btnList[index].removeClass("on");
	}
	for(var index in self.boxList) {
		if(selectIndex == index)
			self.boxList[index].removeClass("dn");
		else
			self.boxList[index].addClass("dn");
	}
}
