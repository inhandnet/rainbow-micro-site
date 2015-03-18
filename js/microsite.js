/**
 * Created by kkzhou on 2015/3/17.
 */
//发送pvuv请求
function sendPvuv(rid,rtype){
    var url="/cgi-bin/counting?"+"rid="+rid+"&"+"rtype="+rtype;
    var xhr=new XMLHttpRequest();
    xhr.open("get",url,true);
    xhr.send(null);
}
//获取数据，动态创建banner
var bannerWrapper=$(".flicker-example ul");
//获取描述信息的回调函数
function initBanners(data){
    var adColumn=bannerWrapper.attr("id");
    data=typeof data=="string"?JSON.parse(data):data;
    var addArray=data.res;
    var tempArr=$.grep(addArray, function (value,index) {
        return value.rtype==adColumn;
    });
    if(tempArr.length!=0){
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
            alert("请求失败");
        }
    })
}
adsDesc(initBanners);
//var data=[{"url":"../images/bg.jpg"},{"url":"../images/bg.jpg"}];

//$.each(data, function (order,value) {
//    $("<li></li>").attr("data-background",value.url).appendTo(bannerWrapper);
//});
//$('.flicker-example').flicker({
//    dot_alignment: 'left'
//});