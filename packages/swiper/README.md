# Swipe 轮播

### 引入

``` javascript
import Vue from 'vue';
import { Swiper, SwiperItem } from ' patpat-ui';

Vue.use(Swiper).use(SwiperItem);
```

## 代码演示

### 基础用法

通过`autoplay`属性设置自动轮播间隔

```html
<pui-swiper :autoplay="3000" indicator-color="white">
  <pui-swiper-item>1</pui-swiper-item>
  <pui-swiper-item>2</pui-swiper-item>
  <pui-swiper-item>3</pui-swiper-item>
  <pui-swiper-item>4</pui-swiper-item>
</pui-swiper>
```

### 监听 change 事件

```html
<pui-swiper @change="onChange">
  <pui-swiper-item>1</pui-swiper-item>
  <pui-swiper-item>2</pui-swiper-item>
  <pui-swiper-item>3</pui-swiper-item>
  <pui-swiper-item>4</pui-swiper-item>
</pui-swiper>
```

```js
export default {
  methods: {
    onChange(index) {
      Toast('当前 Swipe 索引：' + index);
    }
  }
}
```

### 纵向滚动

设置`vertical`属性后滑块会纵向排列，此时需要指定滑块容器的高度

```html
<pui-swiper style="height: 200px;" vertical>
  <pui-swiper-item>1</pui-swiper-item>
  <pui-swiper-item>2</pui-swiper-item>
  <pui-swiper-item>3</pui-swiper-item>
  <pui-swiper-item>4</pui-swiper-item>
</pui-swiper>
```

### 自定义指示器

通过`indicator`插槽可以自定义指示器的样式

```html
<pui-swiper @change="onChange">
  <pui-swiper-item>1</pui-swiper-item>
  <pui-swiper-item>2</pui-swiper-item>
  <pui-swiper-item>3</pui-swiper-item>
  <pui-swiper-item>4</pui-swiper-item>

  <div class="custom-indicator" slot="indicator">
    {{ current + 1 }}/4
  </div>
</pui-swiper>
```

```js
export default {
  data() {
    return {
      current: 0
    }
  },
  methods: {
    onChange(index) {
      this.current = index;
    }
  }
}
```

## API

### swiper Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| autoplay | 自动轮播间隔，单位为 ms | `number` | - |
| duration | 动画时长，单位为 ms | `number` | `500` |
| initial-swiper | 初始位置索引值 | `number` | `0` |
| loop | 是否开启循环播放 | `boolean` | `true` |
| rebound | 回弹效果 | `boolean` | `true` |
| show-indicators | 是否显示指示器 | `boolean` | `true` |
| indicator-color | 指示器颜色 | `string` | `#ff2556` |
| indicator-active-color | 指示器激活颜色 | `string` | `#ff2556` |
| vertical | 是否为纵向滚动 | `boolean` | `false` |
| touchable | 是否可以通过手势滑动 | `boolean` | `true` |
| width | 滑块宽度 | `number` | `auto` |
| height | 滑块高度 | `number` | `auto` |

### Swiper Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| change | 每一页轮播结束后触发 | index, 当前页的索引 |

### SwiperItem Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击时触发 | event: Event |

### Swiper 方法

通过 ref 可以获取到 swipe 实例并调用实例方法

| 方法名 | 参数 | 返回值 | 介绍 |
|------|------|------|------|
| swiperTo | index: 目标位置的索引, options: 选项 | void | 滚动到目标位置 |

### swiperTo Options 格式

| 名称 | 说明 | 类型 |
|------|------|------|
| immediate | 是否跳过动画 | `boolean` |

### Swiper Slots

| 名称 | 说明 |
|------|------|
| default | 轮播内容 |
| indicator | 自定义指示器 |
