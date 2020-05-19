<template>
  <div>
    <div class="intro-doc">
       <!-- PatPat UI 组件库介绍 -->
      <mHome/>
    </div>
    <Simulator class="simulator" src="/demo"></Simulator>
    <div class="mv-rq" title="手机扫码体验">
      <vue-qr :bgSrc='rqBg' :logoSrc="rqLogo" :text="currentUrl" :margin="10" :size="160"></vue-qr>
    </div>
  </div>
</template>

<script>
import Simulator from '../components/Simulator'
import VueQr from 'vue-qr'

export default {
  name: 'home',
  components: {
    Simulator,
    VueQr,
    mHome: () => import('../../../../README.md') 
  },
  data() {
    return {
      rqLogo: require('../../../assets/image/patpat-ui-logo.png'),
      rqBg: require('../../../assets/image/rq-bg.jpg')
    }
  },
  computed: {
    currentUrl () {
      return window.location.origin + '/demo' + this.$route.fullPath
    }
  },
  methods: {
    
  }
}
</script>

<style lang="less">
 @import '../styles/md.less';
 .intro-doc {
   float: left;
   width: calc(100% - 380px);
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
