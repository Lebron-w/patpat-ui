// 导入组件
import Vue from 'vue'

// 特点的验证规格
let regex = {
  email: /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,
  number: /^[0-9]+.?[0-9]*/
}


// 验证方法
function verification(val) {
  for (let v in val) {
    
    // 关闭提示
    if (val['clostTips'] > 0) {
      setTimeout(() => {
        if (v !== 'clostTips') {
          Vue.set(val[v], 'error', false)
        }
      }, val['clostTips'])
    }
    

    // 必填
    if (val[v].required && val[v].text === '') {
      let tip = val[v].tip || 'Required'
      Vue.set(val[v], 'error', tip)
      return false
    }

    // 限制长度
    if (val[v].length && val[v].text.length < val[v].length) {
      let tip = val[v].tip || '请输出长度大于' + val[v].length
      Vue.set(val[v], 'error', tip)
      return false
    }

    // 邮箱
    if (v === 'email' && !regex['email'].test(val[v].text)) {
      let tip = val[v].tip || '请输入正确的邮箱地址'
      Vue.set(val[v], 'error', tip)
      return false
    }

    // 纯数字
    if (val[v].number && !regex['number'].test(val[v].text)) {
      let tip = val[v].tip || '请输出纯数字'
      Vue.set(val[v], 'error', tip)
      return false
    }

    // 自定义 根据传过来的正则
    if (val[v].regex && !val[v].regex.test(val[v].text)) {
      let tip = val[v].tip || '请输出正确的'
      Vue.set(val[v], 'error', tip)
      return false
    }

    if (v !== 'clostTips') {
      Vue.set(val[v], 'error', false)
    }
  }
  return true
}

export const validates = (val) => {
  return new Promise((resolve) => {
    resolve(verification(val))
  })
}

Vue.prototype.$patValidate = validates

// 默认导出组件
export default validates
