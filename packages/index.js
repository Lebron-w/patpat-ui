import Button from './button'
import NavBar from './nav-bar'
import Popup from './popup'
import Icon from './icon'
import Overlay from './overlay'
import Swiper from './swiper'
import Sticky from './sticky'
import SwiperItem from './swiper-item'
import Dialog from './dialog'
import ImgLazyLoad from './img-lazy-load'
import FormValidation from './form-validation'
import Toast from './toast'
import List from './list'
import Indicator from './indicator'
import Loading from './loading'
import SkuSelect from './sku-select'

// 存储组件列表
const components = [
  Button,
  NavBar,
  Icon,
  Popup,
  Overlay,
  Swiper,
  Sticky,
  SwiperItem,
  Dialog,
  ImgLazyLoad,
  FormValidation,
  Toast,
  List,
  Indicator,
  Loading,
  SkuSelect
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function(Vue) {
  // 判断是否可以安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  Button,
  NavBar,
  Icon,
  Popup,
  Overlay,
  Swiper,
  SwiperItem,
  Sticky,
  Dialog,
  ImgLazyLoad,
  FormValidation,
  Toast,
  Indicator,
  Loading,
  SkuSelect
}
