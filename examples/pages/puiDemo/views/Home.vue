<template>
  <div class="demo-home">
    <img src="//p-m.ppwebstatic.com/static/img/pwa_icon/ios-icon-180x180.png"/>
    <h3>PatPat UI</h3>
    <p>轻量、可靠的移动端电商应用场景 Vue 组件库</p>
    <ul class="demo-component-type">
      <li v-for="itme in menusConfig" :key="itme.name" @click="componentTyepClick(itme.name)">
        <PuiIcon name="icon_work"></PuiIcon>
        {{itme.title}}
        <PuiIcon name="icon_next_arrow" class="demo-component-type-next-arrow"></PuiIcon>
      </li>
    </ul>
  </div>
</template>

<script>
import menusConfig from '../../../configs/menus'
export default {
  data() {
    return {
      menusConfig,
    }
  },
  mounted() {
    this.$parent.title = 'PatPat UI'
    this.$parent.subTitle = '轻量、可靠的移动端 Vue 组件库'
  },
  methods: {
    componentTyepClick (routerLink) {
      this.$router.push({ path: `/component/${routerLink}` })
    }
  }
}
</script>

<style lang="less" scoped>
.demo-component-type {
  margin: 10px;
  // background-color: #ccc;
  li {
    text-align: left;
    border-radius: 8px;
    background-color: #fff;
    padding: 16px 8px;
    margin-top: 16px;
  }
}
.demo-component-type-next-arrow {
  float: right;
}
.demo-home {
  img {
    margin-top: 10px;
    border-radius: 30px;
  }
  h3 {
    margin: 20px;
  }
  p {
    margin: 20px;
    font-size: 14px;
  }
}
</style>