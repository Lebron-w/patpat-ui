export const updateNavTitle = {
  computed: {
    navTitle () {
      let routeMeta = this.$route.meta
      return routeMeta.title || 'PatPat UI'
    }
  },
  watch: {
    navTitle: function (newVal) {
      this.title = newVal
    }
  },
  mounted() {
    this.title = this.navTitle
  }
}