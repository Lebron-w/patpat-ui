import menusConfig from '../configs/menus'

export const menusManager = {
  data () {
    return {
      menusConfig
    }
  },
  computed: {
    categoryName () {
      let routeMeta = this.$route.meta
      return routeMeta.categoryName || 'base'
    },
    category () {
      const {categoryName, menusConfig} = this
      let category = menusConfig.find(function(element) {
        return element.name === categoryName;
      })
      return category
    },
    categoryComponents () {
      const {categoryName, menusConfig} = this
      let category = menusConfig.find(function(element) {
        return element.name === categoryName;
      })
      return category.components || []
    },
    componentName () {
      let routeMeta = this.$route.meta
      return routeMeta.componentName || ''
    },
    component () {
      const {componentName, categoryComponents} = this
      if (componentName) {
        let component = categoryComponents.find(function(element){
          return element.name === componentName;
        })
        return component
      } else {
        return false
      }
    }
  }
}