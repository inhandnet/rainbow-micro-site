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
            classId: [5, 3],
            title: "军营相别",
            playLength: "约4分钟",
            banner: {
                isBanner: true,
                bannerImg: "./img/banner1.jpg"
            },
            isRecommand: true,
            hot: {
                isTop: true,
                isContent: false
            },
            videoUrl: "./video/junyingxiangbie.mp4",
            hPosterUrl: "./img/i_h_1.jpg",
            vPosterUrl: "./img/i_v_1.jpg",
            fileSize: "40000",
            director: "",
            writer: "",
            starring: "",
            intro: ""
        },

        {
            id: "2",
            classId: [5, 3],
            title: "常来常往",
            playLength: "约4分钟",
            banner: {
                isBanner: false,
                bannerImg: ""
            },
            isRecommand: true,
            hot: {
                isTop: true,
                isContent: false
            },
            videoUrl: "./video/changlaichangwang.mp4",
            hPosterUrl: "./img/i_h_2.jpg",
            vPosterUrl: "./img/i_v_2.jpg",
            fileSize: "15M",
            director: "",
            writer: "",
            starring: "",
            intro: ""
        },

        {
            id: "3",
            classId: [8, 5, 3],
            title: "大漠戈壁",
            playLength: "约4分钟",
            banner: {
                isBanner: true,
                bannerImg: "./img/banner2.jpg"
            },
            isRecommand: true,
            hot: {
                isTop: false,
                isContent: false
            },
           videoUrl: "./video/damogebi.mp4",
            hPosterUrl: "./img/i_h_3.jpg",
            vPosterUrl: "./img/i_v_3.jpg",
            fileSize: "15M",
            director: "",
            writer: "",
            starring: "",
            intro: ""
        },

        {
            id: "4",
            classId: [3, 4, 5, 9],
            title: "共圆中国梦",
            playLength: "约3分钟",
            banner: {
                isBanner: false,
                bannerImg: ""
            },
            isRecommand: true,
            hot: {
                isTop: true,
                isContent: false
            },
           videoUrl: "./video/gongyuanzhongguomeng.mp4",
            hPosterUrl: "./img/i_h_4.jpg",
            vPosterUrl: "./img/i_v_4.jpg",
            fileSize: "",
           director: "",
            writer: "",
            starring: "",
            intro: ""
        },

        {
            id: "5",
            classId: [3, 9],
            title: "五环之歌",
            playLength: "约4分钟",
            banner: {
                isBanner: false,
                bannerImg: ""
            },
            isRecommand: true,
            hot: {
                isTop: false,
                isContent: false
            },
            videoUrl: "./video/wuhuanzhige.mp4",
            hPosterUrl: "./img/i_h_5.jpg",
            vPosterUrl: "./img/i_v_5.jpg",
            fileSize: "",
            director: "",
            writer: "",
            starring: "",
            intro: ""
        },

        {
            id: "6",
            classId: [5, 9],
            title: "雅美蝶",
            playLength: "约4分钟",
            banner: {
                isBanner: false,
                bannerImg: ""
            },
            isRecommand: true,
            hot: {
                isTop: false,
                isContent: true
            },
             videoUrl: "./video/yameidie.mp4",
            hPosterUrl: "./img/i_h_6.jpg",
            vPosterUrl: "./img/i_v_6.jpg",
            fileSize: "",
            director: "",
            writer: "",
            starring: "",
            intro: ""
        },

        {
            id: "7",
            classId: [5, 9],
            title: "遗憾",
            playLength: "约4分钟",
            banner: {
                isBanner: false,
                bannerImg: ""
            },
            isRecommand: true,
            hot: {
                isTop: false,
                isContent: true
            },
            videoUrl: "./video/yihan.mp4",
            hPosterUrl: "./img/i_h_7.jpg",
            vPosterUrl: "./img/i_v_7.jpg",
            fileSize: "",
            director: "",
            writer: "",
            starring: "",
            intro: ""
        },

        {
            id: "8",
            classId: [5, 9],
            title: "在水一方",
            playLength: "约4分钟",
            banner: {
                isBanner: false,
                bannerImg: ""
            },
            isRecommand: true,
            hot: {
                isTop: false,
                isContent: true
            },
            videoUrl: "./video/zaishiuyifang.mp4",
            hPosterUrl: "./img/i_h_8.jpg",
            vPosterUrl: "./img/i_v_8.jpg",
            fileSize: "",
            director: "",
            writer: "",
            starring: "",
            intro: ""
        },
        {
            id: "9",
            classId: [5, 9],
            title: "战友啊战友",
            playLength: "约4分钟",
            banner: {
                isBanner: false,
                bannerImg: ""
            },
            isRecommand: true,
            hot: {
                isTop: false,
                isContent: true
            },
            videoUrl: "./video/zhanyouazhanyou.mp4",
            hPosterUrl: "./img/i_h_9.jpg",
            vPosterUrl: "./img/i_v_9.jpg",
            fileSize: "",
            director: "",
            writer: "",
            starring: "",
            intro: ""
        },
        {
            id: "10",
            classId: [5, 9],
            title: "至少还有你",
            playLength: "约4分钟",
            banner: {
                isBanner: false,
                bannerImg: ""
            },
            isRecommand: true,
            hot: {
                isTop: false,
                isContent: true
            },
            videoUrl: "./video/zhishaohaiyouni.mp4",
            hPosterUrl: "./img/i_h_10.jpg",
            vPosterUrl: "./img/i_v_10.jpg",
            fileSize: "",
            director: "",
            writer: "",
            starring: "",
            intro: ""
        }
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