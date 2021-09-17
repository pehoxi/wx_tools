// pages/music/music.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    // 播放按钮数据
    palyBoolen : true,
    palyBtnImg :"../img/播放1.png",
    musicId :33894312,
    musicName :"海阔天空",
    musicUrl :"",

   
    phone : "",
    loginZt : "",


    display : "none",//登录显示
    mus_display : "block", //歌单显示
    dis_bot :"block", //音乐和播放切换显示
    video_dis :"none",//播放显示

    picUrl : ["https://p2.music.126.net/vu3Cdo_dPq8HKOPI6_YXfA==/74766790689775.jpg",
    "https://p2.music.126.net/lsMlFshdJ96aTGFFgayh4Q==/109951163611523278.jpg",
    "https://p2.music.126.net/bsgJVzkmAwVs1emr4b8hRw==/109951163250111834.jpg",
    "https://p2.music.126.net/lsMlFshdJ96aTGFFgayh4Q==/109951163611523278.jpg"
  ],
     musicName : ["屋顶","布拉格广场","刀马旦","骑士精神"],
     zjName : ["有点野","看我七十二变","Promise","看我七十二变"],
     hh :  {
       img : ['https://p2.music.126.net/n_7R-J0uWaBPBkm7aVsA_Q==/122045790701114.jpg',
      "https://p1.music.126.net/nvUSfLkvpV07rhMefg2AXQ==/109951163823798440.jpg",
      "https://p2.music.126.net/qVUJ9aDeRop5pj3QDixIsQ==/109951163353510177.jpg",
      "https://p2.music.126.net/pHimE2Hh4uoAz0Dqw9wSbQ==/109951163608375123.jpg"
      ],
       gdjs : ['电视剧歌曲大全','离家最近的路','未来②','静静的听'],
     },
     music_img : "../img/音乐1.png",
     music_video : "../img/视频.png"
  },
 

  start :function(res){
    console.log(res);
    
    var that = this;
    that.setData({
      musicId :33894313,
      display : "none",//登录显示
      mus_display : "none", //歌单显示
      dis_bot :"block", //音乐和播放切换显示
      video_dis :"block",//播放显示
   })
  },


  musicPlay:function(){
       var that = this;
       var name = that.data.musicName
       that.getMusicIdByname(name);
       var playB = that.data.palyBoolen;
       if(playB){
                that.setData({
                 palyBoolen : false,
                  palyBtnImg :"../img/播放.png"
                })
                
                console.log(playB);
                that.getMusicIdByname(name);
                that.listenerButtonPlay();     
       }else{
                that.setData({
                  palyBoolen : true,
                  palyBtnImg :"../img/播放1.png"
          
                })
                console.log(playB);
                that.listenerButtonPause();
                   }


  },


// 更新input中的输入值放到musicNama中
    inp_play_music:function(e){
         var that = this;
         that.setData({
          musicName : e.detail.value
         })
         console.log(e.detail.value);
         console.log(that.data.musicName);
    },


  // 音乐和视频切换
   mvl1 : function(){
     var that = this;
    that.setData({
      music_img : "../img/音乐(1).png",
      music_video : "../img/视频1.png",
      mus_display :"none",
      video_dis :"block",//播放显示
    })
   },
   mvl2 : function(){
    var that = this;
   that.setData({
     music_img : "../img/音乐1.png",
     music_video : "../img/视频.png",
     mus_display :"block",
     video_dis :"none",//播放显示
   })
  },

  // 登录判断
  trans :function(res){
     console.log(res);
     var that = this;
     var iphone = res.detail.value.iphone;
     var psd = res.detail.value.password;
     wx.request({
      url: 'http://localhost:3000/login/cellphone',
      data:{
        phone : iphone,
        password : psd
      },
      success :function(res){
            console.log(res);
            if(res.data.loginType == 1){
              that.setData({
                loginZt : "登录成功,欢迎您",
                display : "none",
                mus_display : "block", //歌单显示
                dis_bot :"block", //音乐和播放切换显示
                video_dis :"none",//播放显示
              })
            }
            else{
              that.setData({
                loginZt : "登录失败,因为"+res.data.message
              })
            }          
          console.log(that.data.loginZt);         
      }
    })

  },






// 播放
  listenerButtonPlay:function(){
    var that = this;
    console.log("我的id是"+that.data.musicId);
    console.log("音乐地址是"+that.data.musicUrl,);
    var url = that.data.musicUrl;
    var title = that.data.musicName
    wx.playBackgroundAudio({
     dataUrl:url ,
     title:title,
     //图片地址地址
    })
    },
//暂停
listenerButtonPause:function(){
  wx.pauseBackgroundAudio({
  
  });
  console.log('暂停播放')
  },


  // 停止播放
  listenerButtonStop:function(){
    wx.stopBackgroundAudio({
    
    })
    console.log('停止播放')
    },






  //  通过歌名获取id

  getMusicIdByname : function(name){
    var that = this;
    console.log("我的名字是"+name);
    wx.request({
      url: 'http://localhost:3000/search?keywords='+name,
      // data: {
      // },
      success :function(res){ 
        var songs = res.data.result.songs[0];
       that.setData({
        musicId : songs.id,
        musicName :songs.name
       })  
       console.log(res);
       console.log("已经获取了id"+that.data.musicId);       
       that.getUrlById();
      }
      
    })  
    
  },
    getUrlById :function(e){
      
      var that = this;
      var id = that.data.musicId;
      wx.request({
       url: 'http://localhost:3000/song/url?id='+id,
       success :function(res){ 
        that.setData({   
              musicUrl : res.data.data[0].url,
        })
        console.log(res);
        console.log("已经获取歌曲链接");
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