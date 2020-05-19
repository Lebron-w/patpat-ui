<template>
  <div class="pui-swipe-item" :style='style' v-on="$listeners">
    <slot></slot>
  </div>
</template>


<script>

export default {
  name: 'PuiSwiperItem',

  data() {
    return {
      offset: 0
    };
  },

  computed:{
    vertical(){
      return this.$parent.vertical;
    },

    computedWidth() {
      return this.$parent.computedWidth;
    },

    computedHeight() {
      return this.$parent.computedHeight;
    },

    style() {
      let style = {
        width: this.computedWidth + 'px',
        height: this.vertical ? this.computedHeight + 'px' : '100%',
        transform: `translate${this.vertical ? 'Y' : 'X'}(${this.offset}px)`
      };
      return style;
    }
  },

  beforeCreate() {
    this.$parent.swipes.push(this);
  },

  destroyed() {
    this.$parent.swipes.splice(this.$parent.swipes.indexOf(this), 1);
  }
}
</script>

<style lang="less" scoped>
.pui-swipe-item {
  float: left;
  height: 100%;
}
</style>