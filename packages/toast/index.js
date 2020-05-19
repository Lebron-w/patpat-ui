import Vue from 'vue'
// 导入组件
import Dialog from '../dialog/src/Dialog.vue'

// 构造组件
const DialogDome = Vue.extend(Dialog)

// 挂载组件，为输出
let DialogDomePage = new DialogDome().$mount()

export const Toast = (content) => {
  DialogDomePage.type = content.type
  DialogDomePage.title = content.title
  DialogDomePage.message = content.message
  document.body.appendChild(DialogDomePage.$el)
  
  setTimeout(() => {
    document.body.removeChild(DialogDomePage.$el)
  }, content.duration || 2000)
}

Vue.prototype.Toast = Toast

// 默认导出组件
export default Toast
