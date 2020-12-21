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
    this.setData({
      search: this.search.bind(this)
   })
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
    search: function (value) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve([{text: '搜索结果', value: 1}, {text: '搜索结果2', value: 2}])
          }, 200)
      })
    },
    selectResult: function (e) {
        console.log('select result', e.detail)
    },
    suo: function (e) {
      wx.navigateTo({
       url: '../../test/test',
      })
    },
  }
})
