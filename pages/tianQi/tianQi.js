Page({
  data: {
    region : ['四川省','成都','大邑县'],
    date : null,
    list : {},
    autoplay : 'false',
    interval : '2000',
    duration : '500'
  },
  getCityWeather(){
   //封装报错，暂时不封装
   var that = this;
   var city1 =  that.data.region[1];
   wx.request({
    url: 'https://api.vvhan.com/api/weather',
    data :{city :city1,type : 'week'},
    success : function(res){
      var d = new Date(); 
      that.setData({
         list : res.data.data,
         forecast : res.data.data.forecast,
         date : d.toLocaleString()
      })
      console.log(that.data.forecast);
    }
  })
  
  
  },
  //picker所绑定的事件，
  //作用 改变当前显示的地址和相关连的数据
  bindRegionChange : function(res){
       console.log(res);
       this.setData({
         region : res.detail.value
       }) 
    this.getCityWeather();

  },
  onLoad: function (options) {
    //保存外层的this为that
    this.getCityWeather();
    


  },
})