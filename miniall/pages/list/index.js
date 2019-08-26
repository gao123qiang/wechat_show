// pages/list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product_list_show: [
      {
        image: "/image/chanpin01.jpg",
        product_name: "高钙羊奶粉",
        price: "￥380/桶",
        detail_text: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;山西小二放羊乳业有限公司致力于羊乳产业开发、羊奶粉专卖店推广与建设、羊乳连锁机构经营管理、羊乳文化传播及产业相关联的牧草种植、种羊养殖等全产业链业务在内的综合性公司。旗下拥有小二放羊羊奶专营的全国各省级营销公司、专注于种羊养殖的山西万里乡农牧科技开发有限公司、专业于牧草种殖与畜牧业务开发的甘肃万物春绿色农牧有限公司等多家子公司"   
      },
      {
        image: "/image/chanpin02.jpg",
        product_name: "低钙羊奶粉",
        price: "￥380/桶",
        detail_text: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;山西小二放羊乳业有限公司致力于羊乳产业开发、羊奶粉专卖店推广与建设、羊乳连锁机构经营管理、羊乳文化传播及产业相关联的牧草种植、种羊养殖等全产业链业务在内的综合性公司。旗下拥有小二放羊羊奶专营的全国各省级营销公司、专注于种羊养殖的山西万里乡农牧科技开发有限公司、专业于牧草种殖与畜牧业务开发的甘肃万物春绿色农牧有限公司等多家子公司"
      },
      {
        image: "/image/chanpin03.jpg",
        product_name: "好喝羊奶粉",
        price: "￥380/桶",
        detail_text: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;山西小二放羊乳业有限公司致力于羊乳产业开发、羊奶粉专卖店推广与建设、羊乳连锁机构经营管理、羊乳文化传播及产业相关联的牧草种植、种羊养殖等全产业链业务在内的综合性公司。旗下拥有小二放羊羊奶专营的全国各省级营销公司、专注于种羊养殖的山西万里乡农牧科技开发有限公司、专业于牧草种殖与畜牧业务开发的甘肃万物春绿色农牧有限公司等多家子公司"
      },
      {
        image: "/image/chanpin04.jpg",
        product_name: "好吃羊奶粉",
        price: "￥380/桶",
        detail_text: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;山西小二放羊乳业有限公司致力于羊乳产业开发、羊奶粉专卖店推广与建设、羊乳连锁机构经营管理、羊乳文化传播及产业相关联的牧草种植、种羊养殖等全产业链业务在内的综合性公司。旗下拥有小二放羊羊奶专营的全国各省级营销公司、专注于种羊养殖的山西万里乡农牧科技开发有限公司、专业于牧草种殖与畜牧业务开发的甘肃万物春绿色农牧有限公司等多家子公司"
      },
      {
        image: "/image/chanpin05.jpg",
        product_name: "香甜羊奶粉",
        price: "￥380/桶",
        detail_text: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;山西小二放羊乳业有限公司致力于羊乳产业开发、羊奶粉专卖店推广与建设、羊乳连锁机构经营管理、羊乳文化传播及产业相关联的牧草种植、种羊养殖等全产业链业务在内的综合性公司。旗下拥有小二放羊羊奶专营的全国各省级营销公司、专注于种羊养殖的山西万里乡农牧科技开发有限公司、专业于牧草种殖与畜牧业务开发的甘肃万物春绿色农牧有限公司等多家子公司"
      },
      {
        image: "/image/chanpin06.jpg",
        product_name: "可口羊奶粉",
        price: "￥380/桶",
        detail_text: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;山西小二放羊乳业有限公司致力于羊乳产业开发、羊奶粉专卖店推广与建设、羊乳连锁机构经营管理、羊乳文化传播及产业相关联的牧草种植、种羊养殖等全产业链业务在内的综合性公司。旗下拥有小二放羊羊奶专营的全国各省级营销公司、专注于种羊养殖的山西万里乡农牧科技开发有限公司、专业于牧草种殖与畜牧业务开发的甘肃万物春绿色农牧有限公司等多家子公司"
      }
    ]
  },
  toCase: function(res){
    // console.log(res);
    var index = res.target.dataset.index;
    wx.setStorageSync('detail_text', this.data.product_list_show[index].detail_text);
    wx.setStorageSync('detail_image', this.data.product_list_show[index].image);
    wx:wx.navigateTo({
      url: '/pages/detail/index?name=' + this.data.product_list_show[index].product_name,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    setTimeout(function(){
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
    },2000);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
      return {
        title: '小二放羊，您放心的选择'
      }
  },

  view_details: function () {
    
  }
})