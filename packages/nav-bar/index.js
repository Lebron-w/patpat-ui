// 导入组件
import NavBar from './src/NavBar.vue'

// 为组件提供 install 安装方法，供按需引入
NavBar.install = function(Vue) {
  Vue.component(NavBar.name, NavBar)
}

// 默认导出组件
export default NavBar
