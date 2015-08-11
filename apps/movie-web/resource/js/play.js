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
        recommandHtml += "<div class='boxshadow' >";
        recommandHtml += "<div class='img'>";
        recommandHtml += "<img src='"+v.vPosterUrl+"' class='imgList'>";
        recommandHtml += "<div class='blackbg'>";
        recommandHtml += "<span>"+ v.playLength+"</span>";
        recommandHtml += "</div></div>";
        recommandHtml += "<div class='text'style='white-space: nowrap;text-overflow:ellipsis; overflow:hidden;'>";
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
//var imgPlay =document.getElementById("imgPlay");
//   imgPlay.setAttribute("src","sid=vPosterUrl");


function playVideo(){
    document.getElementById("videoPlay").style.display="block";
    document.getElementById("introduce").style.display="none";
    document.getElementById("_player").autoplay="autoplay";
    document.getElementById("_player").style.display="block";
    document.getElementById("posterBox").style.display="none";
    document.getElementById("player_bigBtn").style.display="none";
    document.getElementsByClassName("float")[0].style.display="none";
    document.getElementById("videoPlay").style.backgroundColor="#000000";
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

}
function initPlayer(videoData) {
    $("#_video_box ").removeClass("dn");
    player = new AndroidPlayer($("#_video_box"), videoData);
}

function initVideoInfo(videoData) {

	$("#overviewBox").find("[sid=director]").html(videoData.director);
	$("#overviewBox").find("[sid=writer]").html(videoData.writer);
	$("#overviewBox").find("[sid=starring]").html(videoData.starring);
	$("#overviewBox").find("[sid=intro]").html(videoData.intro);
    $("#overviewBox").find("[sid=title]").html(videoData.title);
    $("#overviewBox").find("[sid=vPosterUrl]").html(videoData.vPosterUrl);
    $("#overviewBox").find("[sid=classId1]").html(videoData.classId1);
    $("#overviewBox").find("[sid=country ]").html(videoData.country );
    $("#overviewBox").find("[sid=time ]").html(videoData.time );
    var image=$(".image")[0];
    var imgUrl=$(".imgUrl")[0];
    $(".image")[0].setAttribute("src",imgUrl.innerText);



    //}
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




