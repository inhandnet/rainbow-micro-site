var titleBar = null;
var videoList = null;
var dataList = [];
$(function() {
	
//	var channelId = sessionStorage.getItem("wefun-channelId");
//	var channelName = sessionStorage.getItem("wefun-channelName");
	
	$(".backi").on("click", this, function() {

		history.go(-1)
	});

	$(".historyi").on("click", this, function() {

		window.location.href = 'history.html';
	});
	
	var classId = getUrlParam("wefun-classId");
	var className = getUrlParam("wefun-className");
//	classId = 1;
//	className = "love";
	
	$("#class_name").html(className);
	videoList = new VideoList("video_list");
	
	myAjax({
		type : "get",
		url : "/movie-web/data/list.xml",
		dataType : 'xml',
		success : function(xml) {
			
			$(xml).find("video[classId="+classId+"]").each(function(index, domEle){
				
				var item = $(domEle);
				var videoData = {};
				videoData.id = item.find("id").text();
				videoData.classId = item.find("classId").text();
				videoData.title = item.find("title").text();
				videoData.hPosterUrl = item.find("hPosterUrl").text();
				videoData.vPosterUrl = item.find("vPosterUrl").text();
				videoData.playLength = item.find("playLength").text();
				dataList.push(videoData)
			});
			
			videoList.setData(dataList);
			
		},
		error : function(e) {
			
		}
	});
	
});

$(".appbar").click(function() {
	$(this).hide();
});