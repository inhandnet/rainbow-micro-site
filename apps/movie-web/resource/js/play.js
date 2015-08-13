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
                /*bind video player render event*/
                $("#playerSwitch").on("click", this, function() {
                    window.location.href = 'player.html?wefun-videoId=' + videoId;
                });
                sendPvuv(videoData.title,"movie.play");
            }
        }
    });
});


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




