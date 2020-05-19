<template>
  <div :class="componentMLS.componentList">
    <ul :class="componentMLS.componentListTitle">
      <li v-for="item in listData" :key="item.name">
        <router-link :to=" '/component/' + categoryName + '/' + item.name" v-text="item.title"></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import componentMLS from '../styles/module-css/component.module.less'
export default {
  props: {
    listData: Array,
    categoryName: String
  },
  components: { },
  data() {
    return {
      componentMLS
    }
  }
}
</script>

<style lang="less" scoped>
.router-link-exact-active {
  background: #ff2556;
  height: 100%;
  width: 100%;
  color: #fff;
}
</style>