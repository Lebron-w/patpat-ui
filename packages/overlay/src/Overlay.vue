<template>
  <div class="pat-overlay" :style="'z-index:' + zIndex">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PuiOverlay',
  props: {
    zIndex: {
      type: Number,
      default: 900
    }
  }
}
</script>

<style lang="less" scoped>
.pat-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background: rgba(0, 0, 0, 0.5);
  animation: overlay .3s;
  animation-fill-mode: both;
}
@keyframes overlay {
  100% {
    opacity: 1;
  }
}
</style>