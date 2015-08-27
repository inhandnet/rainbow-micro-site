/**
 * Created by yang on 2015/8/26.
 */
var cloud=new Object();
var deviceStatus="/api/gateway/client_info"
var inPortalApiHost="http://api.m.inhand.com.cn:5280"
checkDeviceStatus();
//回调
window.client_info_cb=function(data){

    if(data.login=="1"){
      var a1= document.getElementById("head-right");
        a1.href="javascript:void(0)";
        a1.style.border.top.color="#D3D3D3";
        a1.style.color="#D3D3D3"
    }else if(data.login=="0"){
        //TODO
    }

    //TODO
}
//每三秒去查询一次设备的登录状态,如果已登录则跳转到登录成功页面
function checkDeviceStatus(){
    var uri=inPortalApiHost+deviceStatus;
    var callback="call_back";
    var callbackFuc="client_info_cb";
    var timeout=5000;
    var showTimeout=true;
    var params={};
  sendJsonp(uri,callback,callbackFuc,timeout,showTimeout,params);
};
//发送jsonp请求
function sendJsonp (uri,callback, callbackFuc,timeout,showTimeout, params) {
    $.ajax({
        url:uri,
        dataType:"jsonp",
        jsonp:callback,
        jsonpCallback:callbackFuc,
        timeout:timeout,
        data:params,
        success:function(data){

        },
        error:function(err,ms,ex){
            if(showTimeout){
                //TODO
                cloud.loginErrorTipEle.text(Rainbow.locale.get("rquest_timeout"));
            }
            if(cloud.oncClickJudge){
                cloud.currentClickedOneClick.removeAttr("disabled");
            }
            cloud.loginBtn.removeAttr("disabled");
        }
    });
};
