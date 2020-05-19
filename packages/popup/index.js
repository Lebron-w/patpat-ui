// 导入组件
import Popup from './src/Popup.vue'

// 为组件提供 install 安装方法，供按需引入
Popup.install = function(Vue) {
  Vue.component(Popup.name, Popup)
}

// 默认导出组件
export default Popup
