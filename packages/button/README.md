# Button 按钮
## 引入
### 代码
```javascript
import Vue from 'vue';
import { PuiButton } from 'patpat-ui';

Vue.use(PuiButton);
```

## 代码演示
### 按钮类型
支持`primary`、`plain`、`circle`、`trapezoidal`四种类型，默认为`primary`

```html
<pui-button text="默认按钮" @click="defaultButtonClick"></pui-button>
<pui-button text="朴素按钮" type="plain"></pui-button>
<pui-button text="圆形按钮" type="circle"></pui-button>
<pui-button text="" type="trapezoidal">
  <p>Back to</p>
  <p>Shopping</p>
</pui-button>

```

### 图标按钮
通过`icon`或者`image`属性设置按钮图标，支持 Icon 组件里的所有图标，也可以传入图标 URL

```html
<pui-button text="图标按钮" icon="icon_affiliations_li"></pui-button>
<pui-button text icon="icon_affiliations_li"></pui-button>
<pui-button text="" icon="icon_down" type="circle"></pui-button>
<pui-button text="Pay With" type="plain" size="large" image="//p-m.ppwebstatic.com/static/img/paypal1.5500e2dd.png"></pui-button>
```
### 按钮尺寸
支持`large`、`normal`、`small`、`mini`四种尺寸，默认为`normal`

```html
<pui-button text="大型按钮" size="large"></pui-button>
<pui-button text="小型按钮" size="small"></pui-button>
<pui-button text="迷你按钮" size="mini"></pui-button>
```

### 禁用状态
通过`disabled`属性来禁用按钮，禁用状态下按钮不可点击
```html
<pui-button text="禁用状态" disabled></pui-button>
```

### 页面导航
可以通过`url`属性进行 URL 跳转，或通过`to`属性进行路由跳转，通过设置 `replace` 属性跳转路由不生成历史记录

```html
<pui-button text="路由跳转" to="/component/base/icon"></pui-button>
<pui-button text="URL跳转" url="https://m.patpat.com"></pui-button>
<pui-button text="路由对象" :to="{ name: 'component_demo', params: { type: 'base', name: 'icon' }}" replace></pui-button>
```

## API
### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 支持`primary`、`plain`、`circle`、`trapezoidal`四种类型 | String | `primary` |
| size | 支持`large`、`normal`、`small`、`mini`四种尺寸 | String | `normal` |
| text | 按钮上的文案 | String | - |
| color | 按钮主体颜色设置 | String | #ff2556  |
| icon | 按钮图标 支持PuiIcon组件内的所有图标,传图标名称 | String | - |
| image | 按钮图片 传图片url | String | - |
| disabled | 按钮禁用选项 | Boolean | - |
| to | 通过`to`属性进行路由跳转 | String/Object | - |
| url | 可以通过`url`属性进行 URL 跳转 | String | - |
| replace | 路由跳转是否生成页面历史 | Boolean | - |


### Events
| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击按钮，且按钮状态不为加载或禁用时触发 | event: Event |
| touchstart | 开始触摸按钮时触发 | event: TouchEvent |

