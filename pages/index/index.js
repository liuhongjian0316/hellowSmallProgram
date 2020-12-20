//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
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
  tabChange(e) {
    this.setData({
      index: e.detail.index
    })
  }
})
