<template>
  <div class="container">
    <p>基本用法</p>
    <div class="left">
      <pui-sticky :offset-top="50">
        <pui-button class="one">基础用法</pui-button>
      </pui-sticky>
    </div>

    <p>吸顶距离</p>
    <pui-sticky :offset-top="110">
      <pui-button class="two">吸顶距离</pui-button>
    </pui-sticky>

    <p>指定容器</p>
    <div class="box" ref="container" style="height: 200px;">
      <pui-sticky :offset-top="50" :container="container" @scroll="scroll">
        <pui-button class="three">指定容器</pui-button>
      </pui-sticky>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      container: null
    };
  },
  mounted() {
    this.container = this.$refs.container;
  },
  methods: {
    scroll(options) {
      console.log(options)
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  height: 1500px;
  p {
    text-align: left;
    padding: 10px;
  }

  .left {
    text-align: left;
  }

  .box {
    text-align: right;
    height: 100px;
    background: #fff;
  }

}
</style>