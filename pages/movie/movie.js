// pages/movie/movie.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hh :{
      imgurl : [
        "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2604552976.jpg",
        "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2561160802.jpg",
        "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2609396514.jpg",
        "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2575357474.jpg",
        "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2607223143.jpg",
        "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2570280248.jpg",
        "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2572235972.jpg",
        "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2556419282.jpg",
        "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2571473945.jpg",
        "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2583544383.jpg",
     ],
      name: [
        "誓血五人组",
        "给我翅膀",
        "黑帮大佬",
         "爱情人偶",
        "忠贞的人",
        "鲁邦三世",
        "大饿之地",
       "火口的人",
        "天空之蓝",
        "野性呼唤",
      ],
      pingfen :[ "9.9",
      "9.8",
      "9.6",
      "9.6",
      "9.3",
      "9.0",
      "8.9",
      "8.7",
      "8.5",
      "8.1", ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
   
     console.log(app.data);
     var that = this;
     that.setData({
       movie : app.data.movie
     })
    console.log(that.data.movie);      
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