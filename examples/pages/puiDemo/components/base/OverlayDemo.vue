<template>
  <div class="demo-main">
    <PuiButton @click.native="show = true" text="默认按钮"></PuiButton>
    <PuiOverlay @click.native="show = false" v-show="show" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>