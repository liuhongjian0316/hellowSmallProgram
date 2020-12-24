//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    inputShowed: false,
    inputVal: "",
    index: 0,
    list: [{
      "text": "首页", 
      "iconPath": "../../images/tabbar_icon_chat_default.png",
      "selectedIconPath": "../../images/tabbar_icon_chat_active.png",
      dot: true
    },{
      "text": "组件",
      "iconPath": "../../images/tabbar_icon_setting_default.png",
      "selectedIconPath": "../../images/tabbar_icon_setting_active.png",
      badge: 'New'  
     },{
      "text": "消息",
      "iconPath": "../../images/tabbar_icon_setting_default.png",
      "selectedIconPath": "../../images/tabbar_icon_setting_active.png",
      badge: 'New'  
     },{
      "text": "我的",
      "iconPath": "../../images/tabbar_icon_setting_default.png",
      "selectedIconPath": "../../images/tabbar_icon_setting_active.png",
      badge: 'New'  
     }],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },
  tabChange(e) {
    this.setData({
      index: e.detail.index
    })
  }
})
