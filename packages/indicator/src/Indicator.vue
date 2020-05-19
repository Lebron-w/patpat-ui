<template>
  <div class="pui-loading">
    <div class="main-box">
      <div class="snake"></div>
      <p v-if="text">{{text}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PuiIndicator',
  data () {
    return {
      text: '',
    }
  }
}
</script>
<style lang="less" scoped>
.pui-loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
}
.main-box {
  position: fixed;
  top: 49%;
  left: 50%;
  padding: 16px;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  background: rgba(0,0,0,.7);
  color: #fff;
  box-sizing: border-box;
  text-align: center;
  animation: spinner-show .3s both;
  opacity: 0;
  .snake {
    margin: auto;
    animation: spinner-rotate .8s infinite linear;
    border: 4px solid transparent;
    border-radius: 50%;
    border-top-color: rgb(204, 204, 204);
    border-left-color: rgb(204, 204, 204);
    border-bottom-color: rgb(204, 204, 204);
    height: 32px;
    width: 32px;
  }
  p {
    padding-top: 5px;
    color: #fff;
    font-size: 14px;
  }
}
@keyframes spinner-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes spinner-show { 
  100% {
    opacity: 1;
    top: 50%;
  }
}


</style>