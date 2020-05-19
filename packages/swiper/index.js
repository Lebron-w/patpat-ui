// 导入组件
import Swiper from './src/Swiper.vue'

// 为组件提供 install 安装方法，供按需引入
Swiper.install = function(Vue) {
  Vue.component(Swiper.name, Swiper)
}

// 默认导出组件
export default Swiper
