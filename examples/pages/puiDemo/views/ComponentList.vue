<template>
  <div>
    <ul class="demo-component-list">
      <li v-for="itme in categoryComponents" :key="itme.name" @click="componentListClick(itme)">
        <PuiIcon name="icon_work"></PuiIcon>
        {{itme.title}}
        <PuiIcon name="icon_next_arrow" class="demo-component-list-next-arrow"></PuiIcon>
      </li>
    </ul>
  </div>
</template>

<script>
import {menusManager} from '../../../mixins/menusManager'
export default {
  mixins: [menusManager],
  methods: {
    componentListClick (component) {
      const {categoryName} = this
      this.$parent.currentComponent = component
      this.$router.push({ path: `/component/${categoryName}/${component.name}` })
    }
  },
}
</script>

<style lang="less" scoped>
.demo-component-list {
  margin: 10px;
  li {
    text-align: left;
    border-radius: 8px;
    background-color: #fff;
    padding: 16px 8px;
    margin-top: 16px;
  }
}
.demo-component-list-next-arrow {
  float: right;
}
</style>