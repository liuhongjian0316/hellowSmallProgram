// pages/component/home/home.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name: {
      type: String,
      value: 'Index'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: ""
  },

 /* 组件声明周期函数 */
 lifetimes: {
  attached: function () {

  },
  moved: function () {

  },
  detached: function () {

  },
},

  /**
   * 组件的方法列表
   */
  methods: {
    ToSearchDetails:()=>{
      wx.navigateTo({
        url: '/pages/searchPage/searchPage',
      })
    }
  }
})
