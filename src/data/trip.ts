export type LatLng = { lat: number; lng: number };

export type Place = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  note?: string;
};

export type DayStop = {
  time: string;
  title: string;
  detail: string;
  kind: "transit" | "city" | "eat" | "sleep" | "show" | "border" | "tip";
  placeId?: string;
};

export type DayMap = {
  center: LatLng;
  zoom: number;
  markers: Place[];
  lines?: [number, number][][];
};

export type TripDay = {
  id: string;
  date: string;
  weekday: string;
  monthDay: string;
  city: string;
  phase: "cn" | "my" | "sg" | "air";
  title: string;
  kicker: string;
  summary: string;
  stay: string;
  eat: string[];
  budget: string;
  map: DayMap;
  stops: DayStop[];
  image?: string;
  imageAlt?: string;
};

export const PLACES = {
  shenyang: { id: "sy", name: "沈阳北", lat: 41.814, lng: 123.432, note: "11/19 夜车出发" },
  beijing: { id: "bj", name: "北京站", lat: 39.902, lng: 116.427, note: "缓冲日到站" },
  pek: { id: "pek", name: "首都机场 T3", lat: 40.08, lng: 116.585, note: "国际出发" },
  changi: { id: "sin", name: "樟宜机场", lat: 1.3644, lng: 103.9915, note: "空侧转机，不出关" },
  klia: { id: "klia", name: "吉隆坡机场", lat: 2.7456, lng: 101.7099, note: "看清 T1 / KLIA2" },
  kl: { id: "kl", name: "吉隆坡", lat: 3.139, lng: 101.687 },
  petronas: { id: "petronas", name: "双峰塔 / KLCC", lat: 3.1579, lng: 101.7116 },
  batu: { id: "batu", name: "黑风洞", lat: 3.2379, lng: 101.684 },
  chinatownKL: { id: "petaling", name: "茨厂街", lat: 3.1436, lng: 101.6958 },
  merdeka: { id: "merdeka", name: "独立广场", lat: 3.148, lng: 101.6936 },
  jalanAlor: { id: "alor", name: "亚罗街", lat: 3.1467, lng: 101.7095 },
  bukitBintang: { id: "bb", name: "武吉免登", lat: 3.1478, lng: 101.7117 },
  tbs: { id: "tbs", name: "TBS 南湖镇", lat: 3.076, lng: 101.7047, note: "跨境大巴总站" },
  sentral: { id: "sentral", name: "KL Sentral", lat: 3.1338, lng: 101.6869 },
  stadium: { id: "ns", name: "国家体育场", lat: 1.304, lng: 103.8744, note: "11/25 20:00 枪花" },
  gardens: { id: "gbtb", name: "滨海湾花园", lat: 1.2816, lng: 103.8636 },
  merlion: { id: "merlion", name: "鱼尾狮", lat: 1.2868, lng: 103.8545 },
  chinatownSG: { id: "ctsg", name: "牛车水", lat: 1.2837, lng: 103.8436 },
  littleIndia: { id: "li", name: "小印度", lat: 1.3066, lng: 103.8518 },
  bugis: { id: "bugis", name: "武吉士", lat: 1.3006, lng: 103.8555 },
  goldenMile: { id: "gmt", name: "Golden Mile", lat: 1.3026, lng: 103.8645, note: "大巴常见落客" },
  kallang: { id: "kallang", name: "Kallang MRT", lat: 1.3115, lng: 103.8714, note: "散场备选" },
  mountbatten: { id: "mb", name: "Mountbatten", lat: 1.3062, lng: 103.8828, note: "散场备选" },
  melaka: { id: "melaka", name: "荷兰红屋", lat: 2.1944, lng: 102.2491 },
  jonker: { id: "jonker", name: "鸡场街", lat: 2.197, lng: 102.2445 },
  melakaSentral: { id: "ms", name: "Melaka Sentral", lat: 2.2165, lng: 102.2465 },
} as const satisfies Record<string, Place>;

function line(...ids: (keyof typeof PLACES)[]): [number, number][] {
  return ids.map((id) => [PLACES[id].lat, PLACES[id].lng]);
}

export const DAYS: TripDay[] = [
  {
    id: "11-19",
    date: "2026-11-19",
    weekday: "周四",
    monthDay: "11 / 19",
    city: "沈阳 → 北京",
    phase: "cn",
    title: "夜车出关",
    kicker: "行程第 1 日",
    summary: "晚上从沈阳北上硬卧，把住宿和交通叠在一趟车上。推荐 K54，全列卧铺，睡一晚到北京站。",
    stay: "火车硬卧（上铺最便宜，下铺好爬）",
    eat: ["车站简餐即可，车上备热水和零食"],
    budget: "硬卧约 170 元",
    map: {
      center: { lat: 40.9, lng: 119.9 },
      zoom: 6,
      markers: [PLACES.shenyang, PLACES.beijing],
      lines: [line("shenyang", "beijing")],
    },
    stops: [
      {
        time: "21:00",
        title: "沈阳北检票",
        detail: "身份证进站，提前 1 小时。带眼罩、耳塞、薄外套。",
        kind: "transit",
        placeId: "sy",
      },
      {
        time: "22:00",
        title: "K54 开行",
        detail: "沈阳北 → 北京站，次日约 06:58 到。全卧铺、几乎直达。备选 K28 沈阳 22:24 → 北京 08:38。",
        kind: "transit",
        placeId: "sy",
      },
      {
        time: "夜间",
        title: "硬卧过夜",
        detail: "下铺方便，上铺最安静。贵重物品放枕头下。一次性床单更干净。",
        kind: "sleep",
      },
    ],
  },
  {
    id: "11-20",
    date: "2026-11-20",
    weekday: "周五",
    monthDay: "11 / 20",
    city: "北京",
    phase: "cn",
    title: "首都缓冲日",
    kicker: "行程第 2 日",
    summary: "到北京只做三件事：补觉、核对行李、填入境卡。不要排故宫。晚上住首都 T3 附近或东直门 / 三元桥。",
    stay: "首都机场 T3 附近，或东直门 / 三元桥",
    eat: ["机场或酒店简单吃，保存胃给吉隆坡"],
    budget: "酒店 300–600 元",
    map: {
      center: { lat: 39.98, lng: 116.5 },
      zoom: 10,
      markers: [PLACES.beijing, PLACES.pek],
      lines: [line("beijing", "pek")],
    },
    stops: [
      {
        time: "07:00",
        title: "北京站到站",
        detail: "出站后地铁 2 号线转机场线，或打车去住宿。",
        kind: "transit",
        placeId: "bj",
      },
      {
        time: "白天",
        title: "办入境材料",
        detail: "下载 Grab、Google Maps、Ticketmaster。截图机票、酒店、演唱会票。护照拍照备份。",
        kind: "tip",
      },
      {
        time: "下午",
        title: "托运箱定重",
        detail: "总重控制 23–24kg。充电宝、药品、换洗衣物、证件放手提。",
        kind: "tip",
        placeId: "pek",
      },
      {
        time: "晚上",
        title: "早睡",
        detail: "明天国际出发建议起飞前 3.5–4 小时到 T3。",
        kind: "sleep",
        placeId: "pek",
      },
    ],
  },
  {
    id: "11-21",
    date: "2026-11-21",
    weekday: "周六",
    monthDay: "11 / 21",
    city: "北京 → 樟宜 → 吉隆坡",
    phase: "air",
    title: "经樟宜转入南洋",
    kicker: "行程第 3 日",
    summary:
      "公开时刻没有“12:00 起飞、19:00 到樟宜”的直飞。最顺的是 SQ805 08:55–15:05，晚上再飞吉隆坡。回程对准 SQ800。全程尽量订成一张联程票。",
    stay: "吉隆坡武吉免登或茨厂街",
    eat: ["机上正餐", "落地后亚罗街烤串 / 炒粿条"],
    budget: "联程机票为大头；KL 住宿 RM90–180",
    image: "/images/changi.jpg",
    imageAlt: "樟宜机场 Jewel 室内瀑布",
    map: {
      center: { lat: 2.2, lng: 103.3 },
      zoom: 7,
      markers: [PLACES.changi, PLACES.klia, PLACES.bukitBintang],
      lines: [line("changi", "klia"), line("klia", "bukitBintang")],
    },
    stops: [
      {
        time: "起飞前 4h",
        title: "首都 T3 值机",
        detail: "国际出发三层。25kg 托运留 1kg 余量。液体 ≤100ml。充电宝只能手提。",
        kind: "transit",
      },
      {
        time: "08:55",
        title: "SQ805 北京 → 樟宜",
        detail: "约 15:05 到。备选 CA889 约 10:00–16:25。联程则可直托吉隆坡。",
        kind: "transit",
        placeId: "sin",
      },
      {
        time: "20:30",
        title: "樟宜空侧转吉隆坡",
        detail: "跟着 Transfer 指示，不要出关逛 Jewel。跨航站楼预留 90 分钟。",
        kind: "tip",
        placeId: "sin",
      },
      {
        time: "21:30",
        title: "抵达 KLIA / KLIA2",
        detail: "入境前 3 天内已填 MDAC。T1 坐 KLIA Transit 到 KL Sentral，比 Ekspres 便宜。看清航站楼。",
        kind: "border",
        placeId: "klia",
      },
      {
        time: "夜间",
        title: "入住即歇",
        detail: "只做入住和路边吃一顿，不排景点。",
        kind: "sleep",
        placeId: "bb",
      },
    ],
  },
  {
    id: "11-22",
    date: "2026-11-22",
    weekday: "周日",
    monthDay: "11 / 22",
    city: "吉隆坡",
    phase: "my",
    title: "双峰与黑风洞",
    kicker: "行程第 4 日",
    summary: "吉隆坡一天够用：早黑风洞避热，中午茨厂街与独立广场，下午双峰塔外景和 KLCC 公园，晚上亚罗街。",
    stay: "武吉免登 / 茨厂街，不停梳邦或蒲种",
    eat: ["早餐椰浆饭", "午餐肉骨茶或香蕉叶", "晚餐亚罗街", "消夜 mamak 旋转咖喱面"],
    budget: "吃 30–60 马币 + 交通 10–25 马币",
    image: "/images/batu-caves.jpg",
    imageAlt: "黑风洞彩阶与神庙",
    map: {
      center: { lat: 3.18, lng: 101.7 },
      zoom: 12,
      markers: [PLACES.batu, PLACES.chinatownKL, PLACES.merdeka, PLACES.petronas, PLACES.jalanAlor],
      lines: [
        line("batu", "chinatownKL"),
        line("chinatownKL", "merdeka"),
        line("merdeka", "petronas"),
        line("petronas", "jalanAlor"),
      ],
    },
    stops: [
      {
        time: "08:00",
        title: "黑风洞",
        detail: "KTM 科摩罗线到 Batu Caves，几个马币。272 级台阶，中午最热。猴子会抢食物，饮料不要外露。",
        kind: "city",
        placeId: "batu",
      },
      {
        time: "11:30",
        title: "茨厂街 · 中央市场 · 独立广场",
        detail: "步行看旧殖民街区。档口吃饭，避开景区门口溢价。",
        kind: "city",
        placeId: "petaling",
      },
      {
        time: "15:00",
        title: "双峰塔外景 + KLCC 公园",
        detail: "登塔和天桥要票，预算紧就拍外景，夜景灯光更值。可转 TRX 吹空调。",
        kind: "city",
        placeId: "petronas",
      },
      {
        time: "19:00",
        title: "亚罗街夜市",
        detail: "烤串、炒河粉、炒粿条。用 Grab 回酒店。",
        kind: "eat",
        placeId: "alor",
      },
    ],
  },
  {
    id: "11-23",
    date: "2026-11-23",
    weekday: "周一",
    monthDay: "11 / 23",
    city: "吉隆坡 → 新加坡",
    phase: "sg",
    title: "上午收尾，大巴过关",
    kicker: "行程第 5 日",
    summary: "只留 2–3 小时补点，9 点前后去 TBS。下午车容易堵在新山。入境新加坡前 3 天填 SG Arrival Card。",
    stay: "新加坡小印度 / 武吉士 / 牛车水",
    eat: ["吉隆坡早餐椰浆饭", "新加坡晚上牛车水食阁"],
    budget: "大巴 RM45–90 或 S$15–40",
    image: "/images/petronas.jpg",
    imageAlt: "吉隆坡双峰塔",
    map: {
      center: { lat: 2.4, lng: 102.7 },
      zoom: 7,
      markers: [PLACES.petronas, PLACES.tbs, PLACES.goldenMile, PLACES.bugis],
      lines: [line("petronas", "tbs"), line("tbs", "goldenMile")],
    },
    stops: [
      {
        time: "08:00",
        title: "补一个点",
        detail: "国家清真寺外景、伊斯兰艺术博物馆，或武吉免登买特产。",
        kind: "city",
        placeId: "petronas",
      },
      {
        time: "09:00",
        title: "去 TBS",
        detail: "KL Sentral 坐 KLIA Transit（不是 Ekspres）到 Bandar Tasik Selatan，天桥进 TBS。",
        kind: "transit",
        placeId: "tbs",
      },
      {
        time: "10:00",
        title: "吉隆坡 → 新加坡大巴",
        detail: "账面 5 小时，含过关常 5.5–7 小时。护照手机随身，不要放行李舱。",
        kind: "border",
        placeId: "tbs",
      },
      {
        time: "过关",
        title: "新山 + 兀兰 / 大士",
        detail: "马方盖出境章，过长堤，新方出示护照和 SGAC。听司机指挥取大箱。",
        kind: "border",
      },
      {
        time: "下午",
        title: "落客 Golden Mile 一带",
        detail: "地铁去酒店。晚上滨海湾外观或牛车水吃饭，不赶景。",
        kind: "sleep",
        placeId: "gmt",
      },
    ],
  },
  {
    id: "11-24",
    date: "2026-11-24",
    weekday: "周二",
    monthDay: "11 / 24",
    city: "新加坡",
    phase: "sg",
    title: "滨海与食阁",
    kicker: "行程第 6 日",
    summary: "贵在住宿和打车，景点可以省着玩：鱼尾狮看一眼，花园室外免费，晚上看超级树。环球影城这次不排。",
    stay: "同 23 日，小印度 / 武吉士",
    eat: ["牛车水 Maxwell 鸡饭", "老机场路或 Lau Pa Sat 沙嗲"],
    budget: "吃 15–28 新币 + 地铁 3–8 新币",
    image: "/images/singapore.jpg",
    imageAlt: "滨海湾夜景",
    map: {
      center: { lat: 1.286, lng: 103.86 },
      zoom: 14,
      markers: [PLACES.merlion, PLACES.gardens, PLACES.chinatownSG, PLACES.bugis],
      lines: [line("merlion", "gardens"), line("gardens", "chinatownSG")],
    },
    stops: [
      {
        time: "09:30",
        title: "鱼尾狮",
        detail: "拍照即走，不要在这里耗上午。",
        kind: "city",
        placeId: "merlion",
      },
      {
        time: "10:30",
        title: "滨海湾花园室外",
        detail: "室外花园免费。花穹 / 云雾林票贵，预算紧可只看超级树。",
        kind: "city",
        placeId: "gbtb",
      },
      {
        time: "13:00",
        title: "牛车水食阁",
        detail: "Maxwell 或 Chinatown Complex。人均 8–15 新币能吃好。",
        kind: "eat",
        placeId: "ctsg",
      },
      {
        time: "15:30",
        title: "克拉码头或国家美术馆",
        detail: "走路吹风。虎豹别墅、麦里芝作为备选。",
        kind: "city",
      },
      {
        time: "19:30",
        title: "超级树灯光秀",
        detail: "花园步道要票，地面看灯光不一定买最贵的票。",
        kind: "city",
        placeId: "gbtb",
      },
    ],
  },
  {
    id: "11-25",
    date: "2026-11-25",
    weekday: "周三",
    monthDay: "11 / 25",
    city: "新加坡 · 国家体育场",
    phase: "sg",
    title: "枪花之夜",
    kicker: "行程第 7 日",
    summary: "Guns N' Roses World Tour，国家体育场 20:00 开演，约 18:00 开门。白天不要高强度。电子票在 Ticketmaster，截图备份。",
    stay: "尽量靠近 Kallang / Lavender / 明古连，散场少挤地铁",
    eat: ["17:00 前吃完。场内餐饮贵。空瓶可进场灌水。"],
    budget: "票面约 S$138 起；场内另计",
    image: "/images/stadium.jpg",
    imageAlt: "新加坡国家体育场",
    map: {
      center: { lat: 1.305, lng: 103.876 },
      zoom: 14,
      markers: [PLACES.bugis, PLACES.stadium, PLACES.kallang, PLACES.mountbatten],
      lines: [line("bugis", "stadium"), line("stadium", "kallang"), line("stadium", "mountbatten")],
    },
    stops: [
      {
        time: "上午",
        title: "轻松逛",
        detail: "小印度或乌节路。下午回酒店充电、换衣服、装小包。",
        kind: "city",
        placeId: "bugis",
      },
      {
        time: "16:30",
        title: "早晚饭",
        detail: "食阁解决。带折叠雨衣和薄外套，11 月可能阵雨。",
        kind: "eat",
      },
      {
        time: "17:30",
        title: "前往体育城",
        detail: "环线 Stadium 站（CC6）。无包走快速安检。禁止外食、易拉罐、大包、自拍杆、电子烟。",
        kind: "show",
        placeId: "ns",
      },
      {
        time: "20:00",
        title: "开演",
        detail: "枪花常演到 23:00 左右，有漫长安可。手机电量保持 50% 以上。",
        kind: "show",
        placeId: "ns",
      },
      {
        time: "散场",
        title: "不要挤 Exit A",
        detail: "走 Exit B，或步行去 Mountbatten / Kallang 再上车。",
        kind: "transit",
        placeId: "mb",
      },
    ],
  },
  {
    id: "11-26",
    date: "2026-11-26",
    weekday: "周四",
    monthDay: "11 / 26",
    city: "新加坡 → 马六甲",
    phase: "my",
    title: "南下古城",
    kicker: "行程第 8 日",
    summary: "早班大巴去马六甲，比原路回吉隆坡更顺。车程约 3.5–4.5 小时。出发前 3 天再填一份 MDAC。",
    stay: "鸡场街 / 荷兰广场步行圈，RM80–150",
    eat: ["娘惹菜人均 40–70 马币", "鸡场街夜市", "椰糖咖啡、鸡饭粒"],
    budget: "大巴 S$20–40",
    image: "/images/melaka.jpg",
    imageAlt: "马六甲荷兰红屋广场",
    map: {
      center: { lat: 1.75, lng: 103.05 },
      zoom: 8,
      markers: [PLACES.goldenMile, PLACES.melakaSentral, PLACES.jonker, PLACES.melaka],
      lines: [line("goldenMile", "melakaSentral"), line("melakaSentral", "jonker")],
    },
    stops: [
      {
        time: "早班",
        title: "Golden Mile / Queen Street 上车",
        detail: "不要订中午以后的车。周日关卡更堵。护照随身。",
        kind: "border",
        placeId: "gmt",
      },
      {
        time: "午后",
        title: "Melaka Sentral 到古城",
        detail: "Grab 10–15 分钟到鸡场街。",
        kind: "transit",
        placeId: "ms",
      },
      {
        time: "下午",
        title: "荷兰红屋 · 圣保罗山 · 河边",
        detail: "古城很小，步行足够。海峡清真寺可远看。",
        kind: "city",
        placeId: "melaka",
      },
      {
        time: "晚上",
        title: "鸡场街夜市",
        detail: "周五至周日更热闹。注意扒手，贵重物品分开放。",
        kind: "eat",
        placeId: "jonker",
      },
    ],
  },
  {
    id: "11-27",
    date: "2026-11-27",
    weekday: "周五",
    monthDay: "11 / 27",
    city: "马六甲 → 吉隆坡",
    phase: "my",
    title: "回 KL 补眠",
    kicker: "行程第 9 日",
    summary: "上午把红屋区走完，下午巴士回 TBS，约 2–2.5 小时，RM10–18。晚上住回武吉免登，方便次日去机场。",
    stay: "吉隆坡武吉免登",
    eat: ["马六甲早餐", "吉隆坡晚上 mamak 或茨厂街"],
    budget: "巴士 RM10–18",
    image: "/images/melaka.jpg",
    imageAlt: "马六甲红屋区",
    map: {
      center: { lat: 2.65, lng: 101.95 },
      zoom: 8,
      markers: [PLACES.melaka, PLACES.melakaSentral, PLACES.tbs, PLACES.bukitBintang],
      lines: [line("melaka", "melakaSentral"), line("melakaSentral", "tbs")],
    },
    stops: [
      {
        time: "09:00",
        title: "补完古城",
        detail: "荷兰街、鸡场街白天店铺。11 点前退房。",
        kind: "city",
        placeId: "melaka",
      },
      {
        time: "13:00",
        title: "Melaka Sentral → TBS",
        detail: "KKKL / Transnasional 等，三排座更舒服。班次很密。",
        kind: "transit",
        placeId: "ms",
      },
      {
        time: "16:00",
        title: "TBS 回市区",
        detail: "KLIA Transit 回 KL Sentral，再地铁去武吉免登。",
        kind: "transit",
        placeId: "tbs",
      },
      {
        time: "晚上",
        title: "轻松收尾",
        detail: "没去成的咖啡、白咖啡、饼干，重量算进托运。",
        kind: "eat",
        placeId: "bb",
      },
    ],
  },
  {
    id: "11-28",
    date: "2026-11-28",
    weekday: "周六",
    monthDay: "11 / 28",
    city: "吉隆坡 → 樟宜",
    phase: "air",
    title: "夜航衔接",
    kicker: "行程第 10 日",
    summary: "下午 14:30 前动身去机场。21:30 一档飞樟宜（SQ127 / AK723），凌晨转 SQ800 回北京。回程只有约 90 分钟，必须联程，不要出关。",
    stay: "红眼航班上",
    eat: ["机场用餐，樟宜空侧简单补给"],
    budget: "KLIA Transit 比出租车稳",
    image: "/images/changi.jpg",
    imageAlt: "樟宜机场",
    map: {
      center: { lat: 2.1, lng: 102.85 },
      zoom: 7,
      markers: [PLACES.bukitBintang, PLACES.sentral, PLACES.klia, PLACES.changi],
      lines: [line("bukitBintang", "sentral"), line("sentral", "klia"), line("klia", "changi")],
    },
    stops: [
      {
        time: "上午",
        title: "查漏补缺",
        detail: "行李再过秤。液体重新分装。",
        kind: "tip",
        placeId: "bb",
      },
      {
        time: "14:30",
        title: "去机场",
        detail: "KL Sentral → KLIA Transit。21:30 的航班，16:30 到机场都不算早。",
        kind: "transit",
        placeId: "sentral",
      },
      {
        time: "21:30",
        title: "吉隆坡 → 樟宜",
        detail: "SQ127 约 21:50–23:05，或亚航 AK723 21:30–22:45。看清 T1 / T2。",
        kind: "transit",
        placeId: "klia",
      },
      {
        time: "空侧",
        title: "直奔登机口",
        detail: "不要去 Jewel。跟上 SQ800 01:10 那班。",
        kind: "tip",
        placeId: "sin",
      },
    ],
  },
  {
    id: "11-29",
    date: "2026-11-29",
    weekday: "周日",
    monthDay: "11 / 29",
    city: "北京 → 沈阳",
    phase: "cn",
    title: "北归夜车",
    kicker: "行程第 11 日",
    summary: "SQ800 约 01:10 起飞，07:15 到首都。白天在机场附近或东直门休息，晚上硬卧回沈阳，对向大约 K53。",
    stay: "火车硬卧",
    eat: ["首都机场或东直门简餐"],
    budget: "硬卧约 170 元",
    map: {
      center: { lat: 40.9, lng: 119.9 },
      zoom: 6,
      markers: [PLACES.pek, PLACES.beijing, PLACES.shenyang],
      lines: [line("pek", "beijing"), line("beijing", "shenyang")],
    },
    stops: [
      {
        time: "07:15",
        title: "抵达首都",
        detail: "取行李，过海关。不要再进城赶景。",
        kind: "transit",
        placeId: "pek",
      },
      {
        time: "白天",
        title: "补觉",
        detail: "机场附近或东直门休息，整理托运箱改火车行李。",
        kind: "sleep",
        placeId: "bj",
      },
      {
        time: "晚上",
        title: "硬卧回沈阳",
        detail: "K53 北京夜间开、次日早到沈阳北。身份证进站。",
        kind: "transit",
        placeId: "sy",
      },
    ],
  },
];

export const NAV = [
  { to: "/", label: "总览" },
  { to: "/itinerary", label: "日程" },
  { to: "/sights", label: "景点" },
  { to: "/flights", label: "飞机" },
  { to: "/bus", label: "大巴" },
  { to: "/malaysia", label: "马来西亚" },
  { to: "/singapore", label: "新加坡" },
  { to: "/concert", label: "演唱会" },
  { to: "/prepare", label: "预约" },
] as const;

export const STATS = [
  { value: "11", label: "日" },
  { value: "4", label: "座城市" },
  { value: "1", label: "场演唱会" },
  { value: "25", label: "kg 托运" },
];

export const RISKS = [
  {
    title: "回程 90 分钟还分票",
    body: "吉隆坡到樟宜再转 SQ800，托运 25kg 分票极易误机。去程回程都订成同一张联程票。",
  },
  {
    title: "23 日下午才坐大巴",
    body: "新山关卡一堵，晚上入住和休息都没了。TBS 尽量上午发车。",
  },
  {
    title: "樟宜出关逛 Jewel",
    body: "21 日和 28 日都是空侧中转。出关就要重新入境安检，回程会误机。",
  },
];

export const HOW_TO = [
  { n: "01", t: "先把预约做完", b: "枪花票、联程机票、酒店、硬卧、三张大巴。电子卡有 3 天窗口，到点再填。" },
  { n: "02", t: "按日走地图", b: "时间轴和图钉联动。点一个点，下面会出现该景点的玩法和注意。" },
  { n: "03", t: "出发前勾红线", b: "注意事项页按证件、飞机、过关、演唱会、当地法律分组。清单会记在这台设备上。" },
];

export const LINKS = [
  { label: "马来西亚 MDAC", href: "https://imigresen-online.imi.gov.my/mdac/main", hint: "免费官网，每次入境前 3 天内，本趟填两次" },
  { label: "新加坡 Arrival Card", href: "https://eservices.ica.gov.sg/sgarrivalcard/", hint: "ICA 免费，11/23 陆路入境必须" },
  { label: "枪花票 Ticketmaster SG", href: "https://ticketmaster.sg/activity/detail/26sg_gunsnroses", hint: "只出手机票，不要黄牛" },
  { label: "双峰塔登塔", href: "https://eticket2.petronastwintowers.com.my/", hint: "可选。11/22 周日开，11/23 周一关" },
  { label: "滨海湾花园", href: "https://www.gardensbythebay.com.sg/", hint: "室外免费；花穹 / 云雾林才要票" },
  { label: "Easybook 大巴", href: "https://www.easybook.com/", hint: "23 / 26 / 27 三张车" },
];

export type CheckItem = { id: string; label: string; hint?: string };

export const CHECKLIST: { title: string; items: CheckItem[] }[] = [
  {
    title: "证件与电子卡",
    items: [
      { id: "passport", label: "护照有效期 > 6 个月，空白页 2–3 页" },
      { id: "idcard", label: "身份证（火车必须）" },
      { id: "copies", label: "护照复印件 2 份 + 手机照片" },
      { id: "mdac1", label: "11/21 入境马来西亚 MDAC（只能出发前 3 天内填）" },
      { id: "sgac", label: "11/23 入境新加坡 SG Arrival Card（只能提前 3 天）" },
      { id: "mdac2", label: "11/26 再入马来西亚第二份 MDAC" },
      { id: "tickets", label: "机票、大巴票、酒店单、演唱会电子票截图" },
      { id: "insurance", label: "旅行保险（医疗 + 航班延误）" },
    ],
  },
  {
    title: "必须先订",
    items: [
      { id: "air", label: "联程：北京—樟宜—吉隆坡，回程吉隆坡—樟宜—北京（对准 SQ800）" },
      { id: "gnr", label: "枪花票 Ticketmaster SG（现在立刻）" },
      { id: "k54", label: "11/19 沈阳北硬卧、11/29 北京回沈阳硬卧" },
      { id: "hotels", label: "KL 两段 + 新加坡 3 晚 + 马六甲 1 晚" },
      { id: "bus", label: "23 日 TBS→新加坡；26 日新加坡→马六甲；27 日马六甲→TBS" },
    ],
  },
  {
    title: "可选但要早订",
    items: [
      { id: "petronas-tix", label: "若登双峰塔：11/22 官网分时票（周一关闭）" },
      { id: "gardens-tix", label: "若进花穹 / 云雾林：11/24 前出票；室外不必订" },
    ],
  },
  {
    title: "行李",
    items: [
      { id: "bag", label: "托运总重 23–24kg，箱外挂姓名电话" },
      { id: "clothes", label: "速干短袖 3、能遮膝的长裤、薄外套、折叠雨衣、走路鞋" },
      { id: "meds", label: "感冒药、止泻、创可贴、防蚊、晕车药" },
      { id: "power", label: "英式三脚转换插头 + 充电宝（手提，有容量标识）" },
      { id: "sleep", label: "眼罩耳塞、硬卧床单或内胆" },
      { id: "noban", label: "不带电子烟、大瓶液体、刀具；不去新加坡派口香糖" },
      { id: "concert-bag", label: "演唱会用无包或小斜挎，空瓶和外食都不赌" },
    ],
  },
];

export const FLIGHTS = [
  { when: "11/19 夜", name: "K54 沈阳北 → 北京站", meta: "约 22:00–06:58 · 硬卧约 170 元 · 全列卧铺" },
  { when: "11/21 去程", name: "SQ805 首都 08:55 → 樟宜 15:05", meta: "备选 CA889 约 10:00–16:25。没有 12:00–19:00 直飞。" },
  { when: "11/21 晚", name: "樟宜 → 吉隆坡 约 20:30–21:30", meta: "新航 / 亚航 / Scoot / 马航都有。联程则行李直挂。" },
  { when: "11/28 夜", name: "SQ127 约 21:50–23:05 或 AK723 21:30–22:45", meta: "KLIA T1 与 KLIA2 不是同一座楼。" },
  { when: "11/29 凌晨", name: "SQ800 樟宜 01:10 → 首都 07:15", meta: "回程衔接约 90 分钟，必须同一张票。" },
  { when: "11/29 夜", name: "K53 北京 → 沈阳北", meta: "硬卧，次日早到。白天不要再进城赶景。" },
];

export function getDay(id: string) {
  return DAYS.find((d) => d.id === id);
}

export function adjacentDays(id: string) {
  const i = DAYS.findIndex((d) => d.id === id);
  return {
    prev: i > 0 ? DAYS[i - 1] : undefined,
    next: i >= 0 && i < DAYS.length - 1 ? DAYS[i + 1] : undefined,
  };
}

export function phaseLabel(phase: TripDay["phase"]) {
  if (phase === "sg") return "新加坡";
  if (phase === "my") return "马来西亚";
  if (phase === "air") return "空中";
  return "中国";
}
