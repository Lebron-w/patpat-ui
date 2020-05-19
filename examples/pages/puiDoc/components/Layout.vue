<template>
  <div :class="layoutMLS.layout">
    <Header :class="layoutMLS.header"></Header>
    <main :class="layoutMLS.mainContainer">
      <slot>
        <Content></Content>
      </slot>
    </main>
    <!-- <Footer :class="layoutMLS.footer"></Footer> -->
  </div>
</template>

<script>
import layoutMLS from '../styles/module-css/layout.module.less'
import Header from './LayoutHeader'
import Content from './LayoutContent'
import Footer from './LayoutFooter' 
export default {
  components: {Header, Footer, Content},
  data() {
    return {
      layoutMLS
    }
  },
  
}
</script>

<style lang="less" scoped>

</style>


