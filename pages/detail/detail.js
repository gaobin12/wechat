// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [
      {
        name: 'div',
        attrs: {
          class: 'a',
          style: "font-size: 30px"
        },
        children: [
          {
            type: 'text',
            text: '你好 世界'
          }
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 绘制canvas
    // 创建上下文
    var ctx = wx.createContext();
    // 定义操作
    ctx.fillRect(0, 0, 100, 100);
    // 放到画布上
    wx.drawCanvas({
      canvasId: 'mycanvas',
      actions: ctx.getActions()
    })
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