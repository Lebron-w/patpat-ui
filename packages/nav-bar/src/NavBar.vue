<template>
  <div class="pui-nav-bar">
    <div class="pui-nav-bar-left" @click="leftItemClick()">
      <PuiIcon :name='leftIconName' v-show="isShowLeftIcon"></PuiIcon>
      <span v-text="leftText"></span>
    </div>
    <div class="pui-nav-bar-title">
      <strong v-text="title"></strong>
      <p v-text="subTitle"></p>
    </div>
    <div class="pui-nav-bar-right" @click="rightItemClick()">
      <PuiIcon :name='rightIconName' v-show="isShowRightIcon"></PuiIcon>
      <span v-text="rightText"></span>
    </div>
    
  </div>
</template>

<script>
import PuiIcon from '../../icon'
export default {
  name: 'PuiNavBar',
  props: {
    leftArrow: Boolean,
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    leftIcon: String,
    leftText: {
      type: String,
      default: ''
    },
    rightIcon: String,
    rightText: {
      type: String,
      default: ''
    },
   
  },
  component: {
    PuiIcon
  },
  computed: {
    isShowLeftIcon () {
      return this.leftArrow || this.leftIcon;
    },
    leftIconName () {
      let leftIconName = 'icon_left'
      if (this.leftIcon) {
        leftIconName = this.leftIcon
      }
      return leftIconName
    },
    isShowRightIcon () {
      return this.rightIcon && this.rightIcon.length > 0
    },
    rightIconName () {
      return this.rightIcon || ''
    }
  },
  methods: {
    leftItemClick () {
      this.$emit('leftItemClick');
    },
    rightItemClick () {
      this.$emit('rightItemClick');
    }
  },
  
}
</script>

<style lang="less" scoped>
.pui-nav-bar {
  z-index: 800;
  background-color: #fff;
  height: 52px;
  width: 100%;
  position: fixed;
  box-shadow: 0 0 5px #b9b9b9;
  .pui-nav-bar-left {
    float: left;
    width: 64px;
    height: 100%;
    line-height:52px;
  }
  .pui-nav-bar-title {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    float: left;
    width: calc(100% - 128px);
    strong {
      display: block;
      font-size: 18px;
    }
    p {
      font-size: 10px;
    }
  }
  .pui-nav-bar-right {
    float: left;
    width: 64px;
    height: 100%;
    line-height:52px;
  }

}
</style>