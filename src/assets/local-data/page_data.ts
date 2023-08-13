export const footerLinks = [
  {
    title: "服务条款",
    link: "https://st.music.163.com/official-terms/service",
  },
  {
    title: "隐私政策",
    link: "https://st.music.163.com/official-terms/privacy",
  },
  {
    title: "儿童隐私政策",
    link: "https://st.music.163.com/official-terms/children",
  },
  {
    title: "版权投诉指引",
    link: "https://music.163.com/st/staticdeal/complaints.html",
  },
  {
    title: "意见反馈",
    link: "#",
  },
]

export const footerImages = [
  {
    link: "https://music.163.com/st/userbasic#/auth",
  },
  {
    link: "https://music.163.com/recruit",
  },
  {
    link: "https://music.163.com/web/reward",
  },
  {
    link: "https://music.163.com/uservideo#/plan",
  },
]

// discover中的数据
export const discoverMenu = [
  {
    title: "推荐",
    link: "/discover/recommend",
  },
  {
    title: "排行榜",
    link: "/discover/ranking",
  },
  {
    title: "歌单",
    link: "/discover/songs",
  },
  {
    title: "主播电台",
    link: "/discover/djradio",
  },
  {
    title: "歌手",
    link: "/discover/artist",
  },
  {
    title: "新碟上架",
    link: "/discover/album",
  },
]

// 热门主播
export const hotAnchors = [
  {
    picUrl:
      "https://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg",
    name: "陈立",
    verification: "心理学家、美食家陈立教授",
    url: "/user/home?id=278438485",
  },
  {
    picUrl:
      "https://p1.music.126.net/GgXkjCzeH4rqPCsrkBV1kg==/109951164843970584.jpg",
    name: "刘维-Julius",
    verification: "歌手、播客节目《维维道来》主理人",
    url: "/user/home?id=559210341",
  },
  {
    picUrl:
      "https://p1.music.126.net/3wdk-zlt0t06DZSqFvhkRw==/109951168702119532.jpg",
    name: "莫非定律乐团",
    verification: "男女双人全创作独立乐团",
    url: "/user/home?id=259292486",
  },
  {
    picUrl:
      "https://p1.music.126.net/NHjNoFpLDEZ-3OR9h35z1w==/109951165825466770.jpg",
    name: "碎嘴许美达",
    verification: "脱口秀网络红人",
    url: "/user/home?id=1450418799",
  },
  {
    picUrl:
      "https://p1.music.126.net/CpUdHPNvBvN7kebvL21TTA==/109951163676573083.jpg",
    name: "银临Rachel",
    verification: "",
    url: "/user/home?id=2688170",
  },
]

// 歌手类别
export const artistCategories = [
  {
    title: "推荐",
    area: -1,
    artists: [
      {
        name: "推荐歌手",
        type: 1,
        url: "/discover/artist",
        id: 0,
      },
      {
        name: "入驻歌手",
        type: 2,
        url: "/discover/artist?cat=5001",
        dataPath: "/artist/list?cat=5001",
      },
    ],
  },
  {
    title: "华语",
    area: 7,
    artists: [
      {
        name: "华语男歌手",
        url: "/discover/artist?id=1001",
        type: 1,
      },
      {
        name: "华语女歌手",
        url: "/discover/artist?id=1002",
        type: 2,
      },
      {
        name: "华语组合/乐队",
        url: "/discover/artist?id=1003",
        type: 3,
      },
    ],
  },
  {
    title: "欧美",
    area: 96,
    artists: [
      {
        name: "欧美男歌手",
        url: "/discover/artist?id=2001",
        type: 1,
      },
      {
        name: "欧美女歌手",
        url: "/discover/artist?id=2002",
        type: 2,
      },
      {
        name: "欧美组合乐队",
        url: "/discover/artist?id=2003",
        type: 3,
      },
    ],
  },
  {
    title: "日本",
    area: 8,
    artists: [
      {
        name: "日本男歌手",
        url: "/discover/artist?id=6001",
        type: 1,
      },
      {
        name: "日本女歌手",
        url: "/discover/artist?id=6002",
        type: 2,
      },
      {
        name: "日本组合/乐队",
        url: "/discover/artist?id=6003",
        type: 3,
      },
    ],
  },
  {
    title: "韩国",
    area: 16,
    artists: [
      {
        name: "韩国男歌手",
        url: "/discover/artist?id=7001",
        type: 1,
      },
      {
        name: "韩国女歌手",
        url: "/discover/artist?id=7002",
        type: 2,
      },
      {
        name: "韩国组合/乐队",
        url: "/discover/artist?id=7003",
        type: 3,
      },
    ],
  },
  {
    title: "其他",
    area: 0,
    artists: [
      {
        name: "其他男歌手",
        url: "/discover/artist?id=4001",
        type: 1,
      },
      {
        name: "其他女歌手",
        url: "/discover/artist?id=4002",
        type: 2,
      },
      {
        name: "其他组合乐队",
        url: "/discover/artist?id=4003",
        type: 3,
      },
    ],
  },
]
