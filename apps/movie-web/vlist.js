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
        },
        {
            id: "7",
            classId: [1,2,, 4],
            title: "暴走吧女人",
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
            videoUrl: "./video/movie07.mp4",
            hPosterUrl: "./img/i_h_7.jpg",
            vPosterUrl: "./img/i_v_7.jpg",
            fileSize: "586M",
            director: "董董",
            writer: "匿名",
            starring: "范文芳、李斯、丹妮、范逸臣、王莎莎、刘添月",
            intro: "强大的都市压力让身为娱乐记者的牛牛（李斯丹妮 饰）喘不过气。她曾苦苦迷恋着一个男人，却没有甜."
        },
        {
            id: "8",
            classId: [10, 4],
            title: "尘土帝国",
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
            videoUrl: "./video/movie08.mp4",
            hPosterUrl: "./img/i_h_8.jpg",
            vPosterUrl: "./img/i_v_8.jpg",
            fileSize: "586M",
            director: "彼得·斯戴宾斯",
            writer: "匿名",
            starring: " 卢克·科比 Michael Cram Barbara Gordon Sarah Manninen",
            intro: "27岁的莱娜带着13岁的女儿皮卡在多伦多生活，一次皮卡吸毒过量住院，莱娜才意识到女儿正走上自己的老路，于是带女儿回到故乡母亲的家里。三代女人相似的人生轨迹似乎是摆不脱的宿命轮回。"
        },
        {
            id: "9",
            classId: [1, 2, 4],
            title: "大叔我爱你",
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
            videoUrl: "./video/movie09.mp4",
            hPosterUrl: "./img/i_h_9.jpg",
            vPosterUrl: "./img/i_v_9.jpg",
            fileSize: "586M",
            director: "胡崇曦",
            writer: "匿名",
            starring: "张智霖、付梦妮、翁虹、野营、郭美孜",
            intro: "十八岁的“红星社二代”乐队主唱沈绮（付梦妮 饰），在一起事故中，与刚从香港归来的风度翩翩中年.."
        },
        {
            id: "10",
            classId: [2, 4],
            title: "大众教育",
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
            videoUrl: "./video/movie10.mp4",
            hPosterUrl: "./img/i_h_10.jpg",
            vPosterUrl: "./img/i_v_10.jpg",
            fileSize: "586M",
            director: "Tom Morris",
            writer: "匿名",
            starring: "克里斯·谢菲尔德玛雅拉·沃什萨姆·阿耶尔斯鲍比·坎波",
            intro: "男主拿到了网球奖学金，准备去读当地的一所大学。但他没有告诉父母一点:他其实还没有毕业！ 因此在.."
        },
        {
            id: "11",
            classId: [3, 9],
            title: "夺宝联盟",
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
            videoUrl: "./video/movie11.mp4",
            hPosterUrl: "./img/i_h_11.jpg",
            vPosterUrl: "./img/i_v_11.jpg",
            fileSize: "586M",
            director: "崔东勋",
            writer: "匿名",
            starring: "全智贤、金允石、李政宰、金惠秀、金海淑",
            intro: "两组人5名身怀绝技的小偷接受前黑帮组织老大的提议与，4名中国犯罪马表面上是“同盟”，但暗地里却为了独..."
        },
        {
            id: "12",
            classId: [1, 2, 4],
            title: "关于爱情和那些魔鬼",
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
            videoUrl: "./video/movie12.mp4",
            hPosterUrl: "./img/i_h_12.jpg",
            vPosterUrl: "./img/i_v_12.jpg",
            fileSize: "586M",
            director: "赵小僮",
            writer: "匿名",
            starring: "杨童舒、莫少聪、洪剑涛、嵇少宣、刘凤娇",
            intro: "个女青年应聘到一家工厂,一进工厂就遇到难题就崩溃就冲动,一冲动就受伤就住进医院,一进医院里她."
        },
        {
            id: "13",
            classId: [ 4],
            title: "黑帮少年",
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
            videoUrl: "./video/movie13.mp4",
            hPosterUrl: "./img/i_h_13.jpg",
            vPosterUrl: "./img/i_v_13.jpg",
            fileSize: "586M",
            director: "",
            writer: "匿名",
            starring: "Hoang Bui Mike Burnell David Huynh Jessika Van Peter Chanthavongsak",
            intro: "一群小孩子成长在一个充斥着暴力的家庭，同时他们的家庭也陷入了支离破碎。他们在这样的环境下如何可以认清自己？生活会不会让他们开始学会成长？.."
        },
        {
            id: "14",
            classId: [8],
            title: "加州靡局",
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
            videoUrl: "./video/movie14.mp4",
            hPosterUrl: "./img/i_h_14.jpg",
            vPosterUrl: "./img/i_v_14.jpg",
            fileSize: "586M",
            director: "Marco Weber",
            writer: "匿名",
            starring: "吉娅·曼特纳，戴文·沃克海瑟，Spencer Daniels，Rachel Seiferth，曼尼什·达亚尔",
            intro: "加州马里布海滩的三个年轻人结识了刚来到马里布不久的女孩克洛伊：热爱滑浪尼克和杰森被克洛伊的美貌和神秘气质吸引，刚刚失去母亲的希拉里也很快与克洛伊交心结为好友。"
        },
        {
            id: "15",
            classId: [2],
            title: "哭笑不得",
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
            videoUrl: "./video/movie15.mp4",
            hPosterUrl: "./img/i_h_15.jpg",
            vPosterUrl: "./img/i_v_15.jpg",
            fileSize: "586M",
            director: "罗斌",
            writer: "匿名",
            starring: "王喜，萧蔷，柳岩",
            intro: "该片讲述一个情感陪护老板因为工作原因结实了女主角，在小打小闹中双方萌生了爱意，最后克服重重困难在一起的故事。.."
        },
        {
            id: "16",
            classId: [9, 4],
            title: "冷血",
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
            videoUrl: "./video/movie16.mp4",
            hPosterUrl: "./img/i_h_16.jpg",
            vPosterUrl: "./img/i_v_16.jpg",
            fileSize: "586M",
            director: "理查德·布鲁克斯",
            writer: "匿名",
            starring: "Robert Blake斯科特·威尔逊John ForsythePaul Stewart",
            intro: "根据美国作家楚曼卡波堤著名的报告文学拍摄而成。导演采取黑白纪录片式的纪实手法，忠实地观察可以..."
        },
        {
            id: "17",
            classId: [ 4],
            title: "蜜糖",
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
            videoUrl: "./video/movie17.mp4",
            hPosterUrl: "./img/i_h_17.jpg",
            vPosterUrl: "./img/i_v_17.jpg",
            fileSize: "586M",
            director: "洛蒂米·瑞恩沃特",
            writer: "匿名",
            starring: "施蕾·葛莱姆斯马歇尔·奥尔曼奥斯汀·威廉姆斯科宾·布鲁",
            intro: "影片根据真实的故事改编，一个名叫Sugar（施蕾·葛莱姆斯 饰）的女孩，她有着不幸的过去，当家庭...."
        },
        {
            id: "18",
            classId: [2],
            title: "女人公敌",
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
            videoUrl: "./video/movie18.mp4",
            hPosterUrl: "./img/i_h_18.jpg",
            vPosterUrl: "./img/i_v_18.jpg",
            fileSize: "586M",
            director: "管晓杰、陈欧",
            writer: "匿名",
            starring: "赵奕欢、文卓、刘惠璞、邱萧婵、文梦洋",
            intro: "他们说，有女人的地方就有战场，不低调只有死路一条；他们说，做女人，要么忍，要么残忍，看不见的敌人才...."
        },
        {
            id: "19",
            classId: [1, 2, 4],
            title: "胖妞寻爱记",
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
            videoUrl: "./video/movie19.mp4",
            hPosterUrl: "./img/i_h_19.jpg",
            vPosterUrl: "./img/i_v_19.jpg",
            fileSize: "586M",
            director: "Brad Leong",
            writer: "匿名",
            starring: "萨拉·茹苏菲·蒙克乔翰·厄布埃利奥特·古尔德",
            intro: "不知不觉地困在了一个得不到爱的家庭，一个年轻的单身女人迫切想要过自己的生活。当她独自一个人坐..."
        },
        {
            id: "20",
            classId: [7],
            title: "世博总动员",
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
            videoUrl: "./video/movie20.mp4",
            hPosterUrl: "./img/i_h_20.jpg",
            vPosterUrl: "./img/i_v_20.jpg",
            fileSize: "586M",
            director: "刘大刀",
            writer: "匿名",
            starring: "",
            intro: "1851年，中国商人徐荣村带着“荣记湖丝”出现在首届伦敦世博会上，纯净天然的中华丝绸一举摘得金、银两枚奖牌，扬名海外。"
        },
        {
            id: "21",
            classId: [8],
            title: "委以重任",
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
            videoUrl: "./video/movie21.mp4",
            hPosterUrl: "./img/i_h_21.jpg",
            vPosterUrl: "./img/i_v_21.jpg",
            fileSize: "586M",
            director: "",
            writer: "匿名",
            starring: " Geoffroy Thiebaut Franck Cabot-David Alexandre Le Provost Géraldine Girault Baker Guennoun",
            intro: "影片开头是胡狼卡洛斯拿烟头烫死一只蛛网上的蜘蛛。这是部1994年拍的电影，是追捕胡狼卡洛斯的故事。胡狼卡洛斯是拉登之前最著名的恐怖分子，几乎是所有西方国家的情报机构重点关照的对象。现在关于他的资料能找"
        },
        {
            id: "22",
            classId: [1, 2, 8],
            title: "我雇凶杀你",
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
            videoUrl: "./video/movie22.mp4",
            hPosterUrl: "./img/i_h_22.jpg",
            vPosterUrl: "./img/i_v_22.jpg",
            fileSize: "586M",
            director: "Linsey Stewart",
            writer: "Linsey Stewart",
            starring: "艾伦·阿什莫，莎拉·坎宁",
            intro: "1917年，中国西南边陲的刘家村。刘金喜（甄子丹 饰）和妻子阿玉（汤唯 饰）共同抚养两个儿子方正和晓天，.."
        },
        {
            id: "23",
            classId: [ 4],
            title: "下一个奇迹",
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
            videoUrl: "./video/movie23.mp4",
            hPosterUrl: "./img/i_h_23.jpg",
            vPosterUrl: "./img/i_v_23.jpg",
            fileSize: "586M",
            director: "梁修身、梦继",
            writer: "匿名",
            starring: "谢霆锋 ，张卫健，王鸥，韩雨芹，海清，吴秀波，李光洁，林永健，王智，丁子峻",
            intro: "该剧主要讲述了患有忧郁症的主人公梁海恩（谢霆锋饰）在亲情、友情、爱情的支持下最终战胜自己重获新生，他通过不断的努力奋进获得人生的成功的励志故事[."
        },
        {
            id: "24",
            classId: [8],
            title: "现实迷药",
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
            videoUrl: "./video/movie24.mp4",
            hPosterUrl: "./img/i_h_24.jpg",
            vPosterUrl: "./img/i_v_24.jpg",
            fileSize: "586M",
            director: "",
            writer: "匿名",
            starring: "",
            intro: ""
        },
        {
            id: "25",
            classId: [ 4],
            title: "兄弟情深",
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
            videoUrl: "./video/movie25.mp4",
            hPosterUrl: "./img/i_h_25.jpg",
            vPosterUrl: "./img/i_v_25.jpg",
            fileSize: "586M",
            director: "马克·穆登 ",
            writer: "匿名",
            starring: "",
            intro: "影片讲述的是两个男孩和一个婴儿的故事。Casey（托马斯·桑斯特 饰）是个14岁的男孩，H（Aaron Taylor 饰）是个18岁的男孩，他们都是被遗弃的孩子。他们在一次偶然的机会下认识彼此，并且捡到了一个同样被遗弃的婴儿。三个孩子之间的故事也慢慢展开……."
        },
        {
            id: "26",
            classId: [ 4],
            title: "赝品",
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
            videoUrl: "./video/movie26.mp4",
            hPosterUrl: "./img/i_h_26.jpg",
            vPosterUrl: "./img/i_v_26.jpg",
            fileSize: "586M",
            director: "奥逊;威尔斯",
            writer: "匿名",
            starring: "奥逊·威尔斯,奥佳·柯达,约瑟夫·科顿",
            intro: "厌倦了逃亡生涯的匈牙利赝品画家艾米尔;德霍瑞（Elmyr de Hory）于1969年回到西班牙伊维萨岛，成为岛上名人，并结识了美国作家克利福德;艾尔文（Clifford Irving）."
        },
        {
            id: "27",
            classId: [2],
            title: "阳光的快乐生活",
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
            videoUrl: "./video/movie27.mp4",
            hPosterUrl: "./img/i_h_27.jpg",
            vPosterUrl: "./img/i_v_27.jpg",
            fileSize: "586M",
            director: "杨议",
            writer: "匿名",
            starring: "杨议、韩兆、魏一、杨少华、张立",
            intro: "杨光（杨议 饰）和他的哥们尤条（韩兆 饰）遇到了真正的麻烦，条子被查出身患绝症。杨光决定，要让..."
        },
        {
            id: "28",
            classId: [1, 4],
            title: "一场风花雪月的事",
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
            videoUrl: "./video/movie28.mp4",
            hPosterUrl: "./img/i_h_28.jpg",
            vPosterUrl: "./img/i_v_28.jpg",
            fileSize: "586M",
            director: "高群书",
            writer: "匿名",
            starring: "黄晓明、杨颖、巍子、苏青、在熙",
            intro: "清新如风，美貌如花，甫出校门的妙龄女警吕月月为了执行追查国宝级文物小提琴的任务，而涉身一场错..."
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