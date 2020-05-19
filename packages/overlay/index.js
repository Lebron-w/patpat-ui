// 导入组件
import Overlay from './src/Overlay.vue'

// 为组件提供 install 安装方法，供按需引入
Overlay.install = function(Vue) {
  Vue.component(Overlay.name, Overlay)
}

// 默认导出组件
export default Overlay
