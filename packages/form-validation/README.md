# Input 输入框验证

### 组件调用

```js
import Vue from 'vue';
import patpatUi from 'patpat-ui';
import 'patpat-ui/lib/patpat-ui.css'

// 全局注册
Vue.use(patpatUi);
```
引入 patpatUi 组件后，会自动在 Vue 的 prototype 上挂载 $patValidate 方法，在所有组件内部都可以直接调用此方法

## 代码演示

### 基础用法

`dome` 结构需和 `data` 顺序一致
```html

<li>
  <strong>电话 : </strong>
  <input type="tel" v-model="validatorData.tel.text" />
  <p v-if="validatorData.tel.error">{{validatorData.tel.error}}</p>
</li>
<li>
  <strong>邮箱 : </strong>
  <input type="email" v-model="validatorData.email.text" />
  <p v-if="validatorData.email.error">{{validatorData.email.error}}</p>
</li>
<li>
  <strong>密码 : </strong>
  <input type="password" v-model="validatorData.password.text" />
  <p v-if="validatorData.password.error">{{validatorData.password.error}}</p>
</li>
```


```javascript
<script>
export default {
  data () {
    return {
      validatorData: {
        clostTips: 3000,
        tel: {
          text: '',
          required: true,
          number: true
        },
        email: {
          text: '',
          required: true,
        },
        password: {
          text: '',
          required: true,
          length: 6
        }
      }
    }
  },
  methods: {
    formSubmit () {
      this.$patValidate(this.validatorData).then((success) => {
        if (success) {
          alert('验证成功')
        } else {
          alert('验证失败')
        }
      })
    }
  }
}
</script>
```

## API

### Props


| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| clostTips | 是否关闭提示(这是用于全局验证，所有直接放根对象里面) | false | - | - |
| text | Input内容 | - | - | - |
| required | 是否必填 | false | - | - |
| length | 输入长度 | - | - | - |
| number | 是否纯数字 | false | - | - |
| regex | 自定义正则验证 | /^[0-9]+.?[0-9]*/ | - | - 

### Events

| 事件 | 说明 | 回调参数 |
|------|------|------|
| .then() | 验证成功 | - |
| .catch() | 验证失败 | - |