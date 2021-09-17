// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
      dz :"../img/点赞.png"
  },
  dz : function(){
     var that = this ;
     that.setData({
       dz : "../img/点赞1.png"
     })
  },
  goBd(){
    wx.navigateTo({
      url: '../movie/movie',
    })
  },
  goTian(){
     wx.navigateTo({
       url: '../tianQi/tianQi',
     })
   },
   goKd(){
    wx.navigateTo({
      url: '../kd/kd',
    })
  },
  goMusic(){
    wx.navigateTo({
      url: '../music/music',
    })
  },
  goJsq(){
    wx.navigateTo({
      url: '../jsq/jsq',
    })
  },
  goLj(){
    wx.navigateTo({
      url: '../lj/lj',
    })
  },
  goFy(){
    wx.navigateTo({
      url: '../fy/fy',
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