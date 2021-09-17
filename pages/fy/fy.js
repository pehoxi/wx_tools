// pages/fy/fy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      result : ""
  },
  trans :function(options){
    var that = this;
    console.log(options);
    wx.request({
      url: 'https://api.jisuapi.com/translate/translate?appkey=322fe5a0946cd77a',
      data:{
        type : options.detail.value.type,
        from : options.detail.value.from,
        to : options.detail.value.to,
        text : options.detail.value.text
      },
      success :function(res){
            console.log(res);
            that.setData({
              result :res.data.result.result
            })
      }
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