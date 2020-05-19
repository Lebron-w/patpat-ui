<template>
  <div class="pui-simulator">
    <!-- <div class="browser-navigation">
      <input class="" type="text" :value="'http://localhost:8080'+src" />
    </div> -->
    <iframe ref="iframe" :src="src" :style="simulatorStyle" frameborder="0" />
  </div>
</template>

<script>
export default {
  props: {
    src: String
  },
  data() {
    return {
      scrollTop: window.scrollY,
      windowHeight: window.innerHeight
    };
  },
  computed: {
    isFixed() {
      return this.scrollTop > 60;
    },
    simulatorStyle() {
      const height = Math.min(667, this.windowHeight - 90);
      const width = 375
      return {
        height: height + 'px',
        width: width + 'px'
      };
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.scrollTop = window.scrollY;
    });
    window.addEventListener('resize', () => {
      this.windowHeight = window.innerHeight;
    });
  },
}
</script>

<style lang="less" scoped>
.browser-navigation {
  input {
    width: 375px;
  }
}
.pui-simulator {
  position: fixed;
  margin-left: 8px;
  right: 8px;
  top: 90px;
  iframe {
    box-shadow: 0 0 5px #b9b9b9;
    background-color: #fff;
    border-radius: 5px;
    body {
      background: #f8f8f8;
    }
  }
}

</style>