# Icon 图标
## 引入
### 代码
```javascript
import Vue from 'vue';
import { PuiIcon } from 'patpat-ui';

Vue.use(PuiIcon);
```

## 代码演示
### 基础用法
PuiIcon的name属性支持传入图标名称
```javascript
<PuiIcon name='icon_left'></PuiIcon>

```


### 图标列表
![iconfont](https://cdn.patpat.site/mweb/iconfont.png)


## API
### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --: | --: |
| name | 图标名称 | String | icon_details |
| color | 图标颜色 | String | inherit |
| size | 图标大小，如20px,2em, 默认单位px | String|number | inherit |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击图标时触发 | event:Event |


