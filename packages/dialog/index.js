import Vue from 'vue'
// 导入组件
import Dialog from './src/Dialog.vue'

// 定义一个变量储存回调方法
let currentMsg = null

// 构造组件
const DialogDome = Vue.extend(Dialog)

// 挂载组件，为输出
let DialogDomePage = new DialogDome().$mount()


export const Dialogs = function (content) {

  if (content === 'close' || content === 'confirm') {
    // 点击回调 移除组件
    document.body.removeChild(DialogDomePage.$el)

    // 回调方法
    defaultCallBack(content)
  } else {
    // 传入数据
    DialogDomePage.type = content.type
    DialogDomePage.title = content.title
    DialogDomePage.message = content.message
    DialogDomePage.confirmButtonText = content.confirmButtonText
    DialogDomePage.cancelButtonText = content.cancelButtonText

    // 输出到body下
    document.body.appendChild(DialogDomePage.$el)
  }

  // 执行回调方法
  return new Promise((resolve, reject) => {
    currentMsg = { resolve, reject }
  })
}

// 回调
function defaultCallBack(action) {
  if (action === 'confirm') {
    currentMsg.resolve('confirm')
  } else {
    currentMsg.reject('cancel')
  }
}

Dialogs.close = Dialogs

Vue.prototype.$patDialogs = Dialogs

// 默认导出组件
export default Dialogs
