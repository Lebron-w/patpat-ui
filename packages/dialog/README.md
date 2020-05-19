# patDialogs 弹出框

### 组件调用

```js
import Vue from 'vue';
import patpatUi from 'patpat-ui';
import 'patpat-ui/lib/patpat-ui.css'

// 全局注册
Vue.use(patpatUi);
```
引入 patpatUi 组件后，会自动在 Vue 的 prototype 上挂载 $patDialogs 方法，在所有组件内部都可以直接调用此方法

## 代码演示

### 消息提示

用于提示一些消息，只包含一个确认按钮

```javascript
this.$patDialogs({
  type: 'delete',
  title: '这里是标题',
  message: '代码是写出来给人看的，附带能在机器上运行',
  cancelButtonText: '关闭'
}).catch(() => {
  // on cancel 点击关闭回调事件
});

this.$patDialogs({
  message: '代码是写出来给人看的，附带能在机器上运行',
  cancelButtonText: '关闭'
}).catch(() => {
  // on cancel 点击关闭回调事件
});
```

### 消息确认

用于确认消息，包含取消和确认按钮

```javascript
this.$patDialogs({
  type: 'delete',
  title: '这里是标题',
  message: '代码是写出来给人看的，附带能在机器上运行',
  cancelButtonText: '关闭',
  confirmButtonText: '确认'
}).then(() => {
  // on confirm 点击确认回调事件
}).catch(() => {
  // on cancel 点击关闭回调事件
});
```


## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| type | 弹框类型: <br /> `delete` 删除 <br /> `success` 成功 <br /> `error` 错误 <br /> `warning` 警告 | `string` | - | - |
| title | 标题 | `string` | - | - |
| message | 文本内容 | `string` | - | - |
| cancelButtonText | 取消按钮文案 | `string` | `关闭` | - |
| confirmButtonText | 确认按钮文案 | `string` | `确认` | - 

### Events

| 事件 | 说明 | 回调参数 |
|------|------|------|
| confirm | 点击确认按钮时触发 | - |
| cancel | 点击取消按钮时触发 | - |