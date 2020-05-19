import Loading from './src/Loading.vue'

Loading.install = function(Vue) {
  Vue.component(Loading.name, Loading)
}

// 默认导出组件
export default Loading
