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
//var adColumn=bannerWrapper.attr("id");
//var data='{"res":[{"rtype":"micro_site_01","banners":[]},{"rtype":"micro_site_02","banners":[{"7":null,"metaId":"8df9f8b044f24eca93366acce204e5cf","metaname":"素材123","type":1,"trade":"1","url":"www","picHeight":130,"picWidth":190,"ext":"gif","bannerLocationId":"micro_site_02","createTime":1426560320590,"updateTime":1426560320590,"_id":"55079540e4b088d694ff568e","name":null},{"7":null,"metaId":"fe291e7bcd9140869f769b1f3680f8e3","name":"123","type":1,"trade":"1","url":"www","picHeight":0,"picWidth":0,"ext":"jpg","bannerLocationId":"micro_site_02","createTime":1426561569138,"updateTime":1426561569138,"_id":"55079a21e4b04d7cc3c8cdbd","metaname":null}]},{"rtype":"micro_site_03","banners":[]},{"rtype":"micro_site_04","banners":[]}]}';
//data=typeof data=="string"?JSON.parse(data):data;
//var addArray=data.res;
//var tempArr=$.grep(addArray, function (index, value) {
//    return value.rtype==adColumn;
//});
//$.each(tempArr.banners,function(index,value){
//    $("<li></li>").attr({
//        "data-background":value.url,
//        "data-rtype":adColumn,
//        "data-rid":value.metaId,
//        "data-link":value.url
//    }).click(function(evt){
//        var rid,rtype;
//        rid=$(evt.target).attr("data-rid");
//        rtype=$(evt.target).attr("data-rtype");
//        sendPvuv(rid,rtype);
//        location.href=$(evt.target).attr(value.url);
//    }).appendTo(bannerWrapper);
//});
var data=[{"url":"res/images/bg.jpg"},{"url":"res/images/bg.jpg"}];

$.each(data, function (order,value) {
    $("<li></li>").attr("data-background",value.url).appendTo(bannerWrapper);
});
$('.flicker-example').flicker({
    dot_alignment: 'left'
});