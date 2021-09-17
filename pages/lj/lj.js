// pages/lj/lj.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // lj为input中的内容
     lj :'',
    //view中display的数据
     bottomHidden1:"none",


     ljjsHideen : ["none",
                    "none",
                    "none",
                    "none"]
   
  },


  // 封装one函数
  // 作用：判断是否隐藏和获取数据
  one :function(){
    var that = this;
    if(that.data.lj !==''){
      that.setData({
        bottomHidden1:"block",
      })
    }else{
      that.setData({
        bottomHidden1:"none",
      })
    }

    //获取对应数据
    wx.request({
      url: 'https://api.vvhan.com/api/la.ji',
      data :{lj : that.data.lj},
      success : function(res){
        that.setData({
          name : res.data.name,
          sort : res.data.sort
        })
        console.log(res);
      }
    })
  },



  // 获取input的值，并且将其传给data
  // 判断Input是否有内容，有就显示对应view，没有就隐藏
  lj :function(e){
    // console.log(e);
    var that = this;
    that.setData({
      lj : e.detail.value
    })
    that.one();
   },




   dj:function(e){
      var that = this;
      var lj1 = e.currentTarget.id;
      console.log(e);
      that.setData({
        lj : lj1
      })
      that.one();
   },

   //选项卡点击事件
   ljjs_dj:function(e){
    console.log(e);
    var id = e.currentTarget.id;
    var that = this;
    if(id == 0)
    that.setData({
      ljjsHideen : ["block",
                    "none",
                    "none",
                    "none"]
    }) 
    else  if(id == 1)
    that.setData({
      ljjsHideen : ["none",
                    "block",
                    "none",
                    "none"]
    })
    else  if(id == 2)
    that.setData({
      ljjsHideen : ["none",
                    "none",
                    "block",
                    "none"]
    })

    else  if(id == 3)
    that.setData({
      ljjsHideen : ["none",
                    "none",
                    "none",
                    "block"]
    })

   },

   win:function(){
     var that = this;
     that.setData({
      ljjsHideen : ["none",
                    "none",
                    "none",
                    "none"]
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