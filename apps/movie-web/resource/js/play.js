var titleBar = null;
var player = null;
var commonSelector = null;

var videoData = null;
var adData = null;

$(function() {

    var media=new mediaStore();

    /**
     * @desc render recommand list box
     */
    var recommandList=media._getRecommandList();
    var recommandHtml="";
    $(recommandList).each(function(k, v) {
        recommandHtml += "<div class='box' videoId='"+ v.id+"'>";
        recommandHtml += "<div class='boxshadow'>";
        recommandHtml += "<div class='img'>";
        recommandHtml += "<img src='"+v.vPosterUrl+"'>";
        recommandHtml += "<div class='blackbg'>";
        recommandHtml += "<span>"+ v.playLength+"</span>";
        recommandHtml += "</div></div>";
        recommandHtml += "<div class='text'>";
        recommandHtml += v.title;
        recommandHtml += "</div>";
        recommandHtml += "</div></div>";
    });
    $('#recommendBox').empty().append(recommandHtml);

	commonSelector = new CommonSelector([$("#recommendBtn"), $("#overviewBtn")], [$("#recommendBox"), $("#overviewBox")]);
	$("#recommendBox").find(".box").on("click", function() {

		window.location.href = 'play.html?wefun-videoId=' + $(this).attr("videoId");
	});

    var videoId = getUrlParam("wefun-videoId");
    var currentMedia=media._getListById(videoId,function(id,result){
        if(result){
            if(result.length>0){
                videoData=result[0];
                initVideoInfo(result[0]);
                initPlayer(videoData);
                sendPvuv(videoData.title,"movie.play");
            }
        }
    });
////    var recommen=document.getElementById("recommendBox");
//    var alli_v=recommen.getElementsByTagName("img");
//    for(var i=0;i<alli_v.length;i++)
//    {
//        alli_v.style.height=window.screen.availWidth*0.26+"px";
//    }
    var alli_h=$(".img");
    for(var i=0;i<alli_h.length;i++)
    {
        alli_h[i].style.height=window.screen.availWidth*0.423+"px";
    }
});

//function loadAdData() {
//
//	myAjax({
//		type: "get",
//		url: "../../adList.xml",
//		dataType: 'xml',
//		success: function(data) {
//
//			if (!data || $(data).find("ad").length == 0) {
//				initPlayer(videoData, adData);
//				return;
//			}
//			var size = $(data).find("ad").length;
//			var index = Math.floor(Math.random() * size)
//			var adXml = $(data).find("ad").eq(index)
//			adData = {};
//			adData.adUrl = adXml.find("adUrl").text();
//			adData.adLength = adXml.find("adLength").text();
//
//			initPlayer(videoData, adData);
//		},
//		error: function(e) {
//
//		}
//	});
//};

function initPlayer(videoData) {

    var iosPlayer=document.getElementById("ios_player");
    var androidPlayer=document.getElementById("android_player");
    console.log(iosPlayer);
    console.log(androidPlayer);
	if (mui.os.ios) {
		if (fullscreen(ios_player)) {
			$("#ios_video_box").removeClass("dn");
            console.log(ios_player);
			player = new VideoPlayer($("#ios_video_box"), iosPlayer, videoData);
		} else {
			$("#android_video_box ").removeClass("dn");
			player = new AndroidPlayer($("#android_video_box"), androidPlayer, videoData);
		}
	} else {
		$("#android_video_box ").removeClass("dn");
		player = new AndroidPlayer($("#android_video_box"), androidPlayer, videoData);
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
