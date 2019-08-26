// pages/detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail_page_text: {
      detail_image: null,
      detail_text: null
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    wx.setNavigationBarTitle({
      title: options.name,
    })
    var detail_text = wx.getStorageSync('detail_text');
    var detail_image = wx.getStorageSync('detail_image');
    if (detail_image) {
      this.setData({
        'detail_page_text.detail_image': detail_image
      }) 
    }
    if(detail_text){
      this.setData({
        'detail_page_text.detail_text': detail_text
      })
    }
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

  }
})