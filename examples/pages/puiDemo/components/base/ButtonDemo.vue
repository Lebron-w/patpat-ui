<template>
  <div>
    <div class="button-demo-box">
      <strong>按钮类型</strong>
      <PuiButton text="默认按钮"></PuiButton>
      <PuiButton text="朴素按钮" type="plain"></PuiButton>
      <PuiButton text="圆形按钮" type="circle"></PuiButton>
      <PuiButton text="" type="trapezoidal">
        <p>Back to</p>
        <p>Shopping</p>
      </PuiButton>
    </div>

    <div class="button-demo-box">
      <strong>按钮颜色</strong>
      <PuiButton text="自定义颜色" color="#FFC125"></PuiButton>
      <PuiButton text="自定义颜色" color="#4F4F4F"></PuiButton>
      
      <PuiButton text="自定义颜色" type="plain" color="#00BFFF"></PuiButton>
    </div>

    <div class="button-demo-box">
      <strong>按钮大小</strong>
      <PuiButton text="大型按钮" size="large"></PuiButton>
      <PuiButton text="小型按钮" size="small"></PuiButton>
      <PuiButton text="迷你按钮" size="mini"></PuiButton>
    </div>

    <div class="button-demo-box">
      <strong>按钮状态</strong>
      <PuiButton text="禁用状态" disabled></PuiButton>
      <PuiButton text="加载状态"></PuiButton>
    </div>

    <div class="button-demo-box">
      <strong>按钮图标</strong>
      <PuiButton text="图标按钮" icon="icon_affiliations_li"></PuiButton>
      <PuiButton text icon="icon_affiliations_li"></PuiButton>
      <PuiButton text="" icon="icon_down" type="circle"></PuiButton>
      <PuiButton text="Pay With" type="plain" size="large" image="//p-m.ppwebstatic.com/static/img/paypal1.5500e2dd.png"></PuiButton>
    </div>

    <div class="button-demo-box">
      <strong>按钮导航</strong>
      <PuiButton text="路由跳转" to="/component/base/icon"></PuiButton>
      <PuiButton text="URL跳转" url="https://m.patpat.com"></PuiButton>
      <PuiButton text="路由对象" :to="{ name: 'component_demo', params: { type: 'base', name: 'icon' }}"></PuiButton>
    </div>
  </div>
</template>

<script>
// import {menusManager} from '../../../../mixins/menusManager.js'
export default { 
  // mixins: [menusManager],
  methods: {
   
  },
};
</script>

<style lang="less" scoped>
.button-demo-box {
  padding: 10px;
  margin-bottom: 10px;
  p {
    font-size: 12px;
  }
  strong {
    display: block;
    margin-bottom: 15px;
    text-align: left;
    position: relative;
    padding-bottom: 10px;
    &::before {
      content: ' ';
      position: absolute;
      left: 0;
      bottom: 0;
      background-color: #999;
      -webkit-transform-origin: top left;
      transform-origin: top;
      right: 0;
      height: 1px;
      transform: scaleY(0.5);
    }
  }
}
</style>