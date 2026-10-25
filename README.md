# 南洋夜车

2026 年 11 月 19 日至 29 日的个人行程站：沈阳硬卧进京，经樟宜空侧转入吉隆坡，大巴去新加坡看 Guns N' Roses，再南下马六甲，折回吉隆坡红眼北归。

地图用中文注记。日程、景点、预约和过关注意事项写在同一套页面里。

## 页面

| 路径 | 内容 |
| --- | --- |
| `/` | 总览、整趟动线、必须预约项 |
| `/itinerary` | 十一日日程；点图钉或时间轴会跳到当天玩法 |
| `/sights` | 每个点的开放时间、花费、走法和红线 |
| `/flights` | 硬卧、联程机票、25kg 托运 |
| `/bus` | 吉隆坡 TBS、新加坡、马六甲三张车 |
| `/malaysia` | 吉隆坡与马六甲 |
| `/singapore` | 滨海、食阁、地铁 |
| `/concert` | 11 月 25 日国家体育场 |
| `/prepare` | 预约表、可勾选清单、全行程注意事项 |

勾选存在这台浏览器里，刷新不会丢。

## 本地运行

需要 Node.js 22。

```bash
npm install
npm run dev
```

开发服务监听 `0.0.0.0:8080`。

```bash
npm run typecheck
npm run build
```

## 技术

TanStack Start、React 19、Vite、Tailwind CSS v4、Leaflet、Zustand。地图瓦片为带中文注记的 Google 地图。

## 使用前

时刻、票价、免签和入境卡以航司、车站和官方页面为准。电子入境卡只能在抵达前 3 天内填写。

- [马来西亚 MDAC](https://imigresen-online.imi.gov.my/mdac/main)
- [新加坡 Arrival Card](https://eservices.ica.gov.sg/sgarrivalcard/)
- [枪花票 Ticketmaster SG](https://ticketmaster.sg/activity/detail/26sg_gunsnroses)

这是一份个人行程笔记，不是旅行社产品。
