# List 列表
## 引入
### 代码
```javascript
import Vue from 'vue';
import { List } from 'patpat-ui';

Vue.use(List);
```

## 代码演示
### 列表加载更多，加载错误，加载完成
```html
<pui-list v-model="loading" loadingText="拼命加载中" 
  @load="onLoad()" 
  :error.sync="loadError" errorText="加载失败，点击重新加载"
  :finished="loadFinished" finishedText="没有更多了">
  <div v-for="(img, index) in imgList" :key="index">
    <img :src="img.src">
    <p v-text="img.title"></p>
  </div>
</pui-list>

```

## API
### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 是否处于加载状态`loading`，加载过程中不触发load事件 | Boolean | `false` |
| error | 是否加载失败，加载失败后点击错误提示可以重新触发load事件，必须使用sync修饰符 | Boolean | `false` |
| finished | 是否已加载完成，加载完成后不再触发load事件 | Boolean | `false` |
| loadingText | 加载过程中的提示文案 | String | '' |
| errorText | 加载失败后的提示文案 | String | '' |
| finishedText | 加载完成后的提示文案 | String | '' |
| immediateCheck | 是否在初始化时立即执行滚动位置检查 | Boolean | `true` |
| offset | 滚动条与底部距离小于 offset 时触发load事件 | Number | 300 |


### Events
| 事件名 | 说明 | 回调参数 |
|------|------|------|
| load | 滚动条与底部距离小于 offset 时触发 | - |


### 方法
通过 `ref` 可以获取到 List 实例并调用实例方法

| 方法名	 | 说明 | 参数 | 返回值 |
|------|------|------|------|
| check | 检查当前的滚动位置，若已滚动至底部，则会触发 load 事件 | - | - |

### Slots
| 方法名	 | 说明 | 
|------|------|
| default | 列表内容 |
| loading | 自定义底部加载中提示 |
| finished | 自定义加载完成后的提示文案 |
| error | 自定义加载失败后的提示文案 |

## 常见问题
### List 的运行机制是什么？
List 会监听浏览器的滚动事件并计算列表的位置，当列表底部与可视区域的距离小于offset时，List 会触发一次 load 事件。

### 为什么 List 初始化后会立即触发 load 事件？
List 初始化后会触发一次 load 事件，用于加载第一屏的数据，这个特性可以通过immediate-check属性关闭。

### 为什么会连续触发 load 事件？
如果一次请求加载的数据条数较少，导致列表内容无法铺满当前屏幕，List 会继续触发 load 事件，直到内容铺满屏幕或数据全部加载完成。因此你需要调整每次获取的数据条数，理想情况下每次请求获取的数据条数应能够填满一屏高度。

### loading 和 finished 分别是什么含义？
`List`有以下三种状态，理解这些状态有助于你正确地使用List组件：
* 非加载中，loading为false，此时会根据列表滚动位置判断是否触发load事件（列表内容不足一屏幕时，会直接触发）
* 加载中，loading为true，表示正在发送异步请求，此时不会触发load事件
* 加载完成，finished为true，此时不会触发load事件

在每次请求完毕后，需要手动将`loading`设置为`false`，表示加载结束

### 使用 float 布局后一直触发加载？
若 List 的内容使用了 float 布局，可以在容器上添加pui-clearfix类名来清除浮动，使得 List 能正确判断元素位置