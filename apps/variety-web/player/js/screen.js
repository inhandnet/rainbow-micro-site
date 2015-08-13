/**
 * Created by caoshun on 8/14/2015.
 */
function initialPlayerPosition(){
    var main_div = document.getElementById("content");
    var windowScreen = document.documentElement;
    var main_top = (windowScreen.clientHeight - main_div.offsetHeight)/2 - 30 + "px";
    main_div.style.marginTop = main_top;
}
initialPlayerPosition();