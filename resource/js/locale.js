//locale 国际化对象，具体方法含义参照项目中的文档
	 var packages={
		"default":"base",
		"base":"language"	
	};
	var locale = {
        projectPath:"",//项目所在根目录，通常不需要填写
		browserLang:"",
		userLang:"",
		localLang:"",
		storageLang:"",
		langArr:["en","zh_CN"],
		langPacks:{},
		packUrl:"",
		element:"*",
		pos:packages["default"],
		lang:"en", //当前语言环境
		_setBrowserLang:function(){
			var browser = navigator.language || navigator.browserLanguage;
			var browserLang = browser.toLowerCase().substring(0,2);
			var langArr = this.langArr;
			var arrCurrent;
			for(var num = 0;num < langArr.length;num++){
				arrCurrent = langArr[num].toLowerCase().substring(0,2);
				if(browserLang == arrCurrent){
					this.browserLang = langArr[num];
					return;
				}
			}
		},
		_setUserLang:function(opt){
			var langArr = this.langArr;
			for(var num = 0;num < langArr.length;num++){
				if(langArr[num].toLowerCase().indexOf(opt.toLowerCase()) > -1){
					this.userLang = langArr[num];
					return;
				}
			}
		},
		_setStorageLang:function(opt){
			this.storageLang = opt;
		},
		_setLocalLang:function(){
			if(this.storageLang && this.userLang){
				this.localLang = this.userLang;
			}else if(this.storageLang && !this.userLang){
				this.localLang = this.storageLang;
			}else if(!this.storageLang && this.userLang){
				this.localLang = this.userLang;
			}else{
				this.localLang = this.browserLang;
			}
			this._setStorage(this.localLang);
		},
		_setLang:function(){
			if(!this.browserLang){
				this._setBrowserLang();
			}
			if(!this.storageLang){
				this._setStorageLang(localStorage.getItem("language"));
			}
			if(this.lang){
				this._setUserLang(this.lang);
			}
			this._setLocalLang();
		},
		_setStorage:function(lang){
			this._setStorageLang(lang);
			localStorage.setItem("language",lang);
		},
		_getStorageLang:function(){
			return localStorage.getItem("language");
		},
		_loadPack:function(callback){
			var self = this;
			var url = this.projectPath +"/resource/" + this.packUrl + "/" + this.storageLang + "/lang.js";
            $.ajax({
				  url: url,
				  dataType: "script",
				  async: false,
				  success: function(){
						self._cacheLangPacks();
						if(callback){
							if($.isArray(callback)){
								for(var num=0;num<callback.length;num++){
									callback[num]();
								}
							}else{
								callback();
							}
						}
					}
			});
		},
		_hasPacks:function(){
			var langPacks = this.langPacks;
			for(var attr in langPacks){
				if(attr == this.storageLang){
					for(var _attr in langPacks[attr]){
						if(_attr == this.pos){
							return true;
						}
					}
				}
			}
		},
		_cacheLangPacks:function(){
			var langName,langObj;
			var pos = this.pos;
			var langPacks = this.langPacks;
			for(var attr in lang){
				langName = attr;
				langObj = lang[attr];
			}
			if(langPacks[langName]){
				langPacks[langName][pos] = langObj;
			}else{
				langPacks[langName] = {};
				langPacks[langName][pos] = langObj;
			}
			this.langPacks = langPacks;
		},
		_getPackUrl:function(){
			if(this.pos){
				packUrl = packages[this.pos];
				if(packUrl){
					this.packUrl = packUrl;
				}else{
					this.pos = packages["default"];
					this.packUrl = packages[this.pos];
				}
			}else{
				this.pos = packages["default"];
				this.packUrl = packages[this.pos];
			}
		},
		_languageIsCorrect:function(){
			if(!this.storageLang || !this._getStorageLang()){
				return false;
			}else{
				if(this.lang && this.lang != this.storageLang){
					return false;
				}else{
					return true;
				}
			}
		},
		_get:function(opt,variableArr){
			var self = this;
			var obj = {};
			if(opt && $.isPlainObject(opt)){
				obj.str = opt.lang;
				this.pos = opt.pos ? opt.pos : "base";
			}else{
				obj.str = opt;
				this.pos = "base";
			}
			if(!this._languageIsCorrect()){
				this._setLang();
			}
			if(this._hasPacks()){
				self.str = variableArr ? this._result(obj,variableArr) : this._result(obj);
			}else{
				this._getPackUrl();
				variableArr ? this._loadPack(function(){self.str = self._result(obj,variableArr);}) : this._loadPack(function(){self.str = self._result(obj);});
			};
			return self.str;
		},
		get:function(opt,variableArr){
			return this._get(opt,variableArr);
		},
		_render:function(opt){
			var self = this;
			if(opt.method == "render"){
				this.pos = opt.pos ? opt.pos : "base";
				this.element = opt.element ? opt.element : "*";
			}else if(opt.method == "set"){
				this.lang = opt.lang ? opt.lang : "zh_CN";
				this.pos = opt.pos ? opt.pos : "base";
				this.element = "*";
			}
			if(!this._languageIsCorrect()){
				this._setLang();
			}
			if(this._hasPacks()){
				this._each(self.element);
			}else{
				this._getPackUrl();
				this._loadPack(function(){self._each(self.element);});
			};
		},
		render:function(opt){
			if(opt && $.isPlainObject(opt)){
				opt.method = "render";
				this._render(opt);
			}else{
				this._render({method:"render"});
			}
		},
		set:function(opt){
			if(opt && $.isPlainObject(opt)){
				opt.method = "set";
				this._render(opt);
			}
		},
		_each:function(){
			var self = this;
			var element = this.element;
			var storageLang = self.storageLang;
			var langPacks = self.langPacks;
			var $dom;
			if(typeof this.element == "string"){
				$dom = $(element);
			}else{
				$dom = element;
			}
			$dom.find("[lang]").each(function(){
				var $this = $(this);
				var langContent = $this.attr("lang").toLowerCase();
				var semiIndex = langContent.indexOf(";");
				var lbracketIndex = langContent.indexOf("{");
				var strlen = langContent.length;
				var colonIndex,attrId,attrValue,dicKey;
				if(lbracketIndex > -1){
					var rbracketIndex = langContent.indexOf("}");
					if(semiIndex > -1){
						langContent = langContent.substring(lbracketIndex+1,semiIndex);
					}else{
						langContent = langContent.substring(lbracketIndex+1,rbracketIndex);
					}
					attrArr = langContent.split(",");
					for(var num=0,arrLen=attrArr.length;num<arrLen;num++){
						attr = attrArr[num];
						colonIndex = attr.indexOf(":");
						attrId = attr.substring(0,colonIndex);
						attrValue = attr.substring(colonIndex+1);
						result = self._result({str:attrValue});
						self._return({$this:$this,attrId:attrId,str:result});
					}
				}else if(langContent){
					colonIndex = langContent.indexOf(":");
					if(semiIndex > -1){
						attrId = langContent.substring(0,colonIndex);
						attrValue = langContent.substring(colonIndex+1,strlen-1);
					}else{
						attrId = langContent.substring(0,colonIndex);
						attrValue = langContent.substring(colonIndex+1);
					}
					result = self._result({str:attrValue});
					self._return({$this:$this,attrId:attrId,str:result});
				}
			});
		},
		_result:function(obj,variableArr){
			var pos = this.pos;
			var langPacks = this.langPacks;
			var storageLang = this.storageLang;
			var attrValue = obj.str.toString();
			var str = "";
			if(attrValue.indexOf("+") > -1){
				var arr = [];
				var current;
				arr = attrValue.split("+");
				for(var num=0;num<arr.length;num++){
					current = arr[num];
					if(storageLang == "en"){
						if(current.match(/\W/)){
							str += current + " ";
						}else{
							str += langPacks[storageLang][pos][current] + " ";
						}
					}else{
						if(current.match(/\W/)){
							str += current;
						}else{
							str += langPacks[storageLang][pos][current];
						}
					}
				}
				str = str.replace(/\s$/g,"");
			}else{
				str = langPacks[storageLang][pos][attrValue];
			}
			if(variableArr && str){
				for(var num=0;num<variableArr.length;num++){
					if(str.indexOf("{"+num+"}") > -1){
						str = str.replace("{"+num+"}",variableArr[num]);
					}
				};
			}
			return str;
		},
		_return:function(obj){
			var $this = obj.$this;
			var attrId = obj.attrId;
			var str = obj.str;
			switch(attrId){
				case "text":
					$this.text(str);
					break;
				case "value":
					$this.val(str);
					break;
				case "title":
					$this.attr("title",str);
					break;
				case "alt":
					$this.attr("alt",str);
					break;
				case "placeholder":
					$this.attr("placeholder",str);
					break;
			}
		},
		current:function(){
			var lang = this._getStorageLang();
			switch(lang){
				case "en":
					return 1;
					break;
				case "zh_CN":
					return 2;
					break;
			}
		}	
	};
//validator 插件的封装对象,具体方法含义参照项目中的文档
var validator={	
		storageLang:null,
		langPacks:{},
		element:null,
		elements:[],
		validation:null,
		render:function(element,paramObj){
			this._cacheElements(element,paramObj);
			this._cacheStorageLang();
//			this.hideAll();
//			this._destroy();
			this._render();
		},
		_cacheStorageLang:function(){
			var lang = this._returnStorageLang();
			if(!this.storageLang){
				this.storageLang = lang ? lang : "zh_CN";
			}else{
				if(this.storageLang != lang){
					this.storageLang = lang ? lang : "zh_CN";
				}
			}
		},
		_cacheElements:function(element,paramObj){
			var self = this;
			this.element = element;
			var elements = this.elements;
			var defaultObj = {
				fadeDuration: 0,
				showOneMessage:true,
				focusFirstField:true,
				customFunctions:{
					cloudInput:function(field, rules, i, options){
						var nohtml  = new RegExp("(<[^>]+>)|(&gt|&lt|&amp|&quot|&nbsp)");
						if( nohtml.test(field.val()) ){
							return options.allrules.nohtml.alertText;
						}
						return true;
					}
				}
			};
			paramObj = $.extend(paramObj,defaultObj);
			if(elements.length > 0){
				var count = 0;
				$.each(elements,function(index,obj){
					if(element == obj.element){
						var currentParamObj = obj.paramObj;
						var newParamObj = $.extend(currentParamObj,paramObj);
						self.elements[index]["paramObj"] = newParamObj;
						count++;
					}
				});
				if(count === 0){
					this.elements.push({element:element,paramObj:paramObj});
				}
			}else{
				this.elements.push({element:element,paramObj:paramObj});
			}
		},
		result:function(element){
			if(this.validation){
				if(element){
					return $(element).validationEngine('validate');
				}else{
					return $(this.element).validationEngine('validate');
				}
			}
		},
		prompt:function(element,obj){
			$(element).validationEngine("showPrompt",obj.text,"load",obj.promptPosition?obj.promptPosition:"topLeft",true);
		},
		hide:function(element){
			if(element){
				$(element).validationEngine('hide');
			}else{
				$(this.element).validationEngine('hide');
			}
		},
		hideAll:function(element){
			if(element){
				$(element).validationEngine('hideAll');
			}else{
				var elements = this.elements;
				if(this.validation){
					$.each(elements,function(index,obj){
						$(obj.element).validationEngine('hideAll');
					});
				}
			}
		},
		_destroy:function(){
			var elements = this.elements;
			if(this.validation){
				this.validation = null;
				$.each(elements,function(index,obj){
					$(obj.element).validationEngine('detach');
				});
			}
		},
		_render:function(){
			var storageLang = this.storageLang;
			var hasPack = function(){
				var langPacks = self.langPacks;
				for(var attr in langPacks){
					if(attr == storageLang){
						return true;
					}
				}
			};
			if(hasPack()){
				this._renderForm();
			}else{
				this._loadPack();
			}
		},
		_returnStorageLang:function(){
			return localStorage.getItem("language");
		},
		_renderForm:function(){
			var self = this;
			var elements = this.elements;
			self._returnAllRules();
			$.each(elements,function(index,obj){
				self.validation = $(obj.element).validationEngine('attach',obj.paramObj);
			});
		},
		_loadPack:function(){
			var self = this;
			var url = this.projectPath +"/resource/language/"+ self.storageLang + "/validationengine.lang.js";
			$.getScript(url,function(data){
				self._cacheLangPacks();
				self._renderForm();
			});
		},
		_returnAllRules:function(){
			var self = this;
			var returnAllRules = function(){
				$.validationEngineLanguage.allRules = self.langPacks[self.storageLang];
			};
			return returnAllRules();
		},
		_cacheLangPacks:function(){
			var self = this;
			var lang = $.validationEngineLanguage;
			var langName,langObj;
			for(var attr in lang){
				langName = attr;
				langObj = lang[attr];
			}
			self.langPacks[langName] = langObj;
		}
};

//各对象加上交互
locale.render();