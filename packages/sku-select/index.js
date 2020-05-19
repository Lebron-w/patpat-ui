// 导入组件
import SkuSelect from './src/SkuSelect.vue'

// 为组件提供 install 安装方法，供按需引入
SkuSelect.install = function(Vue) {
  Vue.component(SkuSelect.name, SkuSelect)
}

// 默认导出组件
export default SkuSelect