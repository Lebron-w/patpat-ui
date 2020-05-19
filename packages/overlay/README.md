# Popuo 弹出层
## 引入
### 代码
``` javascript
import Vue from 'vue';
import { Overlay } from 'patpat-ui';

Vue.use(Overlay);
```

## 代码演示
### 基础用法
```html
<button 
  @click="show = true">
  显示遮罩层
</button>

<PuiOverlay 
  @click.native="show = false" 
  v-show="show"
  :zIndex="zIndex
/>
```
``` javascript
<script>
export default {
  data() {
    return {
      show: false,
      zIndex: 1
    }
  }
}
</script>
```

## API
### Props
| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| show | 是否展示遮罩层 | `boolean` | `false` |
| z-index | z-index | `number | string` | `1` |

### Events
| 事件名 | 说明 | 回调函数 |
|------|------|------|
| click | 点击时触发 | event: Event |

