# Loading 加载动画
## 引入
### 代码
```javascript
import Vue from 'vue';
import { Loading } from 'patpat-ui';

Vue.use(Loading);
```

## 代码演示

```html
<loading type="spinner"/>
```

## API
### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 支持`chase`、`spinner`、`ripple`、`dots`、`bounces`、`cube`、`circle`、`foldingCube` | String | `chase` |
