<template>
  <div id="app">
    <PuiNavBar :title="title" :subTitle="subTitle" :leftArrow="isShowNavLeftArrow" rightIcon="icon_compile" 
    @leftItemClick="navBarLeftItemClick" @rightItemClick="navBarRightItemClick"></PuiNavBar>
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
import { updateNavTitle } from '../../mixins/updateNavTitle'
export default {
  mixins: [updateNavTitle],
  components: {  },
  data() {
    return {
      title: 'PatPat UI',
      subTitle: '轻量、可靠的移动端 Vue 组件库'
    }
  },
  computed: {
    isShowNavLeftArrow () {
      return this.$route.path !== '/'
    }
  },
  methods: {
    navBarLeftItemClick () {
      console.log("点击左导航按钮呀")
      this.$router.go(-1)
    },
    navBarRightItemClick () {
      console.log("点击右导航按钮呀")
    }
  }
}
</script>

<style lang="less">
  @import './styles/app.less';
  .main-content {
    // background-color: @pui-background-color;
    padding-top: 60px;
  }
</style>
