export const shopConfig = {
  brand: {
    name: "川味记老火锅",
    shortName: "川味记",
    slogan: "一锅老味道，煮出人间烟火气。",
    subtitle: "20年传承 · 重庆老火锅 · 深夜不打烊",
    since: 2004,
    phone: "138-0000-9999",
  },
  hero: {
    bgImage: "/images/hero-bg.jpg",
    badgeText: "20年老店 · 传统炒料",
    cta1: "看招牌菜",
    cta2: "导航到店",
  },
  story: {
    bossName: "老陈",
    bossTitle: "创始人 · 主厨",
    intro: "20年前从火锅学徒开始，用传统手艺炒好每一锅底料。坚持手工炒料、当日食材，只为一锅有记忆的重庆味道。",
    timeline: [
      { year: "2004", title: "拜师学艺", desc: "在重庆解放碑老火锅店当学徒，每天凌晨4点起床熬制底料，一学就是3年。" },
      { year: "2007", title: "第一家店", desc: "在社区巷子里开了第一家「川味记」，只有6张桌子，靠街坊口口相传。" },
      { year: "2012", title: "秘制底料", desc: "经过上千次调试，独创「三炒三焖」牛油底料工艺，成为回头客的最爱。" },
      { year: "2018", title: "扩大店面", desc: "搬到现址，扩大至200平米，增加了户外火锅区和家庭大桌。" },
      { year: "2024", title: "20年坚守", desc: "20年只做一件事：用传统手艺，煮一锅有温度、有回忆的重庆火锅。" },
    ],
  },
  dishes: [
    { id: 1, name: "招牌牛油红锅", tag: "必点锅底", price: "¥68", desc: "重庆传统牛油锅底，三炒三焖工艺，香辣浓郁，回味悠长。精选郫县豆瓣、汉源花椒、贵州辣椒。", image: "/images/dish-hotpot.jpg", badges: ["传统炒料", "牛油醇厚"] },
    { id: 2, name: "鲜切黄牛肉", tag: "人气王", price: "¥58", desc: "每日新鲜黄牛肉，师傅现场手工切片，入锅即熟，鲜嫩不柴。", image: "/images/dish-beef.jpg", badges: ["现切现卖", "鲜嫩多汁"] },
    { id: 3, name: "手工虾滑", tag: "招牌必点", price: "¥48", desc: "每天手工摔打制作，纯虾肉不加淀粉，Q弹鲜甜，入口即化。", image: "/images/dish-shrimp.jpg", badges: ["手工制作", "Q弹爽滑"] },
    { id: 4, name: "特色毛肚", tag: "涮品之王", price: "¥38", desc: "精选水牛毛肚，叶片厚实，七上八下15秒，脆嫩爽口。", image: "/images/dish-tripe.jpg", badges: ["七上八下", "脆嫩鲜香"] },
    { id: 5, name: "秘制酥肉", tag: "经典小吃", price: "¥28", desc: "五花肉裹上秘制面糊，外酥里嫩，蘸上辣椒面一绝。", image: "/images/dish-pork.jpg", badges: ["外酥里嫩", "现炸现吃"] },
    { id: 6, name: "红糖糍粑", tag: "甜蜜收尾", price: "¥18", desc: "手工糯米糍粑，炸至金黄，淋上浓稠红糖浆和黄豆粉。", image: "/images/dish-cake.jpg", badges: ["手工制作", "甜而不腻"] },
  ],
  environment: [
    { id: 1, title: "老重庆风格", desc: "青砖灰瓦、红灯笼、老木桌，一秒穿越回老重庆的市井烟火。", image: "/images/env-interior.jpg" },
    { id: 2, title: "朋友聚餐", desc: "三五好友围坐红锅，觥筹交错，吃到深夜不想回家。", image: "/images/env-friends.jpg" },
    { id: 3, title: "明档操作间", desc: "开放式厨房，师傅现场切肉、炒料，看得见的新鲜。", image: "/images/env-kitchen.jpg" },
    { id: 4, title: "户外火锅区", desc: "夏夜坐在户外，空调风扇配红锅，市井烟火最是惬意。", image: "/images/env-outdoor.jpg" },
  ],
  reviews: [
    { id: 1, name: "小王同学", rating: 5, date: "2025年7月", text: "吃了五年了，牛油锅底还是那个味儿！每次朋友来重庆都带他们来这里，毛肚和牛肉是必点。老板人特别好，每次都送红糖糍粑。", tags: ["回头客", "牛油锅底"] },
    { id: 2, name: "美食猎人Lily", rating: 5, date: "2025年6月", text: "被朋友安利来的，虾滑绝了！Q弹到不像话。环境很有老重庆的感觉，拍照也好看。三个人吃到撑才300多。", tags: ["首次到店", "虾滑推荐"] },
    { id: 3, name: "深夜干饭人", rating: 5, date: "2025年7月", text: "凌晨一点还在营业真的太感动了。加班完过来吃一顿，整个人都活过来了。酥肉蘸辣椒面，配冰啤酒，打工人的快乐就这么简单。", tags: ["深夜探店", "加班慰藉"] },
    { id: 4, name: "重庆小霸王", rating: 5, date: "2025年5月", text: "重庆最好吃的社区火锅！每个周末都和兄弟伙来，黄牛肉必点三盘起步。环境不豪华但就是这种烟火气最舒服。", tags: ["每周必来", "朋友聚会"] },
  ],
  location: {
    address: "重庆市渝北区龙溪街道社区美食街18号",
    lat: 29.5876, lng: 106.5208,
    businessHours: "11:00 - 次日02:00",
    nearestStation: "轻轨3号线嘉州路站 步行8分钟",
    navigationTitle: "川味记老火锅",
  },
  theme: {
    primary: "#dc2626", primaryLight: "#ef4444", primaryDark: "#991b1b",
    bgDark: "#0a0a0a", bgCard: "#141414", bgElevated: "#1a1a1a",
    textPrimary: "#f5f5f5", textSecondary: "#a3a3a3", textMuted: "#737373",
    accent: "#f59e0b",
  },
};
export type ShopConfig = typeof shopConfig;
