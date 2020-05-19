<template>
  <button type="button" :class="['pui-button', typeClass, sizeClass, {'pui-button-disabled': disabled}]" 
  :disabled="disabled" :style="buttonStyle" @click="click" @touchstart="touchstart">
    <slot></slot>
    <PuiIcon v-if="icon" :name="icon"></PuiIcon> {{text}}
    <img v-if="image" :src="image"/>
  </button>
</template>

<script>
// import { Stream } from 'stream';
// import { type } from 'os';
export default {
  name: 'PuiButton',
  props: {
    type: { // primary | trapezoidal | circle | plain 
      type: String,
      default: 'primary'
    }, 
    size: { // large | normal | small | mini
      type: String,
      default: 'normal'
    }, 
    text: String,
    color: String,
    icon: String,
    image: String, 
    disabled: Boolean,
    // TODO 封装一下为公共mixin
    to: [String, Object],
    url: String,
    replace: Boolean
  },
  data() {
    return {
      // buttonStyle: {}
    }
  },
  computed: {
    typeClass () {
      return `pui-button-${this.type}`
    },
    sizeClass () {
      return `pui-button-${this.size}`
    },
    buttonStyle () {
      let styleObject = {}
      if (this.color) {
        if (this.type === 'plain') {
          styleObject.color = this.color
          styleObject.borderColor = this.color
        } else {
          styleObject.color = '#fff'
          styleObject.backgroundColor = this.color
        }
      }
      return styleObject
    }
  },
  methods: {
    click (event) {
      if (this.to) {
        if (this.replace) {
          this.$router.replace(this.to)
        } else {
          this.$router.push(this.to)
        }
      } else if (this.url) {
        window.location.href = this.url
      }
      if (!this.disabled) {
        this.$emit('click', event);
      }
    },
    touchstart (event) {
      if (!this.disabled) {
        this.$emit('touchstart', event);
      }
    }
  },


  
}
</script>

<style lang="less" scoped>
.pui-button {
  color: #fff;
  background-color: #ff2556;
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  height: 44px;
  margin: 0;
  padding: 0;
  font-size: 14px;
  line-height: 44px;
  text-align: center;
  border-radius: 4px;
  -webkit-appearance: none;
  -webkit-text-size-adjust: 100%;
  border: 0px solid #ddd;
  margin: 5px;

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background-color: #000;
    border: inherit;
    border-color: #000;
    border-radius: inherit; /* inherit parent's border radius */
    transform: translate(-50%, -50%);
    opacity: 0;
    content: ' ';
  }
  &:active::before {
    opacity: .2;
  }
  &-primary {
    background-color: #ff2556;
  }
  &-plain {
    border: 0.5px solid #ddd;
    color: #222;
    background-color: #fff;
  }
  &-trapezoidal {
    border: 0;
    padding: 0 !important;
    border-radius: 0px;
    line-height: normal;
    height: 60px;
    width: 60px;
    background-color: #f1f2f3;
    color: #444;
    &::after {
      position: absolute;
      content: " ";
      width: 4px;
      height: 0;
      top: 0;
      bottom: 0;
      left: -26px;
      border-top: 60px solid #f1f2f3;
      border-left: 26px solid transparent;
    }
    &:active::after {
      // border-block-color: #A9AAAB;
      border-top: 60px solid #C1C2C2;
    }
  }
  &-circle {
    border-radius: 44px;
  }
  &-large {
    width: 100%;
    height: 50px;
    line-height: 48px;
    font-size: 18px;
    border-radius: 8px;
  }
  &-normal {
    padding: 0 15px;
    // font-size: 16px;
  }
  &-small {
    min-width: 60px;
    height: 30px;
    padding: 0 8px;
    font-size: 14px;
    line-height: 28px;
  }
  &-mini {
    min-width: 50px;
    height: 20px;
    padding: 0 2px;
    font-size: 12px;
    line-height: 20px;
  }
  &-disabled {
    opacity: 0.5;
  }
}
</style>
