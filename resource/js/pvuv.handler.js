/**
 * @desc 异步将PVUV事件，上报给接口
 * @param rid
 * @param rtype
 */
function sendPvuv(rid, rtype) {
    var url = "/cgi-bin/counting?" + "rid=" + rid + "&" + "rtype=" + rtype;
    var xhr = new XMLHttpRequest();
    xhr.open("get", url, true);
    xhr.send(null);
}


/**
 * @desc 在加载该JS的页面时，就产生一次PVUV的事件
 * @advice 加载该JS的页面需在<head>中加入 <meta id="pvuvparameters" data-rid="xxxxxx" data-rtype="xxxxxxxxxx" />
 * @type {Element}
 */
var metaEle=document.getElementById("pvuvparameters");
if(metaEle){
    var rid=metaEle.getAttribute("data-rid");
    var rtype=metaEle.getAttribute("data-rtype");
    if(rid&&rtype){
        sendPvuv(rid, rtype);
    }
}

