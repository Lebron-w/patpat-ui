<template>
  <div class="components">
    <ComponentList :listData="categoryComponents" :categoryName="categoryName">
    </ComponentList>
    <div :class="componentMLS.componentDocBox" class="component-demo">
      <router-view/>
    </div>
    <Simulator :src="simulatorSrc"></Simulator>
    <div class="mv-rq" title="手机扫码体验">
      <vue-qr :bgSrc='rqBg' :logoSrc="rqLogo" :margin="10" :text="currentUrl" :size="160"></vue-qr>
    </div>
  </div>
</template>

<script>
import componentMLS from '../styles/module-css/component.module.less'
import ComponentList from '../components/ComponentList.vue'
import menusConfig from '../../../configs/menus.js'
import Simulator from '../components/Simulator'
import VueQr from 'vue-qr'

export default {
  components: {ComponentList, Simulator, VueQr},
  data () {
    return {
      componentMLS,
      menusConfig,
      simulatorSrc: '/demo' + this.$route.fullPath,
      rqLogo: require('../../../assets/image/patpat-ui-logo.png'),
      rqBg: require('../../../assets/image/rq-bg.jpg')
    }
  },
  computed: {
    currentUrl () {
      return window.location.origin + '/demo' + this.$route.fullPath
    },
    categoryName () {
      let routeMeta = this.$route.meta
      return routeMeta.categoryName || 'base'
    },
    categoryComponents () {
      const {categoryName, menusConfig} = this
      let category = menusConfig.find(function(element) {
        return element.name === categoryName;
      });
      return category.components || []
    }
  }
}
</script>

<style lang="less" scoped>
@import '../styles/md.less';
.components {
  // background-color: rgb(33, 33, 34);
  height: 100%;
  width: 100%;
  float: left;
}
.mv-rq {
  position: fixed;
  margin-left: 8px;
  bottom: 10px;
  right: 10px;
  // top: 90px;
  background-color: aquamarine;
  margin-top: 700px;
}
</style>
