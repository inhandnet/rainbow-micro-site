var VideoPlayer = function(view, data) {

	// 初始化属性
	this.data = data;
	//this.adData = adData;
	this.videoUrl = data.videoUrl;
	this.isAdEnd = false;
	this.currentTime = 0;

	// 定义视图和父容器
	this.view = view;
    var currentPlayer=document.getElementById("_player");

    this.player = currentPlayer;
    console.log("_player : ");
    console.log(this.player);

	// 执行初始化操作
	this.init();
};
VideoPlayer.prototype.init = function() {
	
	//if(!this.adData) {
		this.isAdEnd = true;
	//}
	this.view.find("[sid=title]").html(this.data.title);
	this.view.find("[sid=playLength]").html(this.data.playLength + "");
	this.view.find("[sid=poster]").attr("src", this.data.hPosterUrl);
	this.view.find("#player_trigger").on("click", this, this.onPlayBtnClick);
	var self = this;
	this.player.addEventListener("timeupdate", function(event) {
		self.timeupdate(event);
	}, false);

	this.player.addEventListener('ended', function() {
		self.onVideoEnd();
	}, false);

};

VideoPlayer.prototype.onPlayBtnClick = function(event) {

	var self = event.data;
	if (self.isAdEnd) {
		if (self.currentTime == 0) {
			self.player.src = self.videoUrl;
			self.setHistory();
		} else {
			self.player.currentTime = self.currentTime;
		}
	} else {
		//self.player.src = self.adData.adUrl;
	}

	self.player.controls = true;

	self.player.play();
};

VideoPlayer.prototype.timeupdate = function(event) {

	var time = this.player.currentTime;
	if (!this.isAdEnd && time - this.currentTime > 1) {
		this.player.currentTime = this.currentTime;
		return false;
	}
	this.currentTime = time;
};

VideoPlayer.prototype.onVideoEnd = function(event) {

	if (!this.isAdEnd) {
		this.player.src = this.videoUrl;
		this.player.play();
		this.isAdEnd = true;
		this.currentTime = 0;
		return false;
	}
	document.webkitCancelFullScreen(); //播放完毕自动退出全屏
};

VideoPlayer.prototype.setHistory = function() {

	var historyJson = $.cookie("wefun-history");
	var history = [];
	if(historyJson){
		history = $.parseJSON(historyJson);
	}
	for (var index in history) {
		if(this.data.id == history[index].id) {
			history.splice(index,1); 
		}
	}
	history.push(this.data);
	$.cookie("wefun-history", $.toJSON(history));
};

var AndroidPlayer = function(view, data) {

	// 初始化属性
	this.data = data;
	//this.adData = adData;
	this.videoUrl = data.videoUrl;
	this.isAdEnd = false;
	this.currentTime = 0;
	this.timeoutId = null;
	this.adTimeCount = 0;
	
	// 定义视图和父容器
	this.view = view;

    var currentPlayer=document.getElementById("_player");

    this.player = currentPlayer;
    console.log("_player : ");
    console.log(this.player);

	this.playerTrigger = this.view.find("#player_trigger");
	this.playerBigBtn = this.view.find("#player_bigBtn");
	this.adTimeCountBox = this.view.find("#adTimeCount");

	// 执行初始化操作
	this.init();
};
AndroidPlayer.prototype.init = function() {

	//if(!this.adData) {
		this.isAdEnd = true;
		this.initVideo();
	//} else {
	//	this.initAd();
	//}

	this.view.find("[sid=title]").html(this.data.title);
	this.view.find("[sid=playLength]").html(this.data.playLength + "");
	this.view.find("[sid=poster]").attr("src", this.data.hPosterUrl);
	
	this.playerTrigger.on("click", this, this.onPlayerTriggerClick);

	var self = this;
	this.playerBigBtn.on("click", this, function() {

		if($(self.player).is(":hidden")){
			$(self.player).show();
			self.adTimeCountBox.show();
			self.view.find("[sid=posterBox]").hide();
			self.playerBigBtn.addClass("stop");
			self.playerBigBtn.removeClass("start");
			self.player.play();
			self.playerBigBtn.hide();
		} else if (self.player.paused) {
			
			self.playerBigBtn.addClass("stop");
			self.playerBigBtn.removeClass("start");
			self.player.play();
			self.playerBigBtn.hide();
		} else {
			self.player.pause();
			self.playerBigBtn.removeClass("stop");
			self.playerBigBtn.addClass("start");
			clearTimeout(self.timeoutId);
		}
	});

    $("#playerSwitch").on("click", this, function() {
        playVideo();
        self.player.src = self.videoUrl;
    });
	
	this.player.addEventListener('ended', function() {
		self.onVideoEnd();
	}, false);

	this.player.addEventListener("timeupdate", function(event) {
		self.timeupdate(event);
	}, false);
	
	this.player.addEventListener('ended', function() {
		document.webkitCancelFullScreen(); //播放完毕自动退出全屏
	}, false);
	
};

function playVideo(){
    document.getElementById("videoPlay").style.display="block";
    document.getElementById("introduce").style.display="none";
    //document.getElementById("_player").autoplay="autoplay";
    //document.getElementById("_player").style.display="block";
    //document.getElementById("posterBox").style.display="none";
    //document.getElementById("player_bigBtn").style.display="none";
    document.getElementsByClassName("float")[0].style.display="none";
    document.getElementById("videoPlay").style.backgroundColor="#000000";
}

AndroidPlayer.prototype.initVideo = function() {
		$(this.player).attr("controls", "controls");
		this.player.controls = true;
		this.isAdEnd = true;
		this.currentTime = 0;

		this.adTimeCountBox.hide();
		this.playerTrigger.hide();
		
		this.setHistory();
};

AndroidPlayer.prototype.initAd = function() {
	
	//this.player.src = this.adData.adUrl;
};

AndroidPlayer.prototype.onTriggerClick = function(event) {

	var self = event.data;
	self.playBtn.show();
};

AndroidPlayer.prototype.onPlayBtnClick = function(event) {

	var self = event.data;

    console.log("movie play 198");

	self.player.play();
};

AndroidPlayer.prototype.onPauseBtnClick = function(event) {

	var self = event.data;
	self.player.pause();
};

AndroidPlayer.prototype.timeupdate = function(event) {

	var time = this.player.currentTime;
	if (!this.isAdEnd) {
		//this.adTimeCountBox.html(Math.round(this.adData.adLength - time));
	}
	this.currentTime = time;
};

AndroidPlayer.prototype.onVideoEnd = function(event) {

	if (!this.isAdEnd) {
		this.player.src = this.videoUrl;
		$(this.player).attr("controls", "controls");
		this.player.controls = true;
		this.player.play();
		this.isAdEnd = true;
		this.currentTime = 0;

		this.adTimeCountBox.hide();
		this.playerTrigger.hide();
		this.playerBigBtn.hide();
		
		this.setHistory();
		return false;
	}
	document.webkitCancelFullScreen(); //播放完毕自动退出全屏
};

AndroidPlayer.prototype.onPlayerTriggerClick = function(event) {

	var self = event.data;
	if (self.playerBigBtn.is(":visible")) {
		return false;
	}
	self.playerBigBtn.show();
	self.timeoutId = setTimeout("$('#_video_box').find('#player_bigBtn').hide();", 10)
};

AndroidPlayer.prototype.launchFullScreen = function(element) {
	if (element.requestFullScreen) {
		element.requestFullScreen();
	} else if (element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if (element.webkitRequestFullScreen) {
		element.webkitRequestFullScreen();
	}
};

AndroidPlayer.prototype.setHistory = function() {

	var historyJson = $.cookie("wefun-history");
	var history = [];
	if(historyJson){
		history = $.parseJSON(historyJson);
	}
	for (var index in history) {
		if(this.data.id == history[index].id) {
			history.splice(index,1); 
		}
	}
	history.push(this.data);
	$.cookie("wefun-history", $.toJSON(history));
};
