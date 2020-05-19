<template>
  <div>
    <p>基本用法</p>
    <pui-swiper ref="swiper" :loop="false">
      <template v-for="index in 4">
        <pui-swiper-item class="swiper-item" :key="index">{{index}}</pui-swiper-item>
      </template>
    </pui-swiper>

    <p>自动轮播</p>
    <pui-swiper :autoplay="3000">
      <template v-for="index in 4">
        <pui-swiper-item class="swiper-item" :key="index">{{index}}</pui-swiper-item>
      </template>
    </pui-swiper>

    <p>监听切换事件（打开控制台查看）</p>
    <pui-swiper @change="onChange">
      <template v-for="index in 4">
        <pui-swiper-item class="swiper-item" :key="index">{{index}}</pui-swiper-item>
      </template>
    </pui-swiper>


    <p>纵向示例</p>
    <pui-swiper class="swiper-vertical" vertical>
      <template v-for="index in 4">
        <pui-swiper-item class="swiper-item" :key="index">{{index}}</pui-swiper-item>
      </template>
    </pui-swiper>

    <p>自定义指示器</p>
    <pui-swiper @change="onChange">
      <template v-for="index in 4">
        <pui-swiper-item class="swiper-item" :key="index">{{index}}</pui-swiper-item>
      </template>
      <div class="custom-indicator" slot="indicator">
        {{ current + 1 }}/4
      </div>
    </pui-swiper>

  </div>
</template>

<script>
// import {menusManager} from '../../../../mixins/menusManager.js'
export default {
  // mixins: [menusManager],
  data(){
    return {
      current: 0
    }
  },

  methods: {

    onChange(index) {
      this.current = index
      console.log('onChange:', index)
    }
  }
}
</script>

<style lang="less" scoped>
p{
  margin: 5px 0;
}
.swiper-item {
  line-height: 160px;
  background: #66c6f2;
}
.swiper-vertical {
  height: 200px;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  color: #ffffff;
  font-size: 12px;
  background: rgba(0, 0, 0, .1);
}
</style>