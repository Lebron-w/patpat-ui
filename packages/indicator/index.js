import Vue from 'vue'
// 导入组件
import IndicatorVue from './src/Indicator.vue'

const IndicatorDome = Vue.extend(IndicatorVue)

let IndicatorDomePage = new IndicatorDome().$mount()
const Indicator = {
  open: function (text) {
    IndicatorDomePage.text = text
    document.body.appendChild(IndicatorDomePage.$el)
  },
  close: function () {
    document.body.removeChild(IndicatorDomePage.$el)
  }
}

Vue.prototype.Indicator = Indicator

// 默认导出组件
export default Indicator.open
