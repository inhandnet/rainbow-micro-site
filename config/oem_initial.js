var oemInfo={
        name:"航美在线",
        title:"航美在线",
        support:"航美传媒在线支持"
};
function initRender(){
    /**
     * @setting title
     */
    document.title=oemInfo.title;
    var titleTag=document.getElementsByTagName("title");
    if(titleTag!=null&&titleTag.length>0){
        titleTag[0].innerHTML=oemInfo.title;
    }

    /**
     * @setting name
     */
    var name=document.getElementById("org_name");
    if(name!=null){
        name.innerHTML=oemInfo.name;
    }

    /**
     * @setting support
     */

    var support=document.getElementById("support_name");
    if(support!=null){
        support.innerHTML=oemInfo.support;
    }

}

initRender();