export type BookingLevel = "must" | "should" | "none";
export type SightCity = "kl" | "sg" | "melaka" | "transit" | "cn";

export type Sight = {
  id: string;
  placeId: string;
  name: string;
  city: SightCity;
  dayIds: string[];
  hours: string;
  cost: string;
  duration: string;
  booking: BookingLevel;
  bookingNote?: string;
  bookingUrl?: string;
  play: string[];
  notes: string[];
};

export type BookingItem = {
  id: string;
  title: string;
  when: string;
  level: "must" | "should";
  why: string;
  how: string;
  href?: string;
  hrefLabel?: string;
};

export type NoteItem = {
  title: string;
  body: string;
  warn?: boolean;
};

export type NoteGroup = {
  id: string;
  title: string;
  items: NoteItem[];
};

export const CITY_LABEL: Record<SightCity, string> = {
  kl: "吉隆坡",
  sg: "新加坡",
  melaka: "马六甲",
  transit: "过关与机场",
  cn: "国内段",
};

export const SIGHTS: Sight[] = [
  {
    id: "batu",
    placeId: "batu",
    name: "黑风洞",
    city: "kl",
    dayIds: ["11-22"],
    hours: "约 06:00–21:00，主洞全天可进",
    cost: "主洞免费；罗摩衍那洞约 RM15。KTM 单程约 RM2–3",
    duration: "1.5–2 小时",
    booking: "none",
    bookingNote: "不用预约。想赶凉快就 8 点前到。",
    play: [
      "KL Sentral 坐 KTM 科摩罗线（Komuter）到 Batu Caves 站，出站就是金身慕鲁根像和彩虹台阶。",
      "先拍大像和外景，再爬 272 级台阶进主洞。台阶无遮阳，上去 10–20 分钟。",
      "主洞是还在使用的印度教神庙，看完即下。不必买旁边的付费小洞，这次行程时间也不够。",
      "下来后别被车站门口的出租车揽客缠住，原路坐 KTM 回市区。",
    ],
    notes: [
      "肩膀和膝盖必须遮住，男女都查。不够长就地买纱笼约 RM10–15，现金更方便。",
      "猴子会抢食物、水瓶、墨镜。饮料放包里，不要边爬边吃。",
      "下台阶比上更滑，尤其雨后。穿有抓地力的鞋，不要人字拖。",
      "中午最热、旅游团最多。这次排在 8 点，就是为了避开晒和堵。",
      "不要跟猴子对视、喂食或突然挥手。被抢东西不要抢回来。",
    ],
  },
  {
    id: "petaling",
    placeId: "petaling",
    name: "茨厂街 · 中央市场",
    city: "kl",
    dayIds: ["11-22"],
    hours: "店铺约 10:00–21:00，路边摊更早更晚",
    cost: "逛免费；正餐 RM12–25",
    duration: "1.5–2 小时",
    booking: "none",
    play: [
      "从中央市场（Central Market）走进去吹空调、看工艺品，再沿茨厂街 Pedestrian 往南走。",
      "午饭吃档口：海南鸡饭、咖喱面、福建面。看当地人多的摊，不要只看门口英文菜单。",
      "想买白咖啡、饼干、木槌饼干，下午比晚上便宜，也更好砍价。",
      "接着步行去独立广场，中间穿过老殖民街区即可。",
    ],
    notes: [
      "景区门口第一排最贵。往里走两巷通常更实在。",
      "砍价先问价，现金更好讲。不要把钱包亮出来。",
      "假货、“免费手链”揽客一律走开。",
      "路面湿滑、有摩托车穿小巷，过马路要看右。",
    ],
  },
  {
    id: "merdeka",
    placeId: "merdeka",
    name: "独立广场",
    city: "kl",
    dayIds: ["11-22"],
    hours: "广场全天；苏丹阿都沙末大厦外观随时可看",
    cost: "外观免费",
    duration: "30–45 分钟",
    booking: "none",
    play: [
      "看英国殖民时期的苏丹阿都沙末大厦（红屋钟楼）、独立旗杆和草坪。",
      "拍照以外观为主。想进附近的国家纺织博物馆或皇家博物馆再看当天体力。",
      "中午阳光硬，拍完就往双峰塔方向走或坐轨去 KLCC。",
    ],
    notes: [
      "正午无树荫，晒伤很快。帽子、水、防晒。",
      "广场是开放空间，看管好包。不要翻越草坪护栏拍。",
    ],
  },
  {
    id: "petronas",
    placeId: "petronas",
    name: "双峰塔 · KLCC 公园",
    city: "kl",
    dayIds: ["11-22", "11-23"],
    hours: "登塔通常周二至周日约 09:00–21:00，周一关闭。KLCC 公园和 mall 全天",
    cost: "外景和公园免费。登塔非马来西亚成人周末约 RM130 起，分时段",
    duration: "外景 40 分钟；登塔另加 1.5–2 小时",
    booking: "should",
    bookingNote: "只拍外景不用订。要上天桥 / 86 层必须官网分时预约，当天窗口常 10 点前卖完。11/22 是周日，周末价、更好订晚上场。11/23 周一登塔关闭。",
    bookingUrl: "https://eticket2.petronastwintowers.com.my/",
    play: [
      "默认方案：KLCC 公园拍双塔倒影，进 Suria KLCC 吹空调、上厕所、补充水。晚上灯亮更好看。",
      "想登塔：只走官网 eticket2.petronastwintowers.com.my，选 11/22 下午或傍晚时段。入口在 mall 地下室一带，按票面时间提前 15 分钟到，迟到不候。",
      "票通常含 41–42 层天桥和 86 层观景。全程约 1 小时在塔内。",
      "公园晚上有喷泉表演（Lake Symphony，常见 20:00 / 21:00 / 22:00，以现场告示为准）。",
      "预算紧就不要买 Premium Sky。TRX 可以顺路吹空调、看另一角度城市。",
    ],
    notes: [
      "不要在街边黄牛或不明 App 买登塔票。",
      "安检后才能进塔，大包、 tripod、无人机不行。",
      "外景最佳点：KLCC 公园湖面、Saloma Link 桥（另走一段）。马路对面拍会被树挡。",
      "从武吉免登走路约 10–15 分钟，经常比等车快。",
    ],
  },
  {
    id: "alor",
    placeId: "alor",
    name: "亚罗街夜市",
    city: "kl",
    dayIds: ["11-22"],
    hours: "摊位约 17:00 后热闹，21:00–23:00 最密",
    cost: "烤串 RM1–2 一串；炒粿条 / 炒河粉 RM12–20；两人 RM40–70 能吃撑",
    duration: "1.5–2 小时",
    booking: "none",
    play: [
      "沿 Jalan Alor 边走边点：猪肉烤串、鸡翅、炒粿条、炒河粉、生蚝摊看新鲜度再决定。",
      "先点 4–6 串热的垫胃，再坐下来吃一盘炒的，最后饮料或糖水。",
      "吃完用 Grab 回酒店，这一带夜间拦车乱。",
    ],
    notes: [
      "坐下来先问价。有的摊会把游客菜单写贵一截。",
      "辣、油、椰奶多，肠胃弱的少点生食、少喝冰块来路不明的饮料。",
      "扒手和抢手机在人挤时发生过。包放身前，手机不要放桌上。",
      "回教徒摊不卖猪肉，猪肉摊招牌会写。不要混筷。",
    ],
  },
  {
    id: "bb",
    placeId: "bb",
    name: "武吉免登",
    city: "kl",
    dayIds: ["11-21", "11-23", "11-27", "11-28"],
    hours: "商场约 10:00–22:00",
    cost: "住宿核心区，不逛也可以",
    duration: "住和过路",
    booking: "must",
    bookingNote: "住宿要提前订。11/21 晚落地、11/27 从马六甲回来、11/28 去机场，都住这一带最省时间。",
    play: [
      "住 Pavilion / Lot 10 / 时代广场步行圈。下楼就是吃的和地铁。",
      "11/23 上午如果时间紧：只买白咖啡、饼干，9 点前去 TBS。",
      "不要住梳邦、蒲种、赛城——看起来便宜，去景点或机场都加一小时。",
    ],
    notes: [
      "人行道不平，晚上看路。",
      "便利店水和防晒比景区便宜，出发前在 7-Eleven 补。",
    ],
  },
  {
    id: "mosque",
    placeId: "merdeka",
    name: "国家清真寺（可选）",
    city: "kl",
    dayIds: ["11-23"],
    hours: "非祈祷时段对游客开放，周五中午最容易关闭",
    cost: "免费，现场借袍",
    duration: "40–60 分钟",
    booking: "none",
    bookingNote: "不用预约。只适合 11/23 去 TBS 之前顺路看外观或快进快出。",
    play: [
      "若 11/23 早上有 1 小时：看外观、蓝顶和庭院即可，不要排内部长队。",
      "游客入口会发袍。女客包头、男女都不露肩膝。",
    ],
    notes: [
      "祈祷时段游客暂停。听现场工作人员指挥。",
      "内部禁大声、禁乱拍礼拜的人。鞋要脱。",
      "时间不够就只拍外观，优先去 TBS。",
    ],
  },
  {
    id: "tbs",
    placeId: "tbs",
    name: "TBS 南湖镇巴士总站",
    city: "transit",
    dayIds: ["11-23", "11-27"],
    hours: "长途车站全天有班，跨境车集中早间",
    cost: "KL Sentral → TBS 用 KLIA Transit 比出租车稳，几马币",
    duration: "预留 45–60 分钟进站找车",
    booking: "must",
    bookingNote: "11/23 去新加坡的跨境大巴必须提前在 Easybook / redBus / 公司官网出票。当天窗口常剩下午车，下午车容易堵在新山。",
    bookingUrl: "https://www.easybook.com/",
    play: [
      "KL Sentral 坐 KLIA Transit（不要 KLIA Ekspres）到 Bandar Tasik Selatan，天桥进 TBS。",
      "提前在 App 看好月台 / 公司名（Starmart、Aeroline、KKKL、The One 等）。大件托行李舱，护照手机现金随身。",
      "11/27 从马六甲回来也落 TBS，再 Transit 回 KL Sentral。",
    ],
    notes: [
      "TBS 有黄牛和“帮你提箱”。自己看电子屏。",
      "跨境车过关要下车带护照。听司机：马来西亚出境、过长堤、新加坡入境。",
      "11/23 尽量 9–11 点班。账面 5 小时，含过关常 5.5–7 小时。",
    ],
  },
  {
    id: "merlion",
    placeId: "merlion",
    name: "鱼尾狮公园",
    city: "sg",
    dayIds: ["11-24"],
    hours: "公园 24 小时，清晨和晚上人少",
    cost: "免费",
    duration: "20–30 分钟",
    booking: "none",
    play: [
      "地铁 Raffles Place 出站步行。拍照：正面喷水、对岸 Fullerton、往滨海湾方向的天际线。",
      "看一眼就走，不要在这里耗上午。接着沿滨海步行去花园。",
    ],
    notes: [
      "正午无树荫，游客最多。9:30 够用。",
      "栏杆边有人会主动帮拍照然后要钱，拒绝即可。",
      "不要翻护栏、不要下水。",
    ],
  },
  {
    id: "gardens",
    placeId: "gbtb",
    name: "滨海湾花园",
    city: "sg",
    dayIds: ["11-24"],
    hours: "室外花园约 05:00–02:00。花穹 / 云雾林约 09:00–21:00。超级树灯光秀 Garden Rhapsody 常见 19:45、20:45",
    cost: "室外免费。花穹+云雾林约 S$20+ 起，空中步道另计",
    duration: "室外 + 灯光秀 2–3 小时；加温室再加 1.5 小时",
    booking: "should",
    bookingNote: "室外和地面看灯光秀不用订。要进花穹 / 云雾林 / OCBC Skyway 再官网或正规票务出票。11 月主题灯光秀多为 Garden Waltz，以现场为准。",
    bookingUrl: "https://www.gardensbythebay.com.sg/",
    play: [
      "默认廉价方案：白天走室外花园和超级树底部，晚上找空地看 Garden Rhapsody，不买温室票。",
      "想进温室：先花穹（室内花、空调）再云雾林（室内瀑布，楼梯多）。最后入场分别约 20:30 / 20:00。",
      "空中步道（OCBC Skyway）要另票，预算紧跳过，地面仰拍超级树已经够。",
      "Bayfront MRT 出站即到。园内有饮水机，自带空瓶。",
    ],
    notes: [
      "11 月午后常阵雨，折叠雨衣比伞好用（演唱会当晚也不能带非折叠伞）。",
      "云雾林台阶湿滑，穿防滑鞋。",
      "灯光秀站位：超级树之间的草坪，提前 20 分钟占地方。不要用闪光灯对着人。",
      "园内餐饮贵，正餐回牛车水吃。",
    ],
  },
  {
    id: "chinatown-sg",
    placeId: "ctsg",
    name: "牛车水食阁",
    city: "sg",
    dayIds: ["11-23", "11-24"],
    hours: "Maxwell 约 09:30–21:00，热门摊常下午卖完",
    cost: "人均 S$8–15 能吃好",
    duration: "1–1.5 小时",
    booking: "none",
    play: [
      "首选 Maxwell Food Centre：海南鸡饭（常排队）、炒粿条、鱼汤。Chinatown Complex 在楼上，选择更多、更本地。",
      "点单看摊位英文+中文，先付钱拿号牌。辣椒、酱油自己加。",
      "吃完沿宝塔街、佛牙寺外观看一眼即可，不必进收费点。",
    ],
    notes: [
      "热门摊 14:00 可能收摊，午饭不要拖到下午。",
      "食阁座位共用，吃完即走。托盘自己送回。",
      "现金或 PayNow / 部分摊支持卡。备一点新币现金更顺。",
    ],
  },
  {
    id: "bugis",
    placeId: "bugis",
    name: "武吉士 · 小印度",
    city: "sg",
    dayIds: ["11-24", "11-25"],
    hours: "小印度白天到晚上都热闹；武吉士商场约 11:00–21:00",
    cost: "逛免费；香蕉叶米饭 S$8–12",
    duration: "演唱会当天上午 2 小时即可",
    booking: "none",
    play: [
      "11/25 上午：小印度吃香蕉叶、看 Sri Veeramakaliamman 庙外观，或武吉士买雨衣、电池、薄外套。",
      "不要排环球影城、动物园、圣淘沙——当天要养脚看演唱会。",
      "下午必须回酒店充电、换衣服、把大包留房。",
    ],
    notes: [
      "小印度部分庙宇要脱鞋、遮肩膝。",
      "人多注意背包。过马路等灯，新加坡乱穿罚得狠。",
    ],
  },
  {
    id: "clarke",
    placeId: "merlion",
    name: "克拉码头（可选）",
    city: "sg",
    dayIds: ["11-24"],
    hours: "河边全天，酒吧晚上更吵",
    cost: "走免费；船上餐厅贵",
    duration: "45 分钟",
    booking: "none",
    play: [
      "从鱼尾狮或车站走过来吹风、看河。不坐观光船也完整。",
      "晚上如果去超级树，这里只作过路，不要在酒吧耗钱。",
    ],
    notes: ["河边砖地雨后滑。","推销游船的人直接说 no thank you。"],
  },
  {
    id: "stadium",
    placeId: "ns",
    name: "国家体育场 · 枪花",
    city: "sg",
    dayIds: ["11-25"],
    hours: "约 18:00 开门，20:00 开演，可能演到 23:00",
    cost: "票面约 S$138 起，场内餐饮另计",
    duration: "连进出场 6–7 小时",
    booking: "must",
    bookingNote: "只认 Ticketmaster SG 电子票。黄牛、截图转发、PDF 打印常无效。入场前再核年龄限制（有渠道标 R18，也有写 6 岁以下不入场）。",
    bookingUrl: "https://ticketmaster.sg/activity/detail/26sg_gunsnroses",
    play: [
      "17:00 前在食阁吃完。17:30 出发，环线 Stadium 站（CC6）。",
      "无包或小斜挎走快速安检。票在 Ticketmaster App，另存截图，电量 50% 以上。",
      "开演 20:00。枪花常有长安可，不要 22:00 就走。",
      "散场不要挤 Exit A。走 Exit B，或步行去 Mountbatten / Kallang 再上车。",
    ],
    notes: [
      "禁外食外饮、易拉罐、超过 35×20×30cm 的包、自拍杆、喇叭、电子烟、平板、非折叠伞。空瓶也常被拦，不要赌。",
      "11 月体育场露天，阵雨概率高。折叠雨衣、薄外套。牛仔裤会湿冷。",
      "场内水贵。尽量无包，贵重物品只带手机、证件、少量现金、小充电宝。",
      "散场 Grab 会涨价且难叫。地铁到末班前离开最稳。",
    ],
  },
  {
    id: "golden-mile",
    placeId: "gmt",
    name: "Golden Mile 落客",
    city: "transit",
    dayIds: ["11-23", "11-26"],
    hours: "跨境大巴常用落客 / 上车点",
    cost: "到市区地铁几新币",
    duration: "过关后还要 30–50 分钟进市区",
    booking: "must",
    bookingNote: "11/26 回马六甲的车在 Golden Mile / Queen Street 一带上车，早班必须提前出票。",
    play: [
      "11/23 下车后看准地铁站（Lavender / Nicoll Highway / Bugis 视落点），不要跟黑车。",
      "11/26 早班：提前 20–30 分钟到上车点，护照随身，大箱按司机指示放舱。",
    ],
    notes: [
      "落客点名称常写 Beach Road / Golden Mile Tower / The Plaza，和 App 上不完全一致，看公司名和车牌。",
      "不要把护照放托运袋。",
    ],
  },
  {
    id: "melaka",
    placeId: "melaka",
    name: "荷兰红屋 · 圣保罗山",
    city: "melaka",
    dayIds: ["11-26", "11-27"],
    hours: "广场全天；博物馆各自收费、周一部分关闭",
    cost: "外观和爬山免费；进红屋博物馆另计，可不进",
    duration: "下午 2–3 小时足够把核心走完",
    booking: "none",
    play: [
      "Melaka Sentral 下车后 Grab 10–15 分钟到鸡场街 / 荷兰广场。",
      "荷兰红屋（Stadthuys）外观是标志。圣保罗山很近，爬上去看废教堂和海峡方向。",
      "河边走一截，海峡清真寺可远看，不必专程打车。",
      "11/27 上午补荷兰街店铺，11 点前退房去巴士站。",
    ],
    notes: [
      "古城很小，不要报一日游。三轮车（马六甲河车）会喊价，不坐也完整。",
      "圣保罗山砖地热、雨后滑。",
      "博物馆可全部跳过，外观已经值回这趟。",
    ],
  },
  {
    id: "jonker",
    placeId: "jonker",
    name: "鸡场街",
    city: "melaka",
    dayIds: ["11-26", "11-27"],
    hours: "白天店铺；夜市主要周五至周日晚上",
    cost: "夜市小吃 RM5–15；娘惹餐厅人均 RM40–70",
    duration: "晚上 2 小时",
    booking: "none",
    bookingNote: "11/26 是周四，不是经典夜市夜。不要按周末夜市的预期来。周五白天你们已在回 KL 的车上。",
    play: [
      "周四晚上：沿鸡场街吃鸡饭粒、椰糖咖啡、榴莲甜品（会则点），看老店和壁画。",
      "正餐选一家口碑娘惹菜，比在夜市站着吃更值。",
      "第二天上午店铺开门再买伴手礼，比晚上跟摊更清楚。",
    ],
    notes: [
      "夜市人挤时注意扒手。贵重物品分开放。",
      "榴莲、臭豆腐看自己接受度。酒店房间常禁榴莲。",
      "砍价可以，但别吵。",
    ],
  },
  {
    id: "changi",
    placeId: "sin",
    name: "樟宜空侧转机",
    city: "transit",
    dayIds: ["11-21", "11-28"],
    hours: "机场 24 小时",
    cost: "空侧不用入境费；出关再进就要重新安检",
    duration: "去程有数小时；回程只约 90 分钟",
    booking: "must",
    bookingNote: "去程回程都必须订成同一张联程票，行李直挂吉隆坡 / 北京。分票 + 25kg 托运在 90 分钟回程几乎必误机。",
    play: [
      "跟着 Transfer / Transit 指示走，不要去入境和 Jewel。Jewel 在关外。",
      "跨航站楼用空侧 Skytrain。看清下一航段登机口和登机时间。",
      "回程 SQ800 约 01:10 起飞，吉隆坡那班一落地就往登机口，不要逛街。",
    ],
    notes: [
      "空侧转机一般不用填 SG Arrival Card；一旦出关就必须填并重新入境。",
      "充电宝只能手提。液体跟国际安检。",
      "联程才能让航司负误机责任。自助过境分票没有保护。",
    ],
  },
  {
    id: "klia",
    placeId: "klia",
    name: "吉隆坡机场 KLIA / KLIA2",
    city: "transit",
    dayIds: ["11-21", "11-28"],
    hours: "KLIA Transit 末班要事先查，红眼航班预留余量",
    cost: "KLIA Transit 比出租车和 Ekspres 便宜",
    duration: "市区到机场约 30–40 分钟车程，连进站安检另计",
    booking: "should",
    bookingNote: "机票看清航站楼。亚航多在 KLIA2，新航/马航常在 T1（主楼）。两座楼不是走路能随便串的。",
    play: [
      "入境：先填好 MDAC，跟人工柜台（中国护照通常不能走 autogate）。",
      "出机场坐 KLIA Transit 到 KL Sentral，不要被“快的士”拉去市区天价。",
      "11/28 下午 14:30 前从武吉免登动身。21:30 的航班，16:30 到机场都不算早。",
    ],
    notes: [
      "KLIA 和 KLIA2 搞错等于误机。",
      "入境柜台可能排队，红眼抵达也预留 45–90 分钟出关。",
      "机场 Wi-Fi 够填表，但 MDAC 必须落地前就填完。",
    ],
  },
  {
    id: "pek",
    placeId: "pek",
    name: "北京首都 T3",
    city: "cn",
    dayIds: ["11-20", "11-21", "11-29"],
    hours: "国际出发建议起飞前 3.5–4 小时到",
    cost: "机场线或出租车；不要卡点",
    duration: "国际值机安检常要 1.5–2 小时",
    booking: "must",
    bookingNote: "11/21 国际出发。25kg 托运按航司准运额，打包按 23–24kg 留余量。",
    play: [
      "T3 国际出发在三层一带，以当日指示为准。先托运再安检。",
      "11/29 早到：取行李、过海关，当天只休息，晚上再坐硬卧回沈阳。",
    ],
    notes: [
      "充电宝必须手提，有 3C / 容量标识，一般 ≤100Wh 可带、100–160Wh 要航司同意。",
      "液体手提 ≤100ml，过安检。药品原包装。",
      "不要把护照、药品、换洗、充电器放托运。",
    ],
  },
];

export const BOOKINGS: BookingItem[] = [
  {
    id: "gnr",
    title: "枪花演唱会票",
    when: "现在立刻。不要等到出发前",
    level: "must",
    why: "国家体育场一场，电子票，卖完即无。黄牛和截图不能入场。",
    how: "只在 Ticketmaster SG 出票，手机号、邮箱能在新加坡用。截图 + App 双备份。入场前再看一年龄限制。",
    href: "https://ticketmaster.sg/activity/detail/26sg_gunsnroses",
    hrefLabel: "Ticketmaster SG",
  },
  {
    id: "air",
    title: "联程机票（去程 + 回程）",
    when: "现在立刻",
    level: "must",
    why: "回程吉隆坡→樟宜→北京只约 90 分钟。分票加 25kg 托运，误机自负。",
    how: "一张票订完：北京—樟宜—吉隆坡，回程吉隆坡—樟宜—北京，回程对准 SQ800（约 01:10–07:15）。去程优先 SQ805 08:55–15:05。行李直挂。",
  },
  {
    id: "hotel",
    title: "四段住宿",
    when: "出机票后马上订",
    level: "must",
    why: "演唱会夜新加坡会涨。马六甲周末也涨，虽然你们是周四到。",
    how: "KL 武吉免登或茨厂街 11/21–23；新加坡小印度 / 武吉士 11/23–25，25 夜尽量靠近 Kallang；马六甲鸡场街步行圈 11/26；KL 武吉免登 11/27。可取消房先占上。",
  },
  {
    id: "train",
    title: "沈阳↔北京硬卧",
    when: "12306 放票日（通常提前 15 天）闹钟抢",
    level: "must",
    why: "K54 / K53 硬卧一放就少。买不到就只能高铁+酒店，成本和睡眠都变。",
    how: "11/19 K54 沈阳北→北京站；11/29 K53 北京→沈阳北。身份证进站。候补也可以挂。",
    href: "https://www.12306.cn/",
    hrefLabel: "12306",
  },
  {
    id: "bus",
    title: "三张跨境 / 城际大巴",
    when: "出发前 7–14 天",
    level: "must",
    why: "11/23 上午班一满就只剩下午车，新山关卡下午更堵。11/26 早班去马六甲同样要锁。",
    how: "Easybook / redBus / 巴士公司官网。① 11/23 TBS→新加坡；② 11/26 新加坡 Golden Mile 一带→马六甲；③ 11/27 马六甲→TBS。护照姓名与票一致。",
    href: "https://www.easybook.com/",
    hrefLabel: "Easybook",
  },
  {
    id: "mdac1",
    title: "第一份 MDAC（飞机入马）",
    when: "11/18 至 11/21 落地前，最早只能提前 3 天",
    level: "must",
    why: "免签不等于免填。没二维码可能被遣返或罚。收费代填都是坑。",
    how: "官网 imigresen-online.imi.gov.my/mdac/main。一次一入。中国护照走人工柜台。截图邮件里的 QR。",
    href: "https://imigresen-online.imi.gov.my/mdac/main",
    hrefLabel: "MDAC 官网",
  },
  {
    id: "sgac",
    title: "新加坡 Arrival Card",
    when: "11/20 至 11/23 大巴入境前，最早只能提前 3 天",
    level: "must",
    why: "陆路进新加坡必填。21 日和 28 日若只在樟宜空侧转机、不出关，一般不用填。",
    how: "只走 ICA 免费页 eservices.ica.gov.sg/sgarrivalcard。第三方收费站不要用。",
    href: "https://eservices.ica.gov.sg/sgarrivalcard/",
    hrefLabel: "ICA 官网",
  },
  {
    id: "mdac2",
    title: "第二份 MDAC（陆路再入马）",
    when: "11/23 至 11/26 过关前",
    level: "must",
    why: "从新加坡坐车进马六甲是一次新的入境，第一份已经作废。",
    how: "再填一张，目的地写马六甲住宿地址。过新山关出示护照和 QR。",
    href: "https://imigresen-online.imi.gov.my/mdac/main",
    hrefLabel: "MDAC 官网",
  },
  {
    id: "insurance",
    title: "旅行保险",
    when: "出机票同一天",
    level: "must",
    why: "演唱会、过关、红眼衔接，取消和延误都贵。",
    how: "含医疗、运送、航班延误 / 取消、行李延误。看清新加坡医疗免赔。",
  },
  {
    id: "petronas-tix",
    title: "双峰塔登塔票（可选）",
    when: "决定登塔后马上订，尽量提前数天",
    level: "should",
    why: "分时票，当天窗口常卖完。11/22 周日开塔，11/23 周一关闭。",
    how: "只走官网 eticket2。选 11/22 下午或傍晚。只拍外景则完全不用订。",
    href: "https://eticket2.petronastwintowers.com.my/",
    hrefLabel: "双峰塔官网",
  },
  {
    id: "gardens-tix",
    title: "花穹 / 云雾林（可选）",
    when: "11/24 前如要进温室再订",
    level: "should",
    why: "室外和灯光秀免费。温室是纯加项，现场也可能排队。",
    how: "官网 gardensbythebay.com.sg 或正规票务。预算紧就只看超级树。",
    href: "https://www.gardensbythebay.com.sg/",
    hrefLabel: "滨海湾花园",
  },
];

export const NOTE_GROUPS: NoteGroup[] = [
  {
    id: "docs",
    title: "证件与入境",
    items: [
      {
        title: "护照",
        body: "有效期多于 6 个月，空白页 2–3 页。复印件两份，手机再存照片。国内火车用身份证，护照不要托运。",
        warn: true,
      },
      {
        title: "免签不是免手续",
        body: "中国普通护照目前对马来西亚、新加坡均可短时免签（常见 30 天，政策可能调整，出发前核使馆 / ICA）。每次入境仍要填电子卡。",
        warn: true,
      },
      {
        title: "MDAC 填两次",
        body: "11/21 飞机入马一次，11/26 陆路从新加坡入马再一次。都只能提前 3 天填。官网免费。",
        warn: true,
      },
      {
        title: "SGAC 填一次",
        body: "11/23 大巴进新加坡必填。空侧转机不出关一般不填。只走 ICA 免费页。",
        warn: true,
      },
      {
        title: "过关材料",
        body: "回程机票、酒店订单、演唱会票截图随时能出示。海关问行程就按本攻略说：KL → 新加坡看演唱会 → 马六甲 → KL 回家。",
      },
    ],
  },
  {
    id: "air",
    title: "飞机与 25kg 托运",
    items: [
      {
        title: "必须联程",
        body: "去程回程都订一张票。回程衔接约 90 分钟，分票几乎无法完成托运再值机。",
        warn: true,
      },
      {
        title: "看航站楼",
        body: "KLIA T1 和 KLIA2 不是同一座。亚航常 KLIA2，新航常 T1。樟宜跨楼用空侧 Skytrain。",
        warn: true,
      },
      {
        title: "托运 25kg",
        body: "按 23–24kg 装箱，留购物余量。箱外挂姓名电话。超重要当场付钱。",
      },
      {
        title: "只能手提",
        body: "护照、证件复印件、药品、充电宝、充电器、换洗、耳机、演唱会票所在手机。充电宝有容量标识，一般不超过 100Wh。",
      },
      {
        title: "液体与禁运",
        body: "手提液体 ≤100ml。电子烟不要带去新加坡（进口和使用都严）。刀具、打火机按航司。新加坡口香糖有管制，不要整条带去派。",
        warn: true,
      },
      {
        title: "不要出关逛 Jewel",
        body: "21 日和 28 日都是空侧中转。出关 = 入境新加坡 + 重新安检，回程必误机。",
        warn: true,
      },
    ],
  },
  {
    id: "train",
    title: "国内火车",
    items: [
      {
        title: "身份证进站",
        body: "沈阳北、北京站都刷身份证。护照备份仍要带，国际段要用。",
      },
      {
        title: "硬卧",
        body: "提前 1 小时到。下铺好爬，上铺安静便宜。贵重物品放枕头下。自备一次性床单或内胆更干净。",
      },
      {
        title: "11/29 不要进城赶景",
        body: "红眼落地后再跑故宫来不及，也容易误晚上的车。机场附近或东直门睡觉。",
      },
    ],
  },
  {
    id: "bus",
    title: "跨境大巴与过关",
    items: [
      {
        title: "上午车",
        body: "吉隆坡去新加坡不要订下午班。新山关卡一堵，入住和休息都没了。",
        warn: true,
      },
      {
        title: "护照随身",
        body: "过关两次下车。护照、手机、充电宝、药品放随身小包，不要放行李舱。",
        warn: true,
      },
      {
        title: "听司机",
        body: "马来西亚出境、过长堤或第二通道、新加坡入境。大箱有时要拎下来过 X 光。",
      },
      {
        title: "不要换车头黄牛",
        body: "只上票面公司的车。TBS 和 Golden Mile 都有揽客。",
      },
    ],
  },
  {
    id: "show",
    title: "演唱会当晚",
    items: [
      {
        title: "电子票 + 电量",
        body: "Ticketmaster App 是入场凭证。截图备用。进场前电量 50% 以上，不要依赖场内充电。",
        warn: true,
      },
      {
        title: "安检清单",
        body: "禁外食外饮、大包、自拍杆、电子烟、平板、喇叭、非折叠伞。包超过 35×20×30cm 可能拒入。尽量无包。",
        warn: true,
      },
      {
        title: "天气",
        body: "露天体育场，11 月阵雨。折叠雨衣、薄外套、可湿的鞋。少穿牛仔裤。",
      },
      {
        title: "散场",
        body: "不要挤 Stadium Exit A。Exit B 或步行去 Mountbatten / Kallang。Grab 会涨价。",
      },
    ],
  },
  {
    id: "sights",
    title: "景点现场",
    items: [
      {
        title: "黑风洞着装",
        body: "遮肩遮膝，猴子不喂食，台阶防滑。主洞免费不用订。",
        warn: true,
      },
      {
        title: "双峰塔",
        body: "外景免费。登塔必须官网分时票，周一关闭。11/22 周日可订。",
      },
      {
        title: "滨海湾花园",
        body: "室外免费，灯光秀地面可看。温室才要票。园内餐饮贵。",
      },
      {
        title: "鸡场街周四",
        body: "11/26 不是周末夜市。按普通晚上逛街吃饭来，不要期待封街大集。",
      },
      {
        title: "清真寺 / 印度庙",
        body: "脱鞋、遮体、不打扰礼拜。国家清真寺可借袍。",
      },
    ],
  },
  {
    id: "money",
    title: "钱、网、吃饭",
    items: [
      {
        title: "货币",
        body: "马来西亚马币（RM），新加坡新币（S$）。新币贵很多。ATM 取马币，拒绝动态货币转换（DCC）。",
      },
      {
        title: "支付",
        body: "Visa / Mastercard 在新马都能刷。食阁、小摊备现金。支付宝微信不是处处能用。",
      },
      {
        title: "上网",
        body: "落地买 eSIM 或机场柜台卡。不要在关卡被揽“免费 Wi-Fi 装软件”。Google Maps 在新马可用。",
      },
      {
        title: "水电",
        body: "两国都是英式三脚（Type G）、230V。中国电器要转换插头。新加坡自来水可喝，马来西亚买瓶装。",
      },
      {
        title: "肠胃",
        body: "亚罗街、夜市少生食。止泻药、防蚊液必带。登革热在新马都有，晚上也要防蚊。",
      },
      {
        title: "别在景区正餐",
        body: "吉隆坡用档口和 mamak，新加坡用食阁。一天马币 30–60、新币 15–28 能吃好。",
      },
    ],
  },
  {
    id: "law",
    title: "当地红线",
    items: [
      {
        title: "新加坡电子烟",
        body: "进口、携带、使用都可能出事。不要带，包括托运。",
        warn: true,
      },
      {
        title: "罚款习惯",
        body: "乱扔垃圾、不冲洗厕所、地铁吃喝、乱穿马路都可能罚。跟当地人过灯。",
        warn: true,
      },
      {
        title: "口香糖",
        body: "新加坡不是绝对禁咀嚼，但是严格管制销售和乱吐。不要当特产买。",
      },
      {
        title: "马来西亚",
        body: "不评论王室。酒可以买，但别在街上醉闹。毒品零容忍。",
        warn: true,
      },
      {
        title: "拍照",
        body: "过关、军警、政府大楼不要拍。神庙里先看是否允许。",
      },
    ],
  },
  {
    id: "safety",
    title: "安全与健康",
    items: [
      {
        title: "天气",
        body: "日间 28–33℃，潮湿，午后阵雨。防晒、帽子、雨衣。机舱和凌晨机场备薄外套。",
      },
      {
        title: "抢与骗",
        body: "亚罗街、茨厂街、鸡场街看包。黑风洞车站、TBS、Golden Mile 拒绝揽客车。",
      },
      {
        title: "交通",
        body: "马来西亚左舵左行，过马路先看右。Grab 比拦车安全。演唱会散场不要跟陌生人拼车。",
      },
      {
        title: "保险与急救",
        body: "新加坡医疗极贵。保险要能垫付。紧急：马来西亚 999，新加坡 999 / 995。",
      },
    ],
  },
];

export function sightsByPlace(placeId?: string) {
  if (!placeId) return [] as Sight[];
  return SIGHTS.filter((s) => s.placeId === placeId);
}

export function sightById(id: string) {
  return SIGHTS.find((s) => s.id === id);
}

export const MUST_BOOKINGS = BOOKINGS.filter((b) => b.level === "must");
export const SHOULD_BOOKINGS = BOOKINGS.filter((b) => b.level === "should");
