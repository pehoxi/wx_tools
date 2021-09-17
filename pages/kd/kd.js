// pages/kd/kd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  dh :function(e){
   console.log(e);
   var that = this;
   that.setData({
     dh : e.detail.value
   })
   console.log(e.detail.value);
   
  },
  getKd :function(){
    var that = this;
    var dh  = this.data.dh;
    console.log(dh);
    
    wx.request({
      url: 'https://api.vvhan.com/api/kuaidi',
      data :{hao : dh},
      success : function(res){
        var d = new Date(); 
        that.setData({
          company : res.data.company,
          status : res.data.status,
          info : res.data.info,
          allData : res.data
        })
        console.log(res);
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