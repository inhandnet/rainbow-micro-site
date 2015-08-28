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
            classId: [1, 4, 2],
            country:"中国",
            time:"2014年",
            classId1:"爱情，剧情，喜剧",
            title: "心花路放",
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
            videoUrl: "/video/movie/xinhualufang.mp4",
            hPosterUrl: "./img/i_h_4.jpg",
            vPosterUrl: "./img/i_v_4.jpg",
            fileSize: "661M",
            director: "宁浩",
            writer: "匿名",
            starring: "黄渤、徐峥、袁泉、周冬雨、陶慧",
            intro: "二手音响商耿浩（黄渤 饰）婚姻失败，他想用锤子爆小三（李晨 饰）的头，却迟迟没有勇气，幸亏在剧组做制片的兄弟郝义（徐峥 饰）及时发现自暴自弃的耿浩，他决定带着耿浩开启一段“治愈之旅”。于是一对好基友带着一只狗上路，邂逅三千公里的“桃花”。“阿凡达女郎”（陶慧 饰）、“杀马特”周丽娟（周冬雨 饰）、“白富美”（张俪 饰），各式各样的女人接连登场，耿浩一路艳遇一路疗伤。时光倒转，5年前的此时，大龄文艺女青年（袁泉 饰）因为听了一首流浪歌手耿浩的歌，毅然前往大理……在经历一连串奇葩遭遇之后，大家都放下了心里的“阴影”，找到了通向幸福的道路。 "
        },
        {
            id: "2",
            classId: [4, 3, 1],
            classId1:"爱情，剧情，动作",
            time:"2014年",
            country:"中国",
            title: "黄飞鸿之英雄有梦",
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
            videoUrl: "/video/movie/huangfeihong.mp4",
            hPosterUrl: "./img/i_h_1.jpg",
            vPosterUrl: "./img/i_v_1.jpg",
            fileSize: "",
            director: "周显扬",
            writer: "不详",
            starring: "彭于晏/井柏然/王珞丹/洪金宝",
            intro: " 清朝同治年间，古老的帝国行将就木，重要通商口岸广州珠江口正沐浴在最后的繁荣和血腥搏杀中。码头上黑虎帮和北海帮为非作歹，杀伐不断，而底层劳工饱受欺凌，朝不保夕。自幼习武的阿飞黄飞鸿（彭于晏 饰）在黑虎帮混迹五六年，他以死士身份取得北海帮主的首级，从而被黑虎帮老大雷公（洪金宝 饰）收为第四个义子。雷公心狠手辣，手下更有三个蛇蝎心肠的义子助纣为虐，为了赚钱不惜逼良为娼，草菅人命。阿飞凭借高强的武功很快成为黑虎帮内的一只猛虎，然而他在打杀之外似乎隐藏着不可告人的秘密。 另一方面，父兄被黑虎帮卖到海外而无依无靠的孩子们，在赤火（井柏然 饰）、阿春（王珞丹 饰）等人的号召下组成孤儿帮，他们正试图向有着血海深仇的黑虎帮展开复仇…… "
        },
        {
            id: "3",
            classId: [1, 4],
            classId1:"爱情，剧情",
            time:"2013年",
            country:"中国",
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
            videoUrl: "/video/movie/yichangfenghuaxueyuedeshi.mp4",
            hPosterUrl: "./img/i_h_28.jpg",
            vPosterUrl: "./img/i_v_28.jpg",
            fileSize: "586M",
            director: "高群书",
            writer: "匿名",
            starring: "黄晓明、杨颖、巍子、苏青、在熙",
            intro: "08年夏天，失踪多年的国宝——金佛，重现在韩国头号黑帮——金氏家族之手。警方在金氏次子正熙（在熙 饰）潜入深圳境内避难时，安排女警吕月月（Angelababy 饰）以全程保护正熙之名追查金佛下落，两人经历了险象环生的黑帮追杀后情愫暗生，导致月月与警察男友薛宇（黄晓明 饰）的关系变得紧张。正熙答应配合警方的行动，却在哥哥正泰的安排下，携金佛潜逃。正熙失踪的日子里，月月与薛宇逐渐重修就好，正熙突然出现将金佛归公，月月陷入在正熙和薛宇之间选择的两难境地……."
        },
        {
            id: "4",
            classId: [2],
            classId1:"喜剧",
            time:"2013年",
            country:"中国",
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
            videoUrl: "/video/movie/nvrengongdi.mp4",
            hPosterUrl: "./img/i_h_18.jpg",
            vPosterUrl: "./img/i_v_18.jpg",
            fileSize: "586M",
            director: "管晓杰、陈欧",
            writer: "匿名",
            starring: "赵奕欢、文卓、刘惠璞、邱萧婵、文梦洋",
            intro: "他们说，有女人的地方就有战场，不低调只有死路一条； 　　他们说，做女人，要么忍，要么残忍，看不见的敌人才是最可怕的对手。 　　美女=花瓶=狐狸精？穿着暴露就是勾引，长相漂亮就是祸水，美女升职加薪都被说成潜规则！职场“狐狸精”孙小美，竟因美貌而被当做了“女人公敌”！ 　　职场如宫斗，孙小美面临着接二连三的重重关卡，名誉危机、事业陷阱……如何才能打败不怀好意，重重设陷的“四大妖精”？怎样才能征服来势汹汹，身份特殊的“虎豹姐妹团”？职场“狐狸精”开始反击——用行动为自己正声，即使遍体鳞伤，也要活得漂亮！ .."
        },
        {
            id: "5",
            classId: [1,2, 4],
            classId1:"爱情，剧情，喜剧",
            time:"2013年",
            country:"中国",
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
            videoUrl: "/video/movie/baozoubanvren.mp4",
            hPosterUrl: "./img/i_h_7.jpg",
            vPosterUrl: "./img/i_v_7.jpg",
            fileSize: "586M",
            director: "董董",
            writer: "匿名",
            starring: "范文芳、李斯、丹妮、范逸臣、王莎莎、刘添月",
            intro: "巍峨壮丽的崇山峻岭之间，来自四川的女孩牛牛（李斯丹妮 饰）奋力攀爬，在被野狼威胁之际，幸亏来自新疆的驴友色拉（范文芳 饰）出手相助方才脱险。她们共同的目标是如梦如幻的圣雨湖，色拉此前和几名网友约好同行。在约定好的家庭旅社，色拉、牛牛和分别来自北京、台湾、上海的珊珊（刘添月 饰）、果冻（钟欣怡 饰）、小疯（王莎莎 饰）相会。不管出于什么契机，五个女孩结伴踏上徒步旅程。历经25天总长12000公里的暴走，祖国边境瑰丽绝美、慑人心魄的原生态地貌，步履之间都市女人忘却心头烦恼，又在争吵、碰撞过程中体味着从身体到心灵的圣洁洗礼…… "
        },
        {
            id: "6",
            classId: [2],
            classId1:"喜剧",
            time:"2013年",
            country:"中国",
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
            videoUrl: "/video/movie/yangguangdekuaileshenghuo.mp4",
            hPosterUrl: "./img/i_h_27.jpg",
            vPosterUrl: "./img/i_v_27.jpg",
            fileSize: "586M",
            director: "杨议",
            writer: "匿名",
            starring: "杨议、韩兆、魏一、杨少华、张立",
            intro: "杨光（杨议 饰）和他的哥们尤条（韩兆 饰）遇到了真正的麻烦，条子被查出身患绝症。杨光决定，要让条子欢乐的走完人生路，实现他没有完成的心愿。然而条子的种种愿望荒唐无理，找初恋、回老家、当皇上、临幸贵妃……让杨光应接不暇越帮越乱，上演了一场笑料百出令人捧腹的“甲方乙方”。就在这场混乱中，杨光一不小心又与条子初恋情人陈晨（魏一 饰）产生感情。两个屌丝和一个伪装女神的女屌丝，啼笑皆非的三角恋也在乱成一团中拉开序幕…… "
        },
        {
            id: "7",
            classId: [1, 2],
            classId1:"爱情，喜剧",
            time:"2013年",
            country:"中国",
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
            videoUrl: "/video/movie/dashuwoaini.mp4",
            hPosterUrl: "./img/i_h_9.jpg",
            vPosterUrl: "./img/i_v_9.jpg",
            fileSize: "586M",
            director: "胡崇曦",
            writer: "匿名",
            starring: "张智霖、付梦妮、翁虹、野营、郭美孜",
            intro: "十八岁的“红星社二代”乐队主唱沈绮（付梦妮 饰），在一起事故中，与刚从香港归来的风度翩翩中年男子方家成（张智霖 饰）一眼投缘。方家成为了在母亲面前隐瞒在香港失业无奈回到上海的秘密，瞬念之间“绑架”了沈绮当自己女友。情窦初开不识风情的沈绮，就此一发不可收拾，酒吧买醉，江边狂呼，现场邀唱，死乞白赖，萝莉不善爱情，只能真情呼唤。方家成似乎有所回应，却又犹豫不决，毕竟一段二十年前的回忆不断困扰，无法释怀，情何以堪。就在沈绮死了念想决然去澳洲念书的时候，一个从黄浦江里捞上来的旧箱子，揭开了一段非凡时空的秘密…… "
        },
        {
            id: "8",
            classId: [3, 9],
            classId1:"犯罪，动作",
            time:"2013年",
            country:"韩国",
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
            videoUrl: "/video/movie/duobaolianmeng.mp4",
            hPosterUrl: "./img/i_h_11.jpg",
            vPosterUrl: "./img/i_v_11.jpg",
            fileSize: "586M",
            director: "崔东勋",
            writer: "匿名",
            starring: "全智贤、金允石、李政宰、金惠秀、金海淑",
            intro: "曾轰动全球且价值高达300亿的钻石太阳之泪惊现中国澳门，某神秘人物委托混迹赌场的盗贼澳门朴（金允石 饰）组织人马侵入赌场金库，盗取钻石，事成之后报酬颇丰。在此之后，朴从韩国网罗了当年被他背叛的伙伴波派（李政宰 饰）、藏帕诺（金秀贤 饰）、耶妮可（全智贤 饰）、嚼皮糖（金海淑 饰）、佩希（金惠秀 饰），以及中国方面的陈（任达华 饰）、安德鲁（吴达庶 饰）、朱莉（李心洁 饰）、约翰尼（曾国祥 饰）等人。这些人中包括偷盗、绳索、路线、演技等各方面高手，实可谓一次强强联合。 ."
        },
        {
            id: "9",
            classId: [1, 4],
            classId1:"爱情，剧情",
            time:"2012年",
            country:"中国",
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
            videoUrl: "/video/movie/xiayigeqiji.mp4",
            hPosterUrl: "./img/i_h_23.jpg",
            vPosterUrl: "./img/i_v_23.jpg",
            fileSize: "586M",
            director: "卓立",
            writer: "匿名",
            starring: "秦昊 / 莫小棋 / 刘诗诗/吕晓霖",
            intro: "18岁那年，ROCKY （秦昊 饰） 一连串脱轨的举动，让他和父亲（张国柱 饰） 之间的关系恶劣到极点，惯性自杀更带给家人无比困扰，一次比一次荒唐，医生斩钉截铁断定ROCKY患了忧郁症。 一天，ROCKY走向马路，迎着一辆大巴士，一个女孩子突然冲出来，把他从马路上拉开，从此，ROCKY遇上了改变他生命的女人——MAY （莫小棋 饰），她牵起他的手，鼓励他迎向生命中的每一个挑战。 有了精神力量支撑，ROCKY开始振作，每天抱着美丽愉快的梦想过日子。 老天给了他和MAY再次相遇的机会，然而这一次，MAY的身边却多了一个陈SIR。 为了接近心中的女神，ROCKY到了陈SIR （石修 饰） 的公司，从一个最底层的业务员做起。ROCKY在MAY的鼓励下，从菜鸟蜕变成销售冠军，却忽略了一直在身边默默支持自己的团队伙伴——佳怡（刘诗诗 饰）。 不料公司一场突如其来...  "
        },
        {
            id: "10",
            classId: [ 2, 3, 5],
            classId1:"喜剧，科幻，动作",
            vtime:"2012年",
            country:"中国",
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
            videoUrl: "/video/movie/chaoshikongjiubing.mp4",
            hPosterUrl: "./img/i_h_2.jpg",
            vPosterUrl: "./img/i_v_2.jpg",
            fileSize: "535M",
            director: "林子聪",
            writer: "匿名",
            starring: "霍建华 、郭品超、林子聪、张达明、景甜",
            intro: "立志成为作家的青年二蛋（霍建华 饰）历时三年，写成唐朝侠客史可进之传奇故事，然而却被出版社社长嘲讽打击。在一千多年才轮回一次的流星雨之夜，失落的二蛋在公园排遣郁闷，突然胸前的家传玉佩灵光乍现，将他带回了一千多年前的唐朝天宝十年中秋夜。二蛋机缘巧合在唐朝成为了史可进（郭品超 饰）的救命恩人，得以入住范阳王府史家，并对史可进的小妹灵芝（景甜 饰）一见倾心。史家世子史可延嫉妒史可进人财俱得，派出杀手杨傲（孙浩 饰）刺杀亲弟，危急关头二蛋再度使用玉佩，将史家兄妹带回现代，杨傲凭借自己的玉佩同样来到了2012年，二蛋与三位身怀绝技的古代人引发连串奇遇，而一个阴谋也逐渐浮出水面…… "
        },
        {
            id: "11",
            classId: [1, 2, 4],
            classId1:"爱情，剧情，喜剧",
            time:"2012年",
            country:"中国",
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
            videoUrl: "/video/movie/guanyuaiqinghenaxiemogui.mp4",
            hPosterUrl: "./img/i_h_12.jpg",
            vPosterUrl: "./img/i_v_12.jpg",
            fileSize: "586M",
            director: "赵小僮",
            writer: "匿名",
            starring: "杨童舒、莫少聪、洪剑涛、嵇少宣、刘凤娇",
            intro: "一个女青年（杨童舒 饰）应聘到一家工厂，一进工厂就遇到难题就崩溃就冲动，一冲动就受伤就住进医院，一进医院里她就遇到了医生（莫少聪 饰）就遇到了爱情，一遇到爱情就陶醉就遇到了麻烦，一遇到麻烦就发现问题就改变，一改变她就不认识自己就开犯错，一犯错就检讨就后悔就打算重来，一重来就陷入了恶性循环——循环了好几圈，她终于发现自己从来都不会涂写人生，认清自己的她再次决心要好好书写自己，画最新最美的图画，这一次她是这样写的……"
        },
        {
            id: "12",
            classId: [3, 4],
            classId1:"剧情，动作",
            time:"2011年",
            country:"中国",
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
            videoUrl: "/video/movie/wuxia.mp4",
            hPosterUrl: "./img/i_h_5.jpg",
            vPosterUrl: "./img/i_v_5.jpg",
            fileSize: "586M",
            director: "陈可辛",
            writer: "匿名",
            starring: "甄子丹、金城武、汤唯、惠英红、李小冉、王羽",
            intro: "1917年，中国西南边陲的刘家村。刘金喜（甄子丹 饰）和妻子阿玉（汤唯 饰）共同抚养两个儿子方正和晓天，日子平淡且幸福。直到某一天，两个不速之客打破了刘家村的平静，也摧毁着金喜一家的生活。这二人企图洗劫村中的钱柜，被刚好在此的金喜撞见，一阵混乱打斗，二匪稀里糊涂被金喜打死。由于其中一人是政府通缉的要犯，因此县官大喜过望，村里人也将金喜奉为大英雄。但是，这看似普普通通的盲打误杀却引起一个人的怀疑，他名叫徐百九（金城武 饰），是县衙的捕快。从蛛丝马迹上来看，二匪系死于武功高强人之手，徐百九由此留在村里，对金喜展开了连番的观察、调查与试探。 在这一过程中，金喜神秘的真实身份渐渐浮出水面，而刘家村也面临着一场空前的危机…… "
        },
        {
            id: "13",
            classId: [7],
            classId1:"动画",
            time:"2010年",
            country:"中国",
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
            videoUrl: "/video/movie/shibozongdongyuan.mp4",
            hPosterUrl: "./img/i_h_20.jpg",
            vPosterUrl: "./img/i_v_20.jpg",
            fileSize: "586M",
            director: "刘大刀",
            writer: "匿名",
            starring: "谢娜/李冰冰/周立波/成龙/安又琪",
            intro: "20世纪50年代，古老的华夏大地还处在满清政府的封建统治之中。固步自封与闭关锁国，让这个国度早已落后了时代而不自知。当然在风云激变的时代，依然有人努力开眼看世界，并以本国赖以自豪的文化向世人展示华美的一面。1851年，首届世博会在英国伦敦召开，中国商人徐荣村带着“荣记湖丝”摘得金、银奖牌。转眼过了一百年，徐荣村的后人湖丝仔却对家族传承下来的丝绸工艺不屑一顾。他迷恋现代科技，渴望打造高精尖的机器人，但丝毫没有团队合作的精神。 在遭受了挫折后，他无意中进入了神秘的远古丝绸世界，于是由此开起了一段奇异的旅程………"
        },
        {
            id: "14",
            classId: [1, 2],
            classId1:"爱情，喜剧",
            time:"2012年",
            country:"中国",
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
            videoUrl: "/video/movie/kuxiaobude.mp4",
            hPosterUrl: "./img/i_h_15.jpg",
            vPosterUrl: "./img/i_v_15.jpg",
            fileSize: "586M",
            director: "罗斌",
            writer: "匿名",
            starring: "王喜，萧蔷，柳岩",
            intro: "表情丰富的郑满堂（王喜 饰）利用自身特点，成立了情感陪护公司，专门为那些需要带动情绪的场合提供哭和笑的服务。美丽、睿智的莎莎（萧蔷 饰）因为不想继续只恋爱、不结婚的生活，毅然决定离开男友兼上司汤永孝，从此恢复了单身生活。 不幸的是郑满堂因为被打，自己的面部神经失去知觉，一段时间内不能再做出哭和笑的表情了，而且恢复的时间无法预料。此时他爱慕虚荣的女友丽丽（柳岩 饰）恰在此时提出了分手。他在人生最低谷的时候遇到了莎莎，随着两人的交往，莎莎对满堂的印象越来越好。在莎莎和好朋友们的帮助下，满堂恢复了自信，最终两人走到了一起…… ."
        },
        {
            id: "15",
            classId: [2],
            classId1:"喜剧",
            time:"2012年",
            country:"美国",
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
            videoUrl: "/video/movie/dazhongjiaoyu.mp4",
            hPosterUrl: "./img/i_h_10.jpg",
            vPosterUrl: "./img/i_v_10.jpg",
            fileSize: "586M",
            director: "Tom Morris",
            writer: "匿名",
            starring: "Chris Sheffield/ 玛依亚拉·沃尔什 / 萨姆·啊耶尔斯",
            intro: "Levi Collins is set to go to the local University on a tennis scholarship, but he forgot to tell his parents one thing - he didn't graduate. As a result, he must take summer school before his mom and dad discover he's failed senior science. At school, Levi falls in love with his classmate, Katie, and learns that he has to make a choice between playing tennis and receiving a pro... "
        },
        {
            id: "16",
            classId: [ 4],
            classId1:"剧情",
            time:"1973年",
            country:"法国",
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
            videoUrl: "/video/movie/yanpin.mp4",
            hPosterUrl: "./img/i_h_26.jpg",
            vPosterUrl: "./img/i_v_26.jpg",
            fileSize: "586M",
            director: "奥逊;威尔斯",
            writer: "匿名",
            starring: "奥逊·威尔斯 / 约瑟夫·科顿 / 弗朗索瓦·莱星巴赫 / 张梓琳",
            intro: "厌倦了逃亡生涯的匈牙利赝品画家艾米尔•德霍瑞（Elmyr de Hory）于1969年回到西班牙伊维萨岛，成为岛上名人，并结识了美国作家克利福德•艾尔文（Clifford Irving）。导演奥逊•威尔斯在介绍艾米尔•德霍瑞的同时穿插讲述了曾轰动一时的克利福德•艾尔文造假美国飞行业大亨霍华德•休斯自传案，随后又杜撰了女友欧嘉•蔻达（Oja Kodar）与毕加索之间的一段奇事。真假穿插中，奥逊•威尔斯提出了“艺术是什么”与作品归属权的问题。 　本片是美国导演奥逊•威尔斯的最后一部完整的电影作品，大部分镜头素材来自由艾尔文•克利福德编剧，法国导演弗朗索瓦•莱兴巴赫（Francois Reichenbach）导演的关于匈牙利赝品画家艾米尔•德霍瑞的BBC纪录片。."
        },
        {
            id: "17",
            classId: [4, 8, 6],
            classId1:"恐怖，剧情，惊悚",
            time:"2013年",
            country:"美国",
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
            videoUrl: "/video/movie/xianshimiyao.mp4",
            hPosterUrl: "./img/i_h_24.jpg",
            vPosterUrl: "./img/i_v_24.jpg",
            fileSize: "586M",
            director: "Christopher Glatis",
            writer: "匿名",
            starring: "费尔鲁扎·鲍克 / 瑞克·拉瓦日内洛 / 瑞恩·莫里曼",
            intro: "凌晨酒吧打烊，一个阴暗自大的酒吧经理和帅气的酒保发现一个正在夜里意识不清的踉跄前行，身上还在流血。当她醒来时，三个人都陷入了一个危险的境地，他们玩着一个不断升级的猫鼠游戏，让他们直面内心的阴暗。当我们试图揭开谜题时，万物产生了变化，唯有一点可以肯定，这个露丝是朵满身刺的玫瑰。 "
        },
        {
            id: "18",
            classId: [ 2,4],
            classId1:"喜剧，剧情",
            time:"1927年",
            country:"美国",
            title: "兄弟情真",
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
            videoUrl: "/video/movie/xiongdiqingzhen.mp4",
            hPosterUrl: "./img/i_h_25.jpg",
            vPosterUrl: "./img/i_v_25.jpg",
            fileSize: "586M",
            director: "Robert A.McGowan/Charles Oelze ",
            writer: "匿名",
            starring: "Symona Boniface / Ed Brandenburg / 奥列佛·哈台/ 邓丽欣 ",
            intro: "影片讲述的是两个男孩和一个婴儿的故事。Casey（托马斯·桑斯特 饰）是个14岁的男孩，H（Aaron Taylor 饰）是个18岁的男孩，他们都是被遗弃的孩子。他们在一次偶然的机会下认识彼此，并且捡到了一个同样被遗弃的婴儿。三个孩子之间的故事也慢慢展开……."
        },
        {
            id: "19",
            classId: [2],
            classId1:"喜剧",
            time:"1905年",
            country:"加拿大",
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
            videoUrl: "/video/movie/chekuyuedui.mp4",
            hPosterUrl: "./img/i_h_3.jpg",
            vPosterUrl: "./img/i_v_3.jpg",
            fileSize: "40000",
            director: "Jennifer Westcott",
            writer: "匿名",
            starring: "安德鲁·詹金斯 / 阿莱克斯·迪亚坤 / Scott Lyster",
            intro: "一个濒临破裂边缘的高中摇滚乐队有一天被主唱的妹妹锁在车库里。在密闭的车库里，他们之间种种隔阂都被一一打开，每个人都说出了自己最想说的话，成员之间的关系也变得更加微妙…… "
        },
        {
            id: "20",
            classId: [9],
            classId1:"犯罪",
            time:"2011年",
            country:"加拿大",
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
            videoUrl: "/video/movie/lengxue.mp4",
            hPosterUrl: "./img/i_h_16.jpg",
            vPosterUrl: "./img/i_v_16.jpg",
            fileSize: "586M",
            director: "Oleo",
            writer: "匿名",
            starring: "Ryan Robbins/Zoie Palmer /",
            intro: "女警官近期必须执行一项任务，一名罪犯屡次逃脱到邻近的废弃医院，并受到暴力同伙的威胁。她除了要追捕这名逃犯外，还遭受波及性命不保。 ."
        },
        {
            id: "21",
            classId: [8, 4, 9],
            classId1:"犯罪，剧情，惊悚",
            time:"2011年",
            country:"加拿大",
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
            videoUrl: "/video/movie/huoliquankai.mp4",
            hPosterUrl: "./img/i_h_6.jpg",
            vPosterUrl: "./img/i_v_6.jpg",
            fileSize: "40000",
            director: "Justin Donnelly",
            writer: "匿名",
            starring: "Luke Goss、Tyler Johnston、Michael Eklund",
            intro: "当你被逼上绝路，你只能火力全开，大开杀戒！心狠手辣，激爆你的肾上腺素布莱恩是一家私募基金创投公司的业务总监，无端端被资遣后，还倒欠公司一屁股债，狗急跳墙之际，他希望透过一个毒品交易快速致富，以弥补他的财务黑洞；因此他决定孤注一掷，将他所剩不多的财产梭哈到这桩毒品买卖中，打算海捞一票，谁知半路却杀出程咬金，两个少年偷走他准备买卖毒品的钱，心狠手辣的毒枭更是紧追在后，当一个男人被逼上绝路，他只能选择火力全开！."
        },
        {
            id: "22",
            classId: [8],
            classId1:"惊悚",
            time:"1905年",
            country:"法国",
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
            videoUrl: "/video/movie/weiyizhongren.mp4",
            hPosterUrl: "./img/i_h_21.jpg",
            vPosterUrl: "./img/i_v_21.jpg",
            fileSize: "586M",
            director: "Stephane Guenin",
            writer: "匿名",
            starring: " Geoffroy Thiebaut Franck Cabot-David Alexandre Le Provost Géraldine Girault Baker Guennoun",
            intro: "Nathan Ganzer（Geoffroy Thiebaut 饰）是一位法国律师，在一次偶然的机会中，他发现自己被法国当地政府暗中调查。自己竟然陷入了极度危险的状况下，他希望可以得到帮助，可是似乎没有人愿意帮助他，于是他开始自己去寻找解救方法。慢慢的找到了这一切和恐怖组织有关，Nathan Ganzer决定开始揭穿真相，但一切都不在自己的掌控中。 "
        },
        {
            id: "23",
            classId: [ 4],
            classId1:"剧情",
            time:"1905年",
            country:"美国",
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
            videoUrl: "/video/movie/heibangshaonian.mp4",
            hPosterUrl: "./img/i_h_13.jpg",
            vPosterUrl: "./img/i_v_13.jpg",
            fileSize: "586M",
            director: "Byron Q.",
            writer: "匿名",
            starring: "Hoang Bui /Mike Burnell ",
            intro: "一群小孩子成长在一个充斥着暴力的家庭，同时他们的家庭也陷入了支离破碎之中。他们在这样的环境下如何可以认清自己？生活会不会让他们开始学会成长？ ."
        },
        {
            id: "24",
            classId: [8],
            classId1:"惊悚",
            time:"2014年",
            country:"美国",
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
            videoUrl: "/video/movie/jiazhoumiju.mp4",
            hPosterUrl: "./img/i_h_14.jpg",
            vPosterUrl: "./img/i_v_14.jpg",
            fileSize: "586M",
            director: "Marco Weber",
            writer: "匿名",
            starring: "吉娅·曼特纳，戴文·沃克海瑟，Spencer Daniels，Rachel Seiferth，曼尼什·达亚尔",
            intro: "加州马里布海滩的三个年轻人结识了刚来到马里布不久的女孩克洛伊：热爱滑浪尼克和杰森被克洛伊的美貌和神秘气质吸引，刚刚失去母亲的希拉里也很快与克洛伊交心结为好友。克洛伊将堕落的生活方式介绍给三个年轻人，源源不绝的毒品、酒精很快将他们迷倒。然而他们不知道的是，克洛伊背后隐藏的秘密还不止这么简单…… 。"
        },
        {
            id: "25",
            classId: [ 4],
            classId1:"剧情",
            time:"1905年",
            country:"美国",
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
            videoUrl: "/video/movie/mitang.mp4",
            hPosterUrl: "./img/i_h_17.jpg",
            vPosterUrl: "./img/i_v_17.jpg",
            fileSize: "586M",
            director: "洛蒂米·瑞恩沃特",
            writer: "匿名",
            starring: "施蕾·格莱姆斯 /马歇尔·奥尔曼 / 安古斯·麦克菲登",
            intro: "影片根据真实的故事改编，一个名叫Sugar（施蕾·葛莱姆斯 饰）的女孩，她有着不幸的过去，当“家庭”这个词不再出现在她的生活中后，她开始了独自的流浪。在流浪的途中，她遇到了很多同病相怜的年轻人，他们本打算结伴一起，从这个城市到另一个城市。可是这些年轻人慢慢迷失了自我，吸毒、偷窃、打架甚至杀人等等，Sugar在他们当中却成了旁观者，她发现这并不是自己想要的生活，于是继续开始自己的流浪生活。 "
        },
        {
            id: "26",
            classId: [ 4],
            classId1:"剧情",
            time:"2013年",
            country:"加拿大",
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
            videoUrl: "/video/movie/chentudiguo.mp4",
            hPosterUrl: "./img/i_h_8.jpg",
            vPosterUrl: "./img/i_v_8.jpg",
            fileSize: "586M",
            director: "彼得·斯戴宾斯",
            writer: "匿名",
            starring: " 卢克·科比 Michael Cram Barbara Gordon Sarah Manninen",
            intro: "27岁的莱娜带着13岁的女儿皮卡在多伦多生活，一次皮卡吸毒过量住院，莱娜才意识到女儿正走上自己的老路，于是带女儿回到故乡母亲的家里。三代女人相似的人生轨迹似乎是摆不脱的宿命轮回。"
        },
        {
            id: "27",
            classId: [1, 2, 8],
            classId1:"爱情，喜剧，惊悚",
            time:"2011年",
            country:"加拿大",
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
            videoUrl: "/video/movie/woguxiongshani.mp4",
            hPosterUrl: "./img/i_h_22.jpg",
            vPosterUrl: "./img/i_v_22.jpg",
            fileSize: "586M",
            director: "戴恩·克拉克/Linsey Stewart",
            writer: "Linsey Stewart",
            starring: "艾伦·阿什莫，莎拉·坎宁",
            intro: "Harper（莎拉·坎宁 饰）最近感觉极其痛苦，心力交瘁，她总觉得有人要杀她。为了可以保护自己，Harper找来了前男友Ray（艾伦·阿什莫 饰）来帮她。通过种种迹象，他们发现好像真的存在这样一个人。于是他们开始了反追击，希望可以找到这个杀手，事情真的是这样的吗？.."
        },
        {
            id: "28",
            classId: [1, 4],
            classId1:"爱情，剧情",
            time:"2011年",
            country:"美国",
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
            videoUrl: "/video/movie/pangniuxunaiji.mp4",
            hPosterUrl: "./img/i_h_19.jpg",
            vPosterUrl: "./img/i_v_19.jpg",
            fileSize: "586M",
            director: "Brad Leong",
            writer: "匿名",
            starring: "萨拉·茹苏菲·蒙克乔翰·厄布埃利奥特·古尔德",
            intro: "不知不觉地困在了一个得不到爱的家庭，一个年轻的单身女人迫切想要过自己的生活。当她独自一个人坐在阁楼上，她看到了她的世界——对她没有回报爱的洛杉矶市中心。从那一刻起，她的生活发生了奇妙的改变。."
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