/**
 * Created by caoshun on 8/14/2015.
 */
var vID        = "";
var vWidth     = "100%";
var vHeight    = 500;
var vFile      = "./player/CuSunV2set.xml";
var vPlayer    = "./player.swf?v=2.5";
var vPic       = "";
var vCssurl    = "./player/resource/mini.css";
//跨平台兼容PC,安卓,iOS
var vMp4url    = "./player/video/xinhuanufang.mp4";

/**
 * example :
 * ........./player_template.html?video_id=1
 */
function getRequestParameters(){
    var media=new mediaStore();
    var videoId=getUrlParam("wefun-videoId");
    var currentMedia=media._getListById(videoId,function(id,result){
        if(result){
            if(result.length>0){
                videoData=result[0];
                vMp4url = videoData.videoUrl;
                var logoHeader=document.getElementById("logo_header");
                logoHeader.innerHTML=videoData.title;
                //vPic = videoData.hPosterUrl;
            }
        }
    });
}
getRequestParameters();
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
}

