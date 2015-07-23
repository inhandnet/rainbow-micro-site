﻿var mediaStore = function () {
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
            title: "真正男子汉1",
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
            videoUrl: "./video/movie01.mp4",
            hPosterUrl: "./img/i_h_1.jpg",
            vPosterUrl: "./img/i_v_1.jpg",
            fileSize: "60M",
            director: "梁书源、罗煦明、刘庆荣",
            writer: "",
            starring: "张丰毅、郭晓东、王宝强、袁弘、刘昊然、杜海涛、欧豪",
            intro: "《真正男子汉》作为国内首档明星军旅题材的真人秀节目，是湖南卫视由韩国MBC电视台综艺节目《真正的男人》"
        },

        {
            id: "2",
            classId: [ 3],
            title: "奔跑吧兄弟1",
            playLength: "约20分钟",
            banner: {
                isBanner: true,
                bannerImg: "./img/banner2.jpg"
            },
            isRecommand: true,
            hot: {
                isTop: true,
                isContent: false
            },
            videoUrl: "./video/movie02.mp4",
            hPosterUrl: "./img/i_h_2.jpg",
            vPosterUrl: "./img/i_v_2.jpg",
            fileSize: "40000",
            director: "陆皓、岑俊义 ",
            writer: "",
            starring: "邓超、杨颖、王宝强、李晨、陈赫、郑恺、王祖蓝、包贝尔",
            intro: "《奔跑吧兄弟》是由浙江卫视节目中心和韩国SBS团队联合拍摄制作，双方采取混编团队的方法进行，最终呈现的效果，既有《Running Man》中的特色游戏，也成为中国版区别于原版的独特之处。"
        },

        {
            id: "3",
            classId: [ 3],
            title: "真正男子汉2",
            playLength: "约10分钟",
            banner: {
                isBanner: false,
                bannerImg: ""
            },
            isRecommand: true,
            hot: {
                isTop: true,
                isContent: false
            },
            videoUrl: "./video/movie03.mp4",
            hPosterUrl: "./img/i_h_3.jpg",
            vPosterUrl: "./img/i_v_3.jpg",
            fileSize: "60M",
            director: "梁书源、罗煦明、刘庆荣",
            writer: "",
            starring: "张丰毅、郭晓东、王宝强、袁弘、刘昊然、杜海涛、欧豪",
            intro: "《真正男子汉》作为国内首档明星军旅题材的真人秀节目，是湖南卫视由韩国MBC电视台综艺节目《真正的男人》"
        },

        {
            id: "4",
            classId: [3, 4],
            title: "奔跑吧兄弟2",
            playLength: "约30分钟",
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
            fileSize: "40000",
            director: "陆皓、岑俊义 ",
            writer: "",
            starring: "邓超、杨颖、王宝强、李晨、陈赫、郑恺、王祖蓝、包贝尔",
            intro: "《奔跑吧兄弟》是由浙江卫视节目中心和韩国SBS团队联合拍摄制作，双方采取混编团队的方法进行，最终呈现的效果，既有《Running Man》中的特色游戏，也成为中国版区别于原版的独特之处。"
        },

        {
            id: "5",
            classId: [3, 9],
            title: "快乐大本营1",
            playLength: "约36分钟",
            banner: {
                isBanner: false,
                bannerImg: ""
            },
            isRecommand: true,
            hot: {
                isTop: false,
                isContent: true
            },
            videoUrl: "./video/movie05.mp4",
            hPosterUrl: "./img/i_h_5.jpg",
            vPosterUrl: "./img/i_v_5.jpg",
            fileSize: "40000",
            director: "不详",
            writer: "",
            starring: "何炅、谢娜、李维嘉、杜海涛、吴昕",
            intro: "《快乐大本营》定位为为普通观众或草根团体及组合打造了一个展现个性的“全民娱乐”平台和分享快乐的机会，同时也极力为电视机前的观众推介时尚、新奇的文艺表演形式，传递“快乐至上”的娱乐精神，突出了以观众为主体的“娱乐天下”的节目理念。"
        },

        {
            id: "6",
            classId: [5, 9],
            title: "快乐大本营2",
            playLength: "约36分钟",
            banner: {
                isBanner: false,
                bannerImg: ""
            },
            isRecommand: true,
            hot: {
                isTop: false,
                isContent: true
            },
			videoUrl: "./video/movie06.mp4",
            hPosterUrl: "./img/i_h_6.jpg",
            vPosterUrl: "./img/i_v_6.jpg",
            fileSize: "40000",
            director: "不详",
            writer: "",
            starring: "何炅、谢娜、李维嘉、杜海涛、吴昕",
            intro: "《快乐大本营》定位为为普通观众或草根团体及组合打造了一个展现个性的“全民娱乐”平台和分享快乐的机会，同时也极力为电视机前的观众推介时尚、新奇的文艺表演形式，传递“快乐至上”的娱乐精神，突出了以观众为主体的“娱乐天下”的节目理念。"
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