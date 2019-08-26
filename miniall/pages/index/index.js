//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    index_index_scroll_tmp1: {
      imgUrls: [
        '/image/01.jpg',
        '/image/02.jpg',
        '/image/03.jpg'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 1200
    },
    index_index_navs_tmp1: {
      navs: [
        {
          image: "/image/navs1.jpg",
          text: "初乳配方"
        },
        {
          image: "/image/navs2.jpg",
          text: "高钙配方"
        },
        {
          image: "/image/navs3.jpg",
          text: "全营养"
        },
        {
          image: "/image/navs4.jpg",
          text: "高钙羊奶贝"
        }
      ]
    }
    
  },
  onLoad: function () {

  },
  onShareAppMessage: function () {
    return {
      title: '小二放羊，您放心的选择'
    }
  }
})
