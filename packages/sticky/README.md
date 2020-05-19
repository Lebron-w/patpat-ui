# Sticky 吸顶组件

### 引入

``` javascript
import Vue from 'vue';
import { Sticky } from ' patpat-ui';

Vue.use(Sticky);
```

## 代码演示

### 基础用法

将内容包裹在`Sticky`组件内即可

```
<pui-sticky>
  <pui-button type="primary">基础用法</pui-button>
</pui-sticky>
```

### 吸顶距离

通过`offset-top`属性可以设置组件在吸顶时与顶部的距离

```
<pui-sticky :offset-top="50">
  <pui-button>吸顶距离</pui-button>
</pui-sticky>
```


### 指定容器

通过`container`属性可以指定组件的容器，页面滚动时，组件会始终保持在容器范围内，当组件即将超出容器底部时，会固定在容器的底部

```
<div ref="container" style="height: 150px;">
  <pui-sticky :container="container">
    <pui-button>指定容器</pui-button>
  </pui-sticky>
</div>
export default {
  data() {
    return {
      container: null
    };
  },
  mounted() {
    this.container = this.$refs.container;
  }
};
```

### API
Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| offset-top | 吸顶时距离顶部的距离，单位px | number | 0 |
| z-index | 吸顶时的z-index | number | 99 |
| container | 对应的 HTML 节点 | HTMLElement | - |

Events
| 事件名 | 说明 | 回调参数 |
|------|------|------|
| scroll | 滚动时触发 | {scrollTop: 距离顶部距离, isFixed: 是否吸顶} |