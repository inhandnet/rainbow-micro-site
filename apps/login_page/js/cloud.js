/**
 * Created by zhouyunkui on 14-7-2.
 */
var cloud = new Object();
//动态二维码优先
var qrCodeHtmlStr = "" +
    "   <div id='dynamic_div' style='width: 270px;height: 290px;background-color: #Ffffff;margin-left: auto;margin-right: auto;text-align: center;vertical-align: middle'>" +
    "    <h4 class='dynamic_qr_code'>微信扫描二维码，登录Wi-Fi</h4>" +
    "    <img style='width: 150px;height: 150px;' src='resoureces/images/loading.gif' />" +
    "    <hr style='border: 1px solid #E7E6E6'/>" +
    "    <a id='wechatwifi-to-sms' class='button blue bigrounded' disabled='disabled'>短信验证登录</a>" +
    "   </div>";

var htmlStr = "" +
    "<div>" +
    " <div>" +
    "  <div class='row text-center div_pc_show'>" +
    "    <div class='text-center row_min_width col-lg-offset-6 col-lg-3 col-md-offset-6 col-md-3'>" +
    "    <img class='img_pc_show' src='resoureces/images/logo.png'>" +
    "    </div>" +
    "    </div>" +
    "    <div class='row all_title_div' style=''>" +
    "    <div style='' class='col-lg-offset-6 col-lg-3 text-center'>" +
    "    <h4 style='color: #Ffffff'>自由无线，快乐分享</h4>" +
    "</div>" +
    "</div>" +
    "<div id='form_wrapper'>" +
    "        <!-- formStr start" +
    "        -->" +
    "        <!-- formStr end -->" +
    "        <!-- qrCodeHtmlStr start" +
    "        -->" +
    "       <!-- qrCodeHtmlStr end -->" +
    "    </div>" +
    "    </div>" +
    "    <div id='third_pc_wrapper'>" +
    "    <div>" +
    "    <div style='width: 270px;height: 55px;background-color: #Ffffff;margin-left: auto;margin-right: auto;text-align: center;vertical-align: middle ;'>" +
    "    <div style='height: 5px;'></div>" +
    "    <a style='padding-left: 5px;' lang='{title:qq}' id='dv_rainbow_qqLoginBtn' href='https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=101149405&redirect_uri=http://qq.u2wifi.cn/login_page/QQ/servercallbackpage.html&scope=get_user_info'>" +
    "    <img src='./resoureces/images/qq_login.png' />" +
    "    </a>" +
    "    <a style='padding-left: 5px;' lang='{title:sina}' id='dv_rainbow_sinaLoginBtn' href='https://api.weibo.com/oauth2/authorize?client_id=427142461&response_type=code&redirect_uri=http://qq.360yutu.cn/login_page/sina/servercallbackpage.html'>" +
    "    <img src='./resoureces/images/sina_login.png' />" +
    "    </a>" +
    "    <a style='padding-left: 5px;' lang='{title:wechat}' id='dv_rainbow_wechatLoginBtn' href='./sub/wechat.html'>" +
    "    <img src='./resoureces/images/wechat.png' />" +
    "    </a>" +
    "    <span class='pc_specific diff_buttons'></span>" +
    "    <a  style='padding-left: 5px;' data-toggle='tooltip' data-placement='right' title='' data-original-title='Tooltip on left' href='javascript:void(0)' lang='{title:one_click}' id='dv_one_click'>" +
    "    <img src='./resoureces/images/one_click.png' />" +
    "    </a>" +
    "    </div>" +
    "    <div class='row row_min_width' style='font-size:12px;line-height: 70px;'>" +
    "    <div class='col-lg-15 text-center' style='display: none'>技术支持&nbsp;|&nbsp;&nbsp;|&nbsp;86-021-53965495-715</div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>";

var formStr = "" +
    "<form id='sms_form' role='form' style='width: 95%;height: 250px;background-color: #Ffffff;margin-left: auto;margin-right: auto;text-align: center;vertical-align: middle'>" +
    "    <div>" +
    "    </div>" +
    "    <div style='padding-left: 5px;text-align: left;'>" +
      //"    <label for='rainbow_user_phone_number'>手机号</label>"+
    "    </div>" +
    "    <div style='padding-bottom: 10px'>" +
    "    <div style='text-align: left;padding-left: 5px;'>" +
    "    <input type='text' id='rainbow_user_phone_number' style='width:60%;margin-top: 20px ;height:40px;BORDER-RIGHT:1px solid #C8C8C8; BORDER-TOP:1px solid #C8C8C8; FONT-SIZE: 9pt; BORDER-LEFT:1px solid #C8C8C8; BORDER-BOTTOM:1px solid #C8C8C8;border-bottom-color: #C8C8C8' lang='{placeholder:enter_mobile_number}' />" +
    "    <a class='button blue small' style='padding-top:12px;vertical-align: middle;height:40px ;width: 35%;background: #8FC52D ;font-size: 14px;' href='javascript:void(0)' id='rainbow_get_user_password' lang='text:get_code'>GET CODE</a>" +
    "    </div>" +
    "    </div>" +
    "    <div>" +
    "    <div>" +
    "    <span id='rainbow_phone_number_error' class='' role='alert'></span>" +
    "    </div>" +
    "    </div>" +
    "    <div style='padding-left: 5px;text-align: left;padding-top: 10px;'>" +
      //"    <label for='rainbow_user_phone_number'>验证码</label>"+
    "    </div>" +
    "    <div style='padding-bottom: 10px'>" +
    "    <div>" +
    "    <div>" +
    "    <div style='text-align: left;padding-left: 5px;'>" +
    "    <input type='text' id='rainbow_user_password' style='width:95%; height:40px;BORDER-RIGHT:1px solid #C8C8C8; BORDER-TOP:1px solid #C8C8C8; FONT-SIZE: 9pt; BORDER-LEFT:1px solid #C8C8C8; BORDER-BOTTOM:1px solid #C8C8C8;border-bottom-color: #C8C8C8' lang='{placeholder:enter_password}'>" +

    "</div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "<div>" +
    "<span id='rainbow_password_error' class='rainbow_error_tips'></span>" +
    "</div>" +
    "<div class='row row_min_width' style='font-size: 12px'>" +
    "    <div class='col-lg-15 col-xs-15' style='text-align: left'>" +
    "    <label id='agree' for='rainbow_agree_conditions_terms'>" +
    "    <input type='checkbox' id='rainbow_agree_conditions_terms' />" +
    "    <span class='check color_white'></span>" +
    "    </label>" +
    "    <a href='./FreeStatement.html' id='conditions_terms' style='color:#114A7B;font-weight: 700' href=''>航美在线免费声明</a>" +
    "    </div>" +
    "</div>" +
    "<div>" +
    "    <div style=''>" +
    "    <a href='javascript:void(0)' style='width: 98%' class='btn btn-info btn-raised log_btn_pc_show no_border_radius ' id='rainbow_loginBtn'></a>" +
    "    <a href='javascript:void(0)' style='width: 200px;display:none' class='btn btn-info btn-raised log_btn_pc_show no_border_radius ' id='rainbow_loginBtn_bak' disabled='disabled'></a>" +
    "    </div>" +
    "    </div>" +
    "    <p style='top:7px;font-weight: 700;height: 20px;color: red;' id='error_line'></p>" +
    "    <div>" +
    "    <span id='rainbow_login_error'></span>" +
    "</div>" +
    "</form>";

//初始化cloud各个dom属性
cloud.initializeComponents = function () {
  //获取手机码间隔
  cloud.number = 60;
  //查询设备状态间隔
  cloud.statusInterval = 3000;
  cloud.wait = true;
  cloud.oneClickPc = cloud.html.find("#dv_one_click");
  cloud.qqBtnPc = cloud.html.find("#dv_rainbow_qqLoginBtn");
  cloud.sinaBtnPc = cloud.html.find("#dv_rainbow_sinaLoginBtn");
  cloud.wechatBtnPc = cloud.html.find("#dv_rainbow_wechatLoginBtn");

  cloud.qrLabel = cloud.html.find("#qr_text");
  cloud.returnBack = cloud.html.find("#return_back");
  cloud.conditionTerm = cloud.html.find("#conditions_terms");
  cloud.agree = cloud.html.find("#agree");
  cloud.rememberMe = cloud.html.find("#remember_me");
  cloud.otherLoginWay = cloud.html.find("#other_login_way");
  cloud.wifiAccess = cloud.html.find("#access_wifi");
  cloud.wifiAccessMethod = cloud.html.find("#access_wifi_method");
  cloud.phoneInput = cloud.html.find("#rainbow_user_phone_number");
  cloud.passwordInput = cloud.html.find("#rainbow_user_password");
  cloud.getSMSBtn = cloud.html.find("#rainbow_get_user_password");
  cloud.remberElement = cloud.html.find("#rainbow-remember-me");
  cloud.agreeElement = cloud.html.find("#rainbow_agree_conditions_terms");
  cloud.loginBtn = cloud.html.find("#rainbow_loginBtn");
  cloud.loginBtnBak = cloud.html.find("#rainbow_loginBtn_bak");
  cloud.regexUserName = new RegExp("^(1)[0-9]{10,10}$");
  cloud.regexRequired = new RegExp("^(\s)*$");
  cloud.errorLine = cloud.html.find("#error_line");
  cloud.phoneError = cloud.errorLine;
  cloud.passwordError = cloud.errorLine;
  cloud.weixin_wrapper = cloud.errorLine;
  cloud.loginErrorTipEle = cloud.errorLine;
}
//dom事件绑定
cloud.bindEvents = function () {
  //获取手机码点击事件
  cloud.getSMSBtn.bind("click", function (e) {
    cloud.loginErrorTipEle.text("");
    e.preventDefault();
    if (cloud.wait && cloud.checkPhoneInput()) {
      cloud.wait = false;
      cloud.getSMSBtn.attr("disabled", "disabled");
      function textLoop() {
        if (cloud.number > 0) {
          cloud.number--;
          cloud.getSMSBtn.text(cloud.number + " " + Rainbow.locale.get("seconds"));
        }
        else {
          clearInterval(cloud.textCycle);
          cloud.number = 60;
          cloud.getSMSBtn.removeAttr("disabled");
          cloud.getSMSBtn.text(Rainbow.locale.get("get_code"));
          cloud.wait = true;
        }
      };
      cloud.textCycle = setInterval(textLoop, "1000");
      var uri = Rainbow.cloud.inPortalApiHost + Rainbow.cloud.getSmsCodeApiUri;
      var language = Rainbow.locale.language.substring(0, 2);
      var params = {
        "phone": cloud.phoneInput.val(),
        "language": language
      };
      var callback = "call_back";
      var callbackFuc = "callback_sms";
      var timeout = 5000;
      var showTimeout = true;
      cloud.sendJsonp(uri, callback, callbackFuc, timeout, showTimeout, params);
    }
  });
//点击登录按钮事件
  cloud.loginBtn.bind("click", function (e) {
    e.preventDefault();
    cloud.username = cloud.phoneInput.val();
    cloud.password = cloud.passwordInput.val();
    var test = cloud.checkAllInput();
    if (test) {
      cloud.loginBtn.attr("disabled", "disabled");
      var uri = Rainbow.cloud.platformApiHost + Rainbow.cloud.phoneLoginCodeApiUri;
      var params = {
        "username": cloud.username,
        "password": Rainbow.cloud.md5(Rainbow.cloud.preStr + Rainbow.cloud.md5(cloud.password)),
        "oid": Rainbow.cloud.organId,
        "client_id": Rainbow.cloud.clientId,
        "client_secret": Rainbow.cloud.clientSecret,
        "grant_type": "authorization_code"
      };
      var callback = "call_back";
      var callbackFuc = "callback_wifi_user";
      var timeout = 5000;
      var showTimeout = true;
      cloud.sendJsonp(uri, callback, callbackFuc, timeout, showTimeout, params);
    }
  });
//一键登录按钮点击事件
  function oneClickFactorr(target) {
    cloud.currentClickedOneClick = target;
    cloud.currentClickedOneClick.attr("disabled", "disabled");
    var uri = Rainbow.cloud.inPortalApiHost + Rainbow.cloud.oneKeyLoginApiUri;
    var params = {
      "client_id": Rainbow.cloud.clientId,
      "client_secret": Rainbow.cloud.clientSecret,
      "as_type": 6,
      "code": "86FD8B1A0B2FFCB2A7DF76DF00C5EE22"
    };
    var callback = "call_back";
    var callbackFuc = "callback_one_key";
    var timeout = 5000;
    var showTimeout = true;
    cloud.sendJsonp(uri, callback, callbackFuc, timeout, showTimeout, params);
  }

  cloud.oneClickPc.bind("click", function (e) {
    e.preventDefault();
    oneClickFactorr(cloud.oneClickPc)
  });
//同意服务协议按钮点击事件
  cloud.agreeElement.bind("click", function (e) {
    if (!cloud.agreeElement.prop("checked")) {
      cloud.loginBtn.attr("disabled", "disabled");
      cloud.getSMSBtn.attr("disabled", "disabled");
      cloud.oneClickPc.attr("disabled", "disabled");
      cloud.qqBtnPc.attr("disabled", "disabled");
      cloud.sinaBtnPc.attr("disabled", "disabled");
      cloud.wechatBtnPc.attr("disabled", "disabled");
      $("span.check").removeClass("color_white").addClass("color_green");
    } else {
      cloud.loginBtn.removeAttr("disabled");
      cloud.getSMSBtn.removeAttr("disabled");
      cloud.oneClickPc.removeAttr("disabled");
      cloud.qqBtnPc.removeAttr("disabled");
      cloud.sinaBtnPc.removeAttr("disabled");
      cloud.wechatBtnPc.removeAttr("disabled");
      $("span.check").removeClass("color_green").addClass("color_white");
    }
  });
  cloud.passwordInput.blur(function () {
    cloud.checkPassWordInput()
  });
  cloud.phoneInput.blur(function () {
    cloud.checkPhoneInput();
  });
};
//关于所有dom的初始化工作
cloud.initializeDom = function () {
  cloud.html = $(htmlStr);
  cloud.transformBlock();
  cloud.initializeComponents();
  cloud.bindEvents();
  //同意服务协议和自动登录
  cloud.agreeElement.attr("checked", true) || cloud.agreeElement.prop("checked", true);
}
//拼接动态二维码和手机验证码登录框
cloud.transformBlock = function () {
  var formWrapper = cloud.html.find("#form_wrapper");
  $(formStr).appendTo(formWrapper);
  $(qrCodeHtmlStr).appendTo(formWrapper);
  cloud.qrCode = cloud.html.find("#dynamic_div").hide();
  cloud.form = cloud.html.find("#sms_form");
  cloud.qrCode.find("#wechatwifi-to-sms").bind("click", function (e) {
    cloud.qrCode.hide();
    cloud.form.show();
    if (cloud.statusQuery) {
      clearInterval(cloud.statusQuery);
    }
  });
}
//设置页面文字
cloud.renderCharacter = function () {
  cloud.conditionTerm.text(Rainbow.locale.get("conditions_terms"));
  cloud.agree.append(Rainbow.locale.get("agree"));
  cloud.rememberMe.append(Rainbow.locale.get("remember_me"));
  cloud.otherLoginWay.text(Rainbow.locale.get("other_login_way"));
  cloud.wifiAccess.text(Rainbow.locale.get("access_wifi"));
  cloud.phoneInput.attr({
    "placeholder": Rainbow.locale.get("enter_mobile_number")
  });
  cloud.passwordInput.attr({
    "placeholder": Rainbow.locale.get("enter_password")
  });
  cloud.getSMSBtn.text(Rainbow.locale.get("get_code"));
  cloud.loginBtn.text(Rainbow.locale.get("login"));
  cloud.loginBtnBak.text(Rainbow.locale.get("login"));
  cloud.returnBack.attr({
    "href": Rainbow.cloud.url
  });
  cloud.qrLabel.text(Rainbow.locale.get("qr_code"));
  cloud.wifiAccessMethod.text(Rainbow.locale.get("access_wifi_method"));
};
//整个cloud的入口函数
cloud.insertLoginBox = function (option) {
  cloud.initializeDom();
  $(option.selector).append(cloud.html);
  cloud.renderCharacter();
  cloud.getStaticParam();
};
//获取验证码链接的回调函数
window.getQrCode = function (data) {
  if (data.result/*data.result.getQrCodeUrl*/) {
    var realUrl = data.result/*data.result.getQrCodeUrl*/;
    cloud.qrCode.find("img").attr({
      "src": realUrl
    });
    cloud.qrCode.find("#wechatwifi-to-sms").removeAttr("disabled");
  } else {
    cloud.qrCode.find("img").attr({
      "alt": "请求错误"
    });
  }
  cloud.statusQuery = setInterval(checkDeviceStatus, cloud.statusInterval);
};
//获取设备登录状态回调函数
window.client_info_cb = function (data) {
  if (data.login == "1") {
    location.href = Rainbow.cloud.afterLoginSucessPage;
    clearInterval(cloud.statusQuery);
  } else if (data.login == "0") {
    //TODO
  }
  //TODO
}
//每三秒去查询一次设备的登录状态,如果已登录则跳转到登录成功页面
window.checkDeviceStatus = function () {
  var uri = Rainbow.cloud.inPortalApiHost + Rainbow.cloud.deviceStatus;
  var callback = "call_back";
  var callbackFuc = "client_info_cb";
  var timeout = 5000;
  var showTimeout = true;
  var params = {};
  cloud.sendJsonp(uri, callback, callbackFuc, timeout, showTimeout, params);
};
//发送jsonp请求
cloud.sendJsonp = function (uri, callback, callbackFuc, timeout, showTimeout, params) {
  $.ajax({
    url: uri,
    dataType: "jsonp",
    jsonp: callback,
    jsonpCallback: callbackFuc,
    timeout: timeout,
    data: params,
    success: function (data) {

    },
    error: function (err, ms, ex) {
      if (showTimeout) {
        //TODO
        cloud.loginErrorTipEle.text(Rainbow.locale.get("rquest_timeout"));
      }
      if (cloud.oncClickJudge) {
        cloud.currentClickedOneClick.removeAttr("disabled");
      }
      cloud.loginBtn.removeAttr("disabled");
    }
  });
};
//获取机构id、后台ip和会员认证方式
cloud.getStaticParam = function () {
  var uri = Rainbow.cloud.inPortalApiHost + Rainbow.cloud.getStaticParamUri;
  var callback = "call_back";
  var callbackFuc = "callback_get_static_param";
  var timeout = 5000;
  var showTimeout = true;
  var params = {};
  cloud.sendJsonp(uri, callback, callbackFuc, timeout, showTimeout, params);
};
//手机输入框错误提示
cloud.checkPhoneInput = function () {
  var value = cloud.phoneInput.val();
  if (value) {
    var userNameFlag = cloud.regexUserName.test(value);
    if (!userNameFlag) {
      cloud.phoneError.text(Rainbow.locale.get("phone_number_format_error"));
      return false;
    } else {
      cloud.phoneError.text("");
      return true;
    }
    ;
  }
};
//密码输入框错误提示
cloud.checkPassWordInput = function () {
  var value = cloud.passwordInput.val();
  if (value) {
    var passWordFlag = cloud.regexRequired.test();
    if (passWordFlag) {
      cloud.passwordError.text(Rainbow.locale.get("password_invalid"));
      return false;
    } else {
      cloud.passwordError.text("");
      return true;
    }
  }
};
//检测所有输入
cloud.checkAllInput = function () {
  var flag1 = cloud.checkPhoneInput();
  var flag2 = cloud.checkPassWordInput();
  if (flag1 && flag2) {
    return true;
  } else {
    return false;
  }
};
//设置cookie
cloud.setCookie = function (username, password) {
  var date = new Date("1970-1-1 00:00.000");
  document.cookie = "username_m=" + ";expires=" + date.toGMTString();
  document.cookie = "password_m=" + ";expires=" + date.toGMTString();
  date = new Date();
  date.setDate(date.getDate() + 3650);
  document.cookie = "username_m=" + username + ";" + "expires=" + date.toGMTString();
  document.cookie = "password_m=" + password + ";" + "expires=" + date.toGMTString();
};
//获取cookie
cloud.getCookie = function () {
  var cookie = document.cookie;
  var countArr = cookie.split(";");
  var nameCodeObj = {};
  for (var i = 0; i < countArr.length; i++) {
    var tempArr = countArr[i].split("=");
    var index = tempArr[0];
    index = index.trim();
    var value = tempArr[1];
    if (index == "username_m") {
      nameCodeObj.username = value;
    } else if (index == "password_m") {
      nameCodeObj.password = value;
    } else if (index == "checkboxvalue_m") {
      nameCodeObj.checkboxvalue = value;
    }
  }
  ;
  return nameCodeObj;
};
//自动填充，并判断是否自动登录
cloud.autoLogin = function (compareTrans) {
  //var href=location.href;
  //var index=href.indexOf("?");
  //var paramStr=href.slice(index+1);
  //var paramArr=paramStr.split("=");
  //var autoLogin=paramArr[1];
  //if(!autoLogin||autoLogin!="closed"){
  var obj = cloud.getCookie();
  if (obj.username && obj.password) {
    if (obj.username) {
      cloud.phoneInput.val(obj.username);
    }
    if (obj.password) {
      cloud.passwordInput.val(obj.password);
    }
    //去掉自动登录动作，为微信连wifi做让步，但会自动填充输入框
    if (!compareTrans.authThird.wechat) {
      var uri = Rainbow.cloud.platformApiHost + Rainbow.cloud.phoneLoginCodeApiUri;
      var params = {
        "username": obj.username,
        "password": Rainbow.cloud.md5(Rainbow.cloud.preStr + Rainbow.cloud.md5(obj.password)),
        "client_id": Rainbow.cloud.clientId,
        "client_secret": Rainbow.cloud.clientSecret,
        "oid": Rainbow.cloud.organId,
        "grant_type": "authorization_code"
      };
      cloud.username = obj.username;
      var callback = "call_back";
      var callbackFuc = "callback_wifi_user";
      var timeout = 5000;
      var showTimeout = true;
      cloud.loginBtn.attr("disabled", "disabled");
      cloud.sendJsonp(uri, callback, callbackFuc, timeout, showTimeout, params);
    }
  }
  //}
};
//获取机构id、后台ip和会员认证方式的回调函数
window.callback_get_static_param = function (data) {
  if (data.error) {
    cloud.loginErrorTipEle.text(Rainbow.locale.get(data.error_code));
  } else {
    Rainbow.cloud.platformApiHost = "http://" + data.platform;
    Rainbow.cloud.organId = data.orgId;
    cloud.memberAuthMethod = data.loginMethod;
    var compareTrans = {
      authThird: {
        flag: false,
        sina: "",
        qq: "",
        weixin: "",
        wechat: ""
      },
      sms: "",
      one_click: ""
    };
    var methodArr = data.loginMethod.split(",");
    var unique;
    var leftArr = [];
    var rightArr = [];
    for (var i = 0; i < methodArr.length; i++) {
      var flag;
      if (methodArr[i] == "weibo") {
        flag = true;
        compareTrans.authThird.sina = true;
        leftArr.push(methodArr[i]);
      } else if (methodArr[i] == "qq") {
        flag = true;
        compareTrans.authThird.qq = true;
        leftArr.push(methodArr[i]);
      } else if (methodArr[i] == "weixin") {
        flag = true;
        compareTrans.authThird.weixin = true;
        leftArr.push(methodArr[i]);
      } else if (methodArr[i] == "sms") {
        compareTrans.sms = true;
      } else if (methodArr[i] == "one-click") {
        flag = true;
        compareTrans.one_click = true;
        rightArr.push(methodArr[i]);
      } else if (methodArr[i] == "wechat") {
        flag = true;
        compareTrans.authThird.wechat = true;
        //如果wechat开放，则取消weixin
        compareTrans.authThird.weixin = false;
      }
      compareTrans.authThird.flag = flag;
    }
    compareTrans.leftArr = leftArr;
    compareTrans.rightArr = rightArr;
    cloud.oncClickJudge = compareTrans.one_click;
    cloud.modifyMemberLoginMethod(compareTrans);
    if (compareTrans.sms) {
      cloud.autoLogin(compareTrans);
    }
  }
};
//隐藏或显示登录入口
cloud.modifyMemberLoginMethod = function (compareTrans) {
  //隐藏那个竖线
  var distinguish = false;
  if (compareTrans.leftArr.length == 0 && compareTrans.rightArr.length != 0) {
    distinguish = true;
  } else if (compareTrans.leftArr.length != 0 && compareTrans.rightArr.length == 0) {
    distinguish = true;
  }
  if (distinguish) {
    cloud.html.find(".diff_buttons").css({
      "display": "none!important"
    });
  }
  if (!compareTrans.authThird.flag) {
    //三方认证那个竖杠 添加样式:display: none!important;
    $("div.pc_specific").addClass("config_display");
    //如果三方登录都没有，包括一键登录，pc上隐藏掉三方登录行
    $("div#third_pc_wrapper").addClass("config_display");
  } else {
    if (!compareTrans.authThird.sina) {
      cloud.sinaBtnPc.addClass("config_display");
    }
    if (!compareTrans.authThird.qq) {
      cloud.qqBtnPc.addClass("config_display");
    }
    if (!compareTrans.authThird.weixin || compareTrans.authThird.wechat) {
      cloud.wechatBtnPc.addClass("config_display");
    }
    if (compareTrans.authThird.wechat) {
      cloud.form.hide();
      cloud.qrCode.show();
      if (!compareTrans.sms) {
        cloud.qrCode.find("#wechatwifi-to-sms").hide();
      } else {
        setTimeout(function () {
          cloud.qrCode.find("#wechatwifi-to-sms").removeAttr("disabled");
        }, 4000);
      }
      var uri = Rainbow.cloud.inPortalApiHost + Rainbow.cloud.dynamicQrCodeUri;
      var callback = "callback";
      var callbackFuc = "getQrCode";
      var timeout = 5000;
      var showTimeout = true;
      var params = {};
      cloud.sendJsonp(uri, callback, callbackFuc, timeout, showTimeout, params);
    }
  }
  if (!compareTrans.one_click) {
    cloud.oneClickPc.addClass("config_display");
    $("span.diff_buttons").addClass("config_display");
  }
  if (!compareTrans.sms) {
    cloud.getSMSBtn.attr("disabled", "disabled");
    cloud.loginBtn.attr("disabled", "disabled");
    cloud.phoneInput.attr("disabled", "disabled");
    cloud.passwordInput.attr("disabled", "disabled");
  }
}
//申请手机smscode的回调函数
window.callback_sms = function (data) {
  arguments.callee.timeout = false;
  cloud.wait = true;
  if (data.error) {
    cloud.loginErrorTipEle.text(Rainbow.locale.get(data.error_code));
  } else {
    if (data.result) {
      cloud.tempPhone = data.result.phone;
      cloud.passwordInput.val(data.result.smsCode);
    }
  }
};
//手机账号登录的回调函数
window.callback_wifi_user = function (data) {
  arguments.callee.timeout = false;
  if (data.error) {
    //在此设置错误提示
    cloud.loginBtn.removeAttr("disabled");
    cloud.loginErrorTipEle.text(Rainbow.locale.get(data.error_code));
  } else {
    if (data.code) {
      var code = data.code;
      var uri = Rainbow.cloud.inPortalApiHost + Rainbow.cloud.phoneLoginTokenApiUri;
      var params = {
        "client_id": Rainbow.cloud.clientId,
        "client_secret": Rainbow.cloud.clientSecret,
        "grant_type": "authorization_code",
        "username": cloud.username,
        "code": code
      };
      var callback = "call_back";
      var callbackFuc = "callback_access_token";
      var timeout = 5000;
      var showTimeout = true;
      cloud.sendJsonp(uri, callback, callbackFuc, timeout, showTimeout, params);
    }
  }
};
//手机登录后的回调函数
window.callback_access_token = function (data) {
  arguments.callee.timeout = false;
  cloud.loginBtn.removeAttr("disabled");
  if (data.error) {
    cloud.loginErrorTipEle.text(Rainbow.locale.get(data.error_code));
  } else {
    cloud.setCookie(cloud.phoneInput.val(), cloud.passwordInput.val());
    window.location.href = Rainbow.cloud.afterLoginSucessPage;
  }
};
//一键登录的回调函数
window.callback_one_key = function (data) {
  arguments.callee.timeout = false;
  cloud.currentClickedOneClick.removeAttr("disabled");
  if (data.error) {
    cloud.loginErrorTipEle.text(Rainbow.locale.get(data.error_code));
  } else {
    window.location.href = Rainbow.cloud.afterLoginSucessPage;
  }
};
