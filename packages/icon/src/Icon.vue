<template>
  <i class="iconfont" :class="[className]"></i>
</template>

<script>
export default {
  name: 'PuiIcon',
  props: {
    name: {
      type: String,
      default: 'icon_details'
    }
  },
  data () {
    return {
      className: `icon-${this.name}`
    }
  }
  
}
</script>

<style scoped>
@import './styles/iconfont.css';
</style>

