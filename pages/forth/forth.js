// pages/forth/forth.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options, 45);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 三秒之后重定向到第五个页面
    setTimeout(() => {
      wx.redirectTo({
        url: '/pages/fifth/fifth?c=3&d=5',
      })
    }, 3000)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 五秒之后返回到首页
    setTimeout(function() {
      wx.navigateBack()
    }, 5000)
  },
  /**
   * 不同跳转方式对历史纪录的影响
   * navigator跳转 当前页面进去后台 目标页面加载 进入前台 渲染 
   * redirect 当前页面卸载 目标页面加载 进入前台 渲染
   * navigateBack当前页面卸载 目标页面进入前台 
   * tabBar页面一旦加载就不会卸载 除非关闭程序 
   * 微信指令 if指令表示 是否显示 值是一个布尔值 是从dom数删除 hidden只是隐藏
   * wx:for="" 表示循环 index表示索引 item代表成员  自定义指令 wx:for-index="" 或wx:for-item="" 因为多层循环的时候 外层只能使用外层的索引和成员
   */
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