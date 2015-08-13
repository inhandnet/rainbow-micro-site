var homeBox = null;
var hotBox = null;
var categoryBox = null;
var selector = null;

$(function() {

    var media=new mediaStore();

    /**
     * @desc initial selector
     */
    selector = new MainSelector($("#main_selector"), $("#home_box"), $("#hot_box"), $("#category_box"));

    /**
     * @desc render home box list
     */
    var recommandList=media._getRecommandList();
    homeBox = new HomeBox($("#home_box"), recommandList);

    /**
     * @desc render hot box list
     */

    var topList=media._getHotTopList();
    var contentList=media._getHotContentList();
    var topHtml="";
    $(topList).each(function(k, v) {
        topHtml += "<div class='box '  videoId='"+ v.id+"'>";
        topHtml += "<div class='boxshadow'>";
        topHtml += "<div class='img'>";
        topHtml += "<img src='"+ v.vPosterUrl+"'>";
//        topHtml += "<div class='blackbg'>";
//        topHtml += "<span>"+ v.playLength+"</span>";
        topHtml += "</div>";
        topHtml += "<div class='text'>"+ v.title+"</div>";
        topHtml += "</div></div>";
    });
    $('#hot_box .top').empty().append(topHtml);
    var contentHtml="";
    $(contentList).each(function(k, v) {
        contentHtml += "<div class='box' videoId='"+ v.id+"'>";
        contentHtml += "<div class='boxshadow'>";
        contentHtml += "<div class='img'>";
        contentHtml += "<img src='"+ v.vPosterUrl+"'>";
//        contentHtml += "<div class='blackbg'>";
//        contentHtml += "<span>"+ v.playLength+"</span>";
        contentHtml += "</div>";
        contentHtml += "<div class='text'>"+ v.title+"</div>";
        contentHtml += "</div></div>";
    });
    $('#hot_box .content').empty().append(contentHtml);


    /**
     * @desc render catagory box
     */
    var catagoryList=media.data;
    var catagoryHtml="";
    $(catagoryList).each(function(k, v) {
        catagoryHtml += "<div class='box' videoId='"+ v.id+"'>";
        catagoryHtml += "<div class='boxshadow'>";
        catagoryHtml += "<div class='img'>";
        catagoryHtml += "<img src='"+v.vPosterUrl+"'>";
        catagoryHtml += "<div class='blackbg'>";
        catagoryHtml += "<span>"+ v.playLength+"</span>";
        catagoryHtml += "</div></div>";
        catagoryHtml += "<div class='text'>";
        catagoryHtml += v.title;
        catagoryHtml += "</div>";
        catagoryHtml += "</div></div>";

    });

    $('#recommendBox').empty().append(catagoryHtml);
    $("#recommendBox").find(".box").on("click", function() {
        window.location.href = 'play.html?wefun-videoId=' + $(this).attr("videoId");
    });


    /**
     * @desc bind event about hot box
     */
    $("#hot_box").find(".box").on("click", this, function(event) {
        window.location.href = "play.html?wefun-videoId="+$(this).attr("videoId");
    });


    /**
     * @desc bind media category select event
     */
    $(".tag_selector").on("click", this, function(event) {
        var classId=event.target.id;
        $(".tag_selector").css("color","black");
        $(event.target).css("color","green");
        var selectedList;
        if(classId=="0"){
            selectedList=media.data;
        }else{
            selectedList=media._getListByClassId(classId);
        }
        var sHtml="";
        $(selectedList).each(function(k, v) {
            sHtml += "<div class='box' videoId='"+ v.id+"'>";
            sHtml += "<div class='boxshadow'>";
            sHtml += "<div class='img'>";
            sHtml += "<img src='"+v.vPosterUrl+"'>";
            sHtml += "<div class='blackbg'>";
            sHtml += "<span>"+ v.playLength+"</span>";
            sHtml += "</div></div>";
            sHtml += "<div class='text'>";
            sHtml += v.title;
            sHtml += "</div>";
            sHtml += "</div></div>";

        });
        $('#recommendBox').empty().append(sHtml);

        $("#recommendBox").find(".box").on("click", function() {
            window.location.href = 'play.html?wefun-videoId=' + $(this).attr("videoId");
        });

    });
});
function Compression(){
    var text1=$(".text");
    for(var i=0;i<text1.length;i++)
    {
        if(text1[i].innerHTML.length>6){
            text1[i].innerHTML=text1[i].innerHTML.slice(0,6)+"..."
        }
    }
}