var titleBar = null;
var player = null;
var commonSelector = null;

var videoData = null;
var adData = null;

$(function() {

	$(".backi").on("click", this, function() {

		history.go(-1)
	});

	$(".historyi").on("click", this, function() {

		window.location.href = 'history.html';
	});

	commonSelector = new CommonSelector([$("#recommendBtn"), $("#overviewBtn")], [$("#recommendBox"), $("#overviewBox")]);
	$("#recommendBox").find(".box").on("click", function() {

		window.location.href = 'play.html?wefun-videoId=' + $(this).attr("videoId");
	});

	loadVideoData();
});

function loadVideoData() {

	var videoId = getUrlParam("wefun-videoId");

	myAjax({
		type: "get",
		url: "/movie-web/data/video_" + videoId + ".xml",
		dataType: 'xml',
		success: function(data) {

			if (!data) {
				alert("Video load failed!");
				return;
			}
			videoData = {};
			videoData.id = $(data).find("id").text();
			videoData.classId = $(data).find("classId").text();
			videoData.title = $(data).find("title").text();
			videoData.videoUrl = $(data).find("videoUrl").text();
			videoData.hPosterUrl = $(data).find("hPosterUrl").text();
			videoData.vPosterUrl = $(data).find("vPosterUrl").text();
			videoData.playLength = $(data).find("playLength").text();
			videoData.fileSize = $(data).find("fileSize").text();
			videoData.director = $(data).find("director").text();
			videoData.writer = $(data).find("writer").text();
			videoData.starring = $(data).find("starring").text();
			videoData.intro = $(data).find("intro").text();

			loadAdData();
			initVideoInfo(videoData);
		},
		error: function(e) {
			alert("Video load failed!");
		}
	});
}

function loadAdData() {

	myAjax({
		type: "get",
		url: "/movie-web/data/adList.xml",
		dataType: 'xml',
		success: function(data) {

			if (!data || $(data).find("ad").length == 0) {
				initPlayer(videoData, adData);
				return;
			}
			var size = $(data).find("ad").length;
			var index = Math.floor(Math.random() * size)
			var adXml = $(data).find("ad").eq(index)
			adData = {};
			adData.adUrl = adXml.find("adUrl").text();
			adData.adLength = adXml.find("adLength").text();

			initPlayer(videoData, adData);
		},
		error: function(e) {
			initPlayer(videoData, adData);
		}
	});
};

function initPlayer(videoData, adData) {

	if (mui.os.ios) {
		if (fullscreen(ios_player)) {
			$("#ios_video_box").removeClass("dn");
			player = new VideoPlayer($("#ios_video_box"), ios_player, videoData, adData);
		} else {
			$("#android_video_box ").removeClass("dn");
			player = new AndroidPlayer($("#android_video_box"), android_player, videoData, adData);
		}
	} else {
		$("#android_video_box ").removeClass("dn");
		player = new AndroidPlayer($("#android_video_box"), android_player, videoData, adData);
	}

}

function initVideoInfo(videoData) {

	$("#overviewBox").find("[sid=director]").html(videoData.director);
	$("#overviewBox").find("[sid=writer]").html(videoData.writer);
	$("#overviewBox").find("[sid=starring]").html(videoData.starring);
	$("#overviewBox").find("[sid=intro]").html(videoData.intro);
}

$(".appbar ").click(function() {
	$(this).hide();
});

var fullscreen = function(elem) {
	var prefix = 'webkit';
	if (elem[prefix + 'EnterFullScreen']) {
		return prefix + 'EnterFullScreen';
	} else if (elem[prefix + 'RequestFullScreen']) {
		return prefix + 'RequestFullScreen';
	};
	return false;
};