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
//��ƽ̨����PC,��׿,iOS
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
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //����һ������Ŀ�������������ʽ����
    var r = window.location.search.substr(1).match(reg); //ƥ��Ŀ�����
    if (r != null) return unescape(r[2]);
    return null; //���ز���ֵ
}

