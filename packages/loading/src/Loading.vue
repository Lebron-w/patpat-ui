<template>
  <div v-if="type==='chase'" :class="LoadingMLS.skChase">
    <div :class="LoadingMLS.skChaseDot"></div>
    <div :class="LoadingMLS.skChaseDot"></div>
    <div :class="LoadingMLS.skChaseDot"></div>
    <div :class="LoadingMLS.skChaseDot"></div>
    <div :class="LoadingMLS.skChaseDot"></div>
    <div :class="LoadingMLS.skChaseDot"></div>
  </div>
  <div v-else-if="type==='spinner'" :class="LoadingMLS.spinner">
    <div :class="LoadingMLS.doubleBounce"></div>
    <div :class="[LoadingMLS.doubleBounce, LoadingMLS.doubleBounceSmall]"></div>
  </div>
  <div v-else-if="type==='ripple'" :class="LoadingMLS.ripple">
    <div class="rect1"></div>
    <div :class="LoadingMLS.rect2" ></div>
    <div :class="LoadingMLS.rect3" ></div>
    <div :class="LoadingMLS.rect4" ></div>
    <div :class="LoadingMLS.rect5" ></div>
  </div>
  <div v-else-if="type==='dots'" :class="LoadingMLS.dots">
    <div :class="LoadingMLS.dot1"></div>
    <div :class="LoadingMLS.dot2"></div>
  </div>
  <div v-else-if="type==='bounces'" :class="LoadingMLS.bounces">
    <div :class="LoadingMLS.bounce1"></div>
    <div :class="LoadingMLS.bounce2"></div>
    <div class="bounce3"></div>
  </div>
  <div v-else-if="type==='cube'" :class="LoadingMLS.cubeGrid">
    <div :class="LoadingMLS.cube1"></div>
    <div :class="LoadingMLS.cube2"></div>
    <div :class="LoadingMLS.cube3"></div>
    <div :class="LoadingMLS.cube4"></div>
    <div :class="LoadingMLS.cube5"></div>
    <div :class="LoadingMLS.cube6"></div>
    <div :class="LoadingMLS.cube7"></div>
    <div :class="LoadingMLS.cube8"></div>
    <div :class="LoadingMLS.cube9"></div>
  </div>
  <div v-else-if="type==='circle'" :class="LoadingMLS.fadingCircle">
    <div class="circle1"></div>
    <div :class="LoadingMLS.circle2"></div>
    <div :class="LoadingMLS.circle3"></div>
    <div :class="LoadingMLS.circle4"></div>
    <div :class="LoadingMLS.circle5"></div>
    <div :class="LoadingMLS.circle6"></div>
    <div :class="LoadingMLS.circle7"></div>
    <div :class="LoadingMLS.circle8"></div>
    <div :class="LoadingMLS.circle9"></div>
    <div :class="LoadingMLS.circle10"></div>
    <div :class="LoadingMLS.circle11"></div>
    <div :class="LoadingMLS.circle12"></div>
  </div>
  <div v-else-if="type==='foldingCube'" :class="LoadingMLS.foldingCube">
    <div class="foldingCube1"></div>
    <div :class="LoadingMLS.foldingCube2"></div>
    <div :class="LoadingMLS.foldingCube4"></div>
    <div :class="LoadingMLS.foldingCube3"></div>
  </div>
</template>

<script>
import LoadingMLS from './loading.module.less'
export default {
  name: 'Loading',
  props: {
    type: {
      type: String,
      default: 'chase'
    },
  },
  data () {
    return {
      LoadingMLS
    }
  }
}
</script>
<style lang="less" scoped>

</style>