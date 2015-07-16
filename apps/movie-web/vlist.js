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
            classId: [4, 3],
            title: "黄飞鸿",
            playLength: "124 min",
            banner: {
                isBanner: true,
                bannerImg: "./img/banner1.jpg"
            },
            isRecommand: true,
            hot: {
                isTop: true,
                isContent: false
            },
            videoUrl: "./video/movie01.mp4",
            hPosterUrl: "./img/i_h_1.jpg",
            vPosterUrl: "./img/i_v_1.jpg",
            fileSize: "40000",
            director: "Joe Johnston",
            writer: "Christopher Markus",
            starring: "Chris Evans/Hayley Atwell/Sebastian Stan",
            intro: "According to the famous American sniper Chris Kyle autobiography, American Sniper (American Sniper) adaptation. Chris Carr is one of Odessa, Texas, US Navy Seal snipers, four times to Iraq war, he shot and killed a total of 160 enemies during this period, the United States' most deadly marksman title.Kyle is the most famous record in 2008 from 2100 yards(1920 meters) long range sniper rifle outside to kill enemies with one bullet.May be that such a legendary figure,but in the February 2,2013,was shot dead at a shooting range."
        },

        {
            id: "2",
            classId: [1, 2],
            title: "超时空救兵",
            playLength: "95 min",
            banner: {
                isBanner: false,
                bannerImg: ""
            },
            isRecommand: true,
            hot: {
                isTop: true,
                isContent: false
            },
            videoUrl: "./video/movie02.mp4",
            hPosterUrl: "./img/i_h_2.jpg",
            vPosterUrl: "./img/i_v_2.jpg",
            fileSize: "535M",
            director: "林子聪",
            writer: "匿名",
            starring: "霍建华 、郭品超、林子聪、张达明、景甜",
            intro: "落魄文人二蛋在一枚铜钱的帮助下回到唐朝，成为舍身救人的大英雄，事业爱情双丰收，之后为躲避追杀，与古人回到现代，他们也体会到了各种搞笑奇遇，如此波折，让现代人学到了宽容豁达，让古代人学到了精干与务实。"
        },

        {
            id: "3",
            classId: [2],
            title: "车库乐队",
            playLength: "84 min",
            banner: {
                isBanner: true,
                bannerImg: "./img/banner2.jpg"
            },
            isRecommand: true,
            hot: {
                isTop: true,
                isContent: false
            },
            videoUrl: "./video/movie03.mp4",
            hPosterUrl: "./img/i_h_3.jpg",
            vPosterUrl: "./img/i_v_3.jpg",
            fileSize: "40000",
            director: "Jennifer Westcott",
            writer: "匿名",
            starring: "Brittney Wilson / 艾莉·哈维",
            intro: "一个濒临破裂边缘的高中摇滚乐队有一天被主唱的妹妹锁在车库里。在密闭的车库里，他们之间种种隔阂都被一一打开，每个人都说出了自己最想说的话，成员之间的关系也变得更加微妙……"
        },

        {
            id: "4",
            classId: [1, 4, 2],
            title: "心花怒放",
            playLength: "117 min",
            banner: {
                isBanner: false,
                bannerImg: ""
            },
            isRecommand: true,
            hot: {
                isTop: false,
                isContent: true
            },
            videoUrl: "./video/movie04.mp4",
            hPosterUrl: "./img/i_h_4.jpg",
            vPosterUrl: "./img/i_v_4.jpg",
            fileSize: "661M",
            director: "宁浩",
            writer: "匿名",
            starring: "黄渤、徐峥、袁泉、周冬雨、陶慧",
            intro: "耿浩（黄渤 饰）在偶遇“小三”危机，陷入情感困境。面对背叛，耿浩陷入了难以自拔的痛苦之中，好基友郝..."
        },

        {
            id: "5",
            classId: [3, 4],
            title: "武侠",
            playLength: "93 min",
            banner: {
                isBanner: false,
                bannerImg: ""
            },
            isRecommand: true,
            hot: {
                isTop: false,
                isContent: true
            },
            videoUrl: "./video/movie01.mp4",
            hPosterUrl: "./img/i_h_5.jpg",
            vPosterUrl: "./img/i_v_5.jpg",
            fileSize: "586M",
            director: "陈可辛",
            writer: "匿名",
            starring: "甄子丹、金城武、汤唯、惠英红、李小冉",
            intro: "1917年，中国西南边陲的刘家村。刘金喜（甄子丹 饰）和妻子阿玉（汤唯 饰）共同抚养两个儿子方正和晓天，.."
        },

        {
            id: "6",
            classId: [5, 3, 4, 9],
            title: "火力全开",
            playLength: "93 min",
            banner: {
                isBanner: false,
                bannerImg: ""
            },
            isRecommand: true,
            hot: {
                isTop: false,
                isContent: true
            },
            videoUrl: "./video/movie01.mp4",
            hPosterUrl: "./img/i_h_6.jpg",
            vPosterUrl: "./img/i_v_6.jpg",
            fileSize: "40000",
            director: "Justin Donnelly",
            writer: "匿名",
            starring: "Luke Goss、Tyler Johnston、Michael Eklund",
            intro: "布莱恩是一家私募基金创投公司的业务总监，无端端被资遣后，还倒欠公司一屁股债，狗急跳墙之际."
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