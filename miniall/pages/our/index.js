// pages/our/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '/image/shop.jpg',
    call_image: '/image/dianhua.jpg',
    ditu_image: '/image/ditu.png'
  },

  calling: function() {
    wx.makePhoneCall({
      phoneNumber: '15132069967',
      success: function(){
        wx.showToast({
          title: '拨打电话成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: function(){
        wx.showToast({
          title: '拨打电话失败',
          duration: 2000
        })
      }
    })
  },

  addring: function(){
    wx.getLocation({
      success: function(res) {
        wx.openLocation({
          latitude: 39.8415143,
          longitude: 116.4321115,
          name: '顶秀金颐家园',
          address: '北京市丰台区石榴庄二街1号顶秀金颐家园5号楼'
        })
      },
    })
    // wx.chooseLocation({
    //   success: function(res) {
    //     console.log(res);
    //   },
    // })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  mapCtx: null,
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.mapCtx = wx.createMapContext('myMap', this)
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    setTimeout(function () {
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
    }, 2000);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '小二放羊，您放心的选择'
    }
  }
  
})