var mediaStore = function () {
    /**
     * @desc media store data structure
     * {
            id: 媒体资源ID，值类型int
            classId: 媒体资源类型{1=爱情 2=喜剧 3=动作 4=剧情 5=科幻 6=恐怖 7=动画 8=惊悚 9=犯罪 10=战争}，值类型array
            title: 媒体资源名称，值类型string
            playLength: 媒体资源播放时间,值类型:string
            banner:{
                isBanner: 媒体资源是否轮播展示,值类型boolean
                bannerImg:" 媒体资源轮播展示的图片，图片比例：950x407,值类型:string
            },
            isRecommand: 媒体资源是否被推荐,值类型:boolean
            hot:{
                isTop: 媒体资源是否在排行榜排名中,值类型:boolean
                isContent: 媒体资源是否在排行榜列表中,值类型:boolean
            },
            videoUrl:  媒体资源文件路径,值类型:string
            hPosterUrl:  媒体资源横图，图片比例：734x407,值类型:string
            vPosterUrl:  媒体资源竖图，图片比例：64x95,值类型:string
            fileSize: 媒体资源文件大小,值类型:string
            director: 导演,值类型:string
            writer: 作者,值类型:string
            starring: 领先主演,值类型:string
            intro: 详细介绍,值类型:string
        }
     */
    this.data = [
        {
            id: "1",
            classId: [3],
            classId1:"生活服务类",
            country:"中国",
            time:"2015年",
            title: "时尚美食",
            playLength: "约90分钟",
            banner: {
                isBanner: true,
                bannerImg: "./img/banner1.jpg"
            },
            isRecommand: true,
            hot: {
                isTop: true,
                isContent: false
            },
            videoUrl: "/video/variety/shishangmeishi10.mp4",
            hPosterUrl: "./img/i_h_1.jpg",
            vPosterUrl: "./img/i_v_1.jpg",
            fileSize: "",
            director: "",
            writer: "",
            starring: "",
            intro: "时尚美食节目由时尚星光传媒强力推出的一档大型生活服务类节目。节目以外景拍摄结合棚内录制的创新模式，开创了美食节目的新天地。并将国际美食与国内传统美食相结合，打造出最时尚、最前沿、最国际化的时尚美食栏目。"
        },

        {
            id: "2",
            classId: [ 3],
            classId1:"生活服务类",
            title: "时尚旅游",
            country:"中国",
            time:"2015年",
            playLength: "约40分钟",
            banner: {
                isBanner: true,
                bannerImg: "./img/banner2.jpg"
            },
            isRecommand: true,
            hot: {
                isTop: true,
                isContent: false
            },
            videoUrl: "/video/variety/shishanglvyou10.mp4",
            hPosterUrl: "./img/i_h_2.jpg",
            vPosterUrl: "./img/i_v_2.jpg",
            fileSize: "",
            director: " ",
            writer: "黄芸",
            starring: "",
            intro: "时尚旅游TV是国内首档，以明星作为体验者身份的深度旅游类节目。以旅行体验者个人魅力，展现以及目的地人文风情为主体的，与国内顶尖旅游杂志同名内容共享的一档高端旅游类电视精品节目。"
        }
        /*
        ,
        {
            id: "3",
            classId: [ 3],
            classId1:"大型户外竞技真人秀",
            title: "奔跑吧兄弟第二季",
            country:"中国",
            playLength: "约90分钟",
            time:"2015年",
            banner: {
                isBanner: false,
                bannerImg: "./img/banner3.jpg"
            },
            isRecommand: true,
            hot: {
                isTop: true,
                isContent: false
            },
            videoUrl: "/video/variety/shishanglvyou.mp4",
            hPosterUrl: "./img/i_h_3.jpg",
            vPosterUrl: "./img/i_v_3.jpg",
            fileSize: "",
            director: " ",
            writer: "",
            starring: "邓超、Angelababy（杨颖）、李晨、郑恺、陈赫、王祖蓝等",
            intro: "《奔跑吧兄弟第二季》共12期，第二季“奔跑团”阵容：邓超、Angelababy（杨颖）、郑恺、李晨、王祖蓝、陈赫、包贝尔。主要嘉宾有范冰冰、韩庚、黄晓明、欧弟、宋佳、林更新、李治廷、叶祖新、蒋劲夫、张艺兴、吴奇隆、陈乔恩等。"
        }*/


    ];

    /**
     * @desc  根据媒体资源类型，获取所需资源列表
     * @param classId
     * @returns {Array}
     * @public
     */
    this._getListByClassId = function (classId) {
        var i = this.data.length;
        var result = new Array();
        while (i--) {
            var include = false;
            var element = this.data[i];
            var classArray = element.classId;
            if(classArray){
                var j = classArray.length;
                while (j--) {
                    if (classArray[j] == classId) {
                        include = true;
                    }
                }
                if (include) {
                    result.push(element);
                }
            }
        }
        return result.reverse();
    };

    /**
     * @desc 根据媒体资源id，获取相应媒体资源对象
     * @param id
     * @param callback
     * @returns {Array,<T>}
     * @public
     */
    this._getListById = function (id,callback) {
        var i = this.data.length;
        var result = new Array();
        while (i--) {
            var element = this.data[i];
            if (element.id==id) {
                result.push(element);
            }
        }
        result=result.reverse();
        callback(id,result);
        return result;
    };


    /**
     * @desc 根据是否被推荐，获取相应资源列表
     * @returns {Array}
     * @public
     */
    this._getRecommandList = function () {
        var i = this.data.length;
        var result = new Array();
        while (i--) {
            var element = this.data[i];
            if (element.isRecommand) {
                result.push(element);
            }
        }
        return result.reverse();
    };

    /**
     * @desc 根据是否需要轮播，获取相应资源列表
     * @returns {Array}
     * @public
     */
    this._getBannerList = function () {
        var i = this.data.length;
        var result = new Array();
        while (i--) {
            var element = this.data[i];
            if(element.banner){
                if (element.banner.isBanner) {
                    result.push(element);
                }
            }
        }
        return result.reverse();
    };

    /**
     * @desc 根据是否在排行榜，同时是否在排行上排名，获取相应资源
     * @returns {Array}
     * @public
     */
    this._getHotTopList = function () {
        var i = this.data.length;
        var result = new Array();
        while (i--) {
            var element = this.data[i];
            if(element.hot){
                if (element.hot.isTop) {
                    result.push(element);
                }
            }
        }
        return result.reverse();
    };

    /**
     * @desc 根据是否在排行榜，同时是否在排行上后补中，获取相应资源
     * @returns {Array}
     * @private
     */
    this._getHotContentList = function () {
        var i = this.data.length;
        var result = new Array();
        while (i--) {
            var element = this.data[i];
            if(element.hot){
                if (element.hot.isContent) {
                    result.push(element);
                }
            }
        }
        return result.reverse();
    };
}