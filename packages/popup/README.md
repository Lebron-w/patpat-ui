# Overlay 遮罩层
## 引入
### 代码
```javascript
import Vue from 'vue';
import { Popup } from 'patpat-ui';

Vue.use(Popup);
```

## 代码演示
### 基础用法
通过`v-model`控制弹出层是否展示
```html
<button @click="showPopup">展示弹出层</button>

<PuiPopup :model.sync="show">内容</PuiPopup>
```

```javascript
<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    showPopup (type) {
      this.show = true
    }
  }
}
</script>
```
### 弹出位置
通过`position`属性设置弹出位置，默认居中弹出，可以设置为`top`、`bottom`、`left`、`right`
```html
<PuiPopup :model.sync="show" position="top">内容</PuiPopup>
```

## API
### Props
| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| v-model | 当前组件是否显示 | `boolean` | `false` |
| overlay | 是否显示遮罩层 | `boolean` | `true` |
| position | 弹出位置，可选值为 `top` `bottom` `right` `left` | `string` | `center` |
| width | 设置弹窗宽度 | `string` | -
| height | 设置弹窗高度 | `string` | -

### Events
| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击弹出层时触发 | event: Event |

