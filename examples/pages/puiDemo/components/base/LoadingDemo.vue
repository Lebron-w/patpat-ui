<template>
  <div>
    <h2>平面加载动画</h2>

    <div class="loading type-default">
      <h3>默认加载动画</h3>
      <Loading/>
    </div>
    <div class="loading type-spinner">
      <h3>启微器加载动画</h3>
      <Loading type="spinner"/>
    </div>
    <div class="loading type-ripple">
      <h3>横向波纹加载动画</h3>
      <Loading type="ripple"/>
    </div>
    <div class="loading type-dots">
      <h3>大小点追逐动画</h3>
      <Loading type="dots"/>
    </div>
    <div class="loading type-bounces">
      <h3>弹跳加载动画</h3>
      <Loading type="bounces"/>
    </div>
    <div class="loading type-cube">
      <h3>正方体波纹动画</h3>
      <Loading type="cube"/>
    </div>
    <div class="loading type-circle">
      <h3>渐弱圆点加载动画</h3>
      <Loading type="circle"/>
    </div>
    <div class="loading type-folding-cube">
      <h3>折叠正方体动画</h3>
      <Loading type="foldingCube"/>
    </div>
  </div>
</template>
<style lang="less" scoped>
.loading {
  padding: 20px 0;
  h3 {
    margin-bottom: 18px;
    color: #fff;
  }
}
.type-default {
  background-color: #2c3e50;
}
.type-spinner {
  background-color: #1abc9c;
}
.type-ripple {
  background-color: #2980b9;
}
.type-dots {
  background-color: #d35400;
}
.type-bounces {
  background-color: #27ae60;
}
.type-cube {
  background-color: #2c3e50;
}
.type-circle {
  background-color: #1abc9c;
}
.type-folding-cube {
  background-color: #2980b9;
}
</style>