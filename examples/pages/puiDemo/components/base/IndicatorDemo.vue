<template>
  <div>
    <pui-button text="点击弹出 Indicator" @click="showIndicator()"></pui-button>
    <pui-button text="点击弹出 Indicator；可配置文字" @click="showIndicator('loading...')"></pui-button>
  </div>
</template>
<script>
export default {
  methods: {
    showIndicator (text) {
      this.Indicator.open(text)
      setTimeout(() => {
        this.Indicator.close()
      }, 2000)
    }
  },
  mounted () {
  }
}
</script>