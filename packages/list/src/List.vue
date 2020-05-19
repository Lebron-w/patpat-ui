<template>
  <div>
    <slot v-in></slot>
    <div v-if="loading" class="pui-list-loading">
      <Loading/>
      <div class="pui-list-loading-text" v-if="loadingText" v-text="loadingText"></div>
    </div>
    <div v-else-if="error" @click="clickErrorText" class="pui-list-error">
      <label v-text="errorText"></label>
    </div>
    <div v-else-if="finished" class="pui-list-finished">
      <label v-text="finishedText"></label>
    </div>
    <div ref="placeholder" class="placeholder"></div>
  </div>
</template>

<script>
import { BindEventMixin } from '../../mixins/bindEvent'
import { getScrollEventTarget, isHidden } from '../../utils/tools'
export default {
  mixins: [
    BindEventMixin(function(bind) {
      if (!this.scroller) {
        this.scroller = getScrollEventTarget(this.$el);
      }
      bind(this.scroller, 'scroll', this.check);
    })
  ],
  name: 'PuiList',
  model: {
    prop: 'loading'
  },
  props: {
    loading: Boolean,
    error: Boolean,
    finished: Boolean,
    loadingText: String,
    errorText: String,
    finishedText: String,
    immediateCheck: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Number,
      default: 300
    }
  },
  mounted() {
    if (this.immediateCheck) {
      this.check();
    }
  },
  methods: {
    check() {
      this.$nextTick(() => {
        if (this.loading || this.finished || this.error) {
          return;
        }
        const { $el: el, scroller, offset } = this
        let scrollerRect
        if (scroller.getBoundingClientRect) {
          scrollerRect = scroller.getBoundingClientRect()
        } else {
          scrollerRect = {
            top: 0,
            bottom: scroller.innerHeight
          }
        }

        const scrollerHeight = scrollerRect.bottom - scrollerRect.top
        /* istanbul ignore next */
        if (!scrollerHeight || isHidden(el)) {
          return false;
        }

        let isReachEdge = false;
        const placeholderRect = this.$refs.placeholder.getBoundingClientRect()
        isReachEdge = placeholderRect.bottom - scrollerRect.bottom <= offset
        
        if (isReachEdge) {
          this.$emit('input', true)
          this.$emit('load')
        }
      })
    },

    clickErrorText() {
      this.$emit('update:error', false);
      this.check();
    }
  }

}
</script>

<style lang="less" scoped>
.pui-list-loading {
  padding: 18px 0;
  text-align: center;
  .pui-list-loading-text {
    margin-top: 18px;
  }
}
.pui-list-error {
  padding: 18px 0;
}
.pui-list-finished {
  padding: 18px 0;
}
.pui-clearfix {
  &::after {
    display: table;
    clear: both;
    content: '';
  }
}
</style>
