<template>
  <div :style="fixed ? `height:${height}px` : 'null'">
    <div class="sticky" :class="{'sticky-fixed': fixed}" :style="style">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { BindEventMixin } from '../../mixins/bindEvent'
import { isDef, getScrollTop, getElementTop, getScrollEventTarget } from '../../utils/tools';

export default {
  name: 'PuiSticky',
  mixins: [
    BindEventMixin(function(bind){
      if (!this.scroller) {
        this.scroller = getScrollEventTarget(this.$el);
      }

      bind(this.scroller, 'scroll', this.onScroll, true);
      this.onScroll();
    })
  ],
  data() {
    return {
      fixed: false,
      height: 0,
      transform: 0,
      scroller: null
    }
  },
  props: {
    zIndex: Number,
    container: null,
    offsetTop: {
      type: Number,
      default: 0
    }
  },
  computed: {
    style() {
      if (!this.fixed) {
        return;
      }

      const style = {};

      if (isDef(this.zIndex)) {
        style.zIndex = this.zIndex;
      }

      if (this.offsetTop && this.fixed) {
        style.top = `${this.offsetTop}px`;
      }

      if (this.transform) {
        style.transform = `translate3d(0, ${this.transform}px, 0)`;
      }

      return style;
    }
  },
  methods: {
    onScroll() {
      this.height = this.$el.offsetHeight;

      const { container, offsetTop } = this;
      const scrollTop = getScrollTop(window);
      const topToPageTop = getElementTop(this.$el);

      const emitScrollEvent = () => {
        this.$emit('scroll', {
          scrollTop,
          isFixed: this.fixed
        });
      };

      // The sticky component should be kept inside the container element
      if (container) {
        const bottomToPageTop = topToPageTop + container.offsetHeight;

        if (scrollTop + offsetTop + this.height > bottomToPageTop) {
          const distanceToBottom = this.height + scrollTop - bottomToPageTop;

          if (distanceToBottom < this.height) {
            this.fixed = true;
            this.transform = -(distanceToBottom + offsetTop);
          } else {
            this.fixed = false;
          }

          emitScrollEvent();
          return;
        }
      }

      if (scrollTop + offsetTop > topToPageTop) {
        this.fixed = true;
        this.transform = 0;
      } else {
        this.fixed = false;
      }

      emitScrollEvent();
    }
  }
}
</script>

<style lang="less">
.sticky {
  &-fixed {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9;
  }
}
</style>