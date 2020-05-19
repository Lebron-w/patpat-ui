# Indicator 加载提示框

### 组件调用

```js
import Vue from 'vue';
import patpatUi from 'patpat-ui';
import 'patpat-ui/lib/patpat-ui.css'

// 全局注册
Vue.use(patpatUi);
```
引入 patpatUi 组件后，会自动在 Vue 的 prototype 上挂载 Indicator 对象函数，在所有组件内部都可以直接调用此方法

## 代码演示

### 消息提示

当需要显示加载提示框时，调用 open 方法
```javascript
this.Indicator.open()

```
在加载图标下方显示文本
```javascript
this.Indicator.open('loading...)

```

调用 close 方法将其关闭
```javascript
this.Indicator.close()

```
