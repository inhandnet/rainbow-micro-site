/**
 * Created by kkzhou on 2015/3/17.
 */
var mac,adId,platFormIp;
//发送pvuv
function callback_pvuv(){

}
//发送pvuv请求
function sendPvuv(rid,rtype){
    var uri="http://"+platFormIp+"/api/banner/pvuv?mac="+encodeURIComponent(mac)+"&"+"rId="+encodeURIComponent(rid)+"&tId="+encodeURIComponent(rtype)+"&siteId="+encodeURIComponent(adId);
    var callback="call_back";
    var callbackFuc="callback_pvuv";
    var timeout=5000;
    var showTimeout=true;
    var params={};
    request(uri,callback,callbackFuc,timeout,showTimeout,params);
}
//发送请求
function request(uri,callback, callbackFuc,timeout, params) {
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
        }
    });
};
//获取数据，动态创建banner
var bannerWrapper=$(".flicker-example ul");
//获取描述信息的回调函数
function initBanners(data){
    var adColumn=bannerWrapper.attr("id");
    data=typeof data=="string"?JSON.parse(data):data;
    var addArray=data?data.res:[];
    adId=data?data.adId:"";
    var tempArr=$.grep(addArray, function (value,index) {
        return value.rtype==adColumn;
    });
    var voidAd="./images/void.jpg";
    if(tempArr.length!=0){
        if(tempArr[0].banners.length!=0){
            $.each(tempArr[0].banners,function(index,value){
                var pic=value.metaId+"."+value.ext;
                var picUrl="../../ads/pic/"+pic;
                $("<li></li>").attr({
                    "data-background":picUrl,
                    "data-rtype":adColumn,
                    "data-rid":value.metaId,
                    "data-link":value.url
                }).click(function(evt){
                    var rid,rtype;
                    rid=$(this).attr("data-rid");
                    rtype=$(this).attr("data-rtype");
                    sendPvuv(rid,rtype);
                    location.href=$(this).attr("data-link");
                }).appendTo(bannerWrapper);
            });
        }else{
            $("<li></li>").attr({
                "data-background":voidAd
            }).appendTo(bannerWrapper);
        }
    }else{
        $("<li></li>").attr({
            "data-background":voidAd
        }).appendTo(bannerWrapper);
    }
    $('.flicker-example').flicker({
        dot_alignment: 'left'
    });
}
//获取描述信息
function adsDesc(callback){
    var self=this;
    $.ajax({
        "type":"GET",
        "url":"../../../ads/desc.JSON",
        "contentType":"application/json",
        success:function(data){
            callback.call(self,data);
        },
        error:function(a,b,c){
            callback.call(self);
            alert("请求失败");
        }
    })
}
//获取机构oid
function callback_foroid(data){
    if(data.error){
        console.log("返回错误信息");
    }else{
        platFormIp=data.platform;
    }
}
//获取机构oid
function getOid(){
    var uri="http://api.m.inhand.com.cn:5280/api/gateway/gateway_info";
    var callback="call_back";
    var callbackFuc="callback_foroid";
    var timeout=5000;
    var showTimeout=true;
    var params={};
    request(uri,callback,callbackFuc,timeout,showTimeout,params);
}
//获取mac信息
function callback_sms_formac(data){
    if(data.error){
        console.log("返回错误信息！");
    }else{
        mac=data.result.mac;
       //localStorage.setItem("mac",data.result.mac);
    }
}
//获取mac地址
function getMac(){
    var uri="http://api.m.inhand.com.cn:5280/api/gateway/sms_code";
    var params={
        "phone":"12345678901",
        "language":"zh"
    };
    var callback="call_back";
    var callbackFuc="callback_sms_formac";
    var timeout=5000;
    var showTimeout=true;
    request(uri,callback,callbackFuc,timeout,showTimeout,params);
}
getMac();
getOid();
adsDesc(initBanners);
