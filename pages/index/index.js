Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 数据驱动
    title: "人人信",
    arr: 'abcdefghijklmnopqrst'.split(''),
    arr1: [
      ['a', 'b', 'c', 'd'],
      ['e', 'f', 'g']
    ]
  },
  /**
   * 绑定事件 分为冒泡事件和不冒泡事件 bind开头的是冒泡事件 catch开头的是不冒泡事件
   * 事件有： touchstart touchmove touchend tap longtap 
   * bindtap 绑定了一个冒泡的点击事件 catchtap绑定了一个不冒泡事件
   */
  
  /**
   * 生命周期函数--监听页面加载
   */
  click: () => {
    console.log("傻逼 让你点我 哈哈哈");
  },
  parent: function() {
    console.log("我是父组件");
  },
  child: function() {
    console.log("我是子组件");
  },
  onLoad: function (options) {
    console.log(this, 567); // this就是page函数接受到的对象
    // 三秒之后改变data中的内容
    setTimeout(function() {
      // 通过this.setData()修改数据 直接点语法修改 会数据丢失
      this.setData({
        title: "哈哈哈"
      })
    }.bind(this), 3000)
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
    // 三秒之后跳转到第四个页面
    // setTimeout(function() {
    //   wx.navigateTo({
    //     url: '/pages/forth/forth'
    //   })
    // }, 3000)
    // 三秒之后跳转到tabBar页面
    // setTimeout(() => {
    //   wx.switchTab({
    //     url: '/pages/detail/detail',
    //   })
    // }, 3000)
    // 页面的生命周期函数 
    /**
     * onload页面加载的时候执行 注意tabBar页面加载之后就不会卸载 执行顺序是
     * onLoad onShow onReady 再次进入执行onShow onHide
     * */ 
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    // 页面之间传递数据的方式 普通页面可以在url后面携带query然后再onload事件的接受 有一个参数 就是携带的参数 格式化后的对象 redirect后面也可以传递参数 tabBar页面不可以 这样传递数据
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