<template>
  <div :class="layoutMLS.nav">
    <!-- <router-link to="/">首页</router-link> -->
    <router-link to="/" :class='layoutMLS.logo'>
      <img data-v-8fafbb1c="" src="//p-pc.ppwebstatic.com/static/img/logo_1.ee0e0579.png">
    </router-link>
    <router-link v-for="comonent in menusConfig" :key="comonent.name" :class="layoutMLS.navMenu"
    :to="'/component/'+comonent.name" v-text="comonent.title"></router-link>

  </div>
</template>

<script>
import layoutMLS from '../styles/module-css/layout.module.less'
import menusConfig from '../../../configs/menus'
export default {
  data() {
    return {
      layoutMLS,
      menusConfig
    }
  },
}
</script>

<style lang="less" scoped>
.router-link-active {
  background: #ff2556;
  color: #fff;
}
</style>

