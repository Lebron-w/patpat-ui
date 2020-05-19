# Toast 提示框

### 组件调用

```js
import Vue from 'vue';
import patpatUi from 'patpat-ui';
import 'patpat-ui/lib/patpat-ui.css'

// 全局注册
Vue.use(patpatUi);
```
引入 patpatUi 组件后，会自动在 Vue 的 prototype 上挂载 Toast 方法，在所有组件内部都可以直接调用此方法

## 代码演示

### 消息提示

用于提示一些消息，只包含一个确认按钮

```javascript
this.Toast({
  type: 'icon-success',
  message: '代码是写出来给人看的，附带能在机器上运行',
  duration: 3000
})

```


## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| type | 弹框类型: <br />`icon-success` 成功 <br /> `icon-failure` 失败 | `string` | - | - |
| message | 文本内容 | `string` | - | - |
| duration | 弹窗持续时间（不传参数进去默认2秒自动关闭） | `Number` | `2000（毫秒）` | - |