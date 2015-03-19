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
//var data='{"res":[' +
//    '{"rtype":"micro_site_01","banners":[{"metaId":"8e6852f04be348ce8c141a32939b5d8a","metaname":"微站首页广告位","url":"ssss","ext":"jpg"},{"metaId":"71c35c40b3f5410985fb9c21bae80526","metaname":"微站首页广告位2","url":"www.souhu.com","ext":"jpg"}]},' +
//    '{"rtype":"micro_site_02","banners":[{"metaId":"8df9f8b044f24eca93366acce204e5cf","metaname":"认证页广告位","url":"www","ext":"zip"}]},' +
//    '{"rtype":"micro_site_03","banners":[{"metaId":"403e7ab88da84bbeb9cdd1a3b21d2ebd","metaname":"认证成功页广告位","url":"www.baidu.com","ext":"jpg"},{"metaId":"76e1515c400796ef45639c3ade577067","ext":"jpg"},{"metaId":"c0ff2a1e6d041ad9a171d03c53db8a28","ext":"jpg"}]},' +
//    '{"rtype":"micro_site_04","banners":[{"metaId":"74c14c40197d4ccfa809fd93fcac74e9","metaname":"欢迎页广告位","url":"wwww","ext":"jpg"},{"metaId":"fb4b83dc08375450f634b75e9f43801e","ext":"jpg"},{"metaId":"7cee5e11d321bef70e10a18b0df7b838","ext":"jpg"}]}]}';
//var adColumn=bannerWrapper.attr("id");
//data=typeof data=="string"?JSON.parse(data):data;
//var addArray=data.res;
//var tempArr=$.grep(addArray, function (value,index) {
//    return value.rtype==adColumn;
//});
//if(tempArr.length!=0){
//    $.each(tempArr[0].banners,function(index,value){
//        var pic=value.metaId+"."+value.ext;
//        var picUrl="./images/"+pic;
//        $("<li></li>").attr({
//            "data-background":picUrl,
//            "data-rtype":adColumn,
//            "data-rid":value.metaId,
//            "data-link":value.url
//        }).click(function(evt){
//            var rid,rtype;
//            rid=$(this).attr("data-rid");
//            rtype=$(this).attr("data-rtype");
//            sendPvuv(rid,rtype);
//            location.href=$(this).attr("data-link");
//        }).appendTo(bannerWrapper);
//    });
//}
//$('.flicker-example').flicker({
//    dot_alignment: 'left'
//});