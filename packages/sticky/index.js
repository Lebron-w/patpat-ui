// 导入组件
import Sticky from './src/Sticky.vue'

// 为组件提供 install 安装方法，供按需引入
Sticky.install = function(Vue) {
  Vue.component(Sticky.name, Sticky)
}

// 默认导出组件
export default Sticky
