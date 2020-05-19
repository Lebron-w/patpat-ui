<template>
  <div class="pat-popop" v-if="model">
    <PuiOverlay v-if="overlay" @click.native="closePopup"></PuiOverlay>
    <div class="pat-popup-main" :class="'pat-popop-' + position" :style="{width:width, height:height}">
      <slot></slot>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'PuiPopup',
  props: {
    overlay: {
      type: Boolean,
      default: true
    },
    model: Boolean,
    position: {
      type: String,
      default: 'center'
    },
    height: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    }
  },
  methods: {
    closePopup () {
      this.$emit('update:model', false)
    }
  }
}
</script>

<style lang="less" scoped>
.pat-popop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
}
.pat-popup-main {
  position: fixed;
  z-index: 1000;
}

/* 默认弹出 */ 
.pat-popop-center {
  top: 50%;
  width: 100%;
  padding: 15px;
  transform: translateY(-50%);
}

/* 从上往下 */
.pat-popop-top {
  top: -100%;
  left: 0;
  width: 100%;
  animation: showTop .3s;
  animation-fill-mode: both;  
}
@keyframes showTop {
  100% {
    top: 0;
  }
}

/* 从下往上 */
.pat-popop-bottom {
  bottom: -100%;
  left: 0;
  width: 100%;
  animation: showBottom .3s;
  animation-fill-mode: both;  
}
@keyframes showBottom {
  100% {
    bottom: 0;
  }
}

/* 从左到右 */
.pat-popop-left {
  top: 0;
  left: -100%;
  height: 100%;
  animation: showLeft .3s;
  animation-fill-mode: both;  
}
@keyframes showLeft {
  100% {
    left: 0;
  }
}

/* 从右到左 */
.pat-popop-right {
  top: 0;
  right: -100%;
  height: 100%;
  animation: showRight .3s;
  animation-fill-mode: both;  
}
@keyframes showRight {
  100% {
    right: 0;
  }
}
</style>