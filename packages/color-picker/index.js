// 导入组件
import PatColorPicker from './src/PatColorPicker.vue'

// 为组件提供 install 安装方法，供按需引入
PatColorPicker.install = function(Vue) {
  Vue.component(PatColorPicker.name, PatColorPicker)
}

// 默认导出组件
export default PatColorPicker
