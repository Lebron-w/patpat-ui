import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import { initIframeRouter } from '../../assets/js/iframe-router'
import menus from '../../configs/menus.js'
const Components = () => import('./views/ComponentList.vue')

initIframeRouter()

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

menus.forEach(category => {
  let componentRouter = {
    path: `/component/${category.name}/`,
    name: `components-${category.name}`,
    component: Components,
    meta: {categoryName: category.name, title: category.title},
  }
  routes.push(componentRouter)
  category.components.forEach( component => {
    let childrenRouter = {
      path: `/component/${category.name}/${component.name}`,
      name: `components-${category.name}-${component.name}`,
      component: component.demoComponent,
      meta: {categoryName: category.name, componentName: component.name, title: component.title},
    }
    routes.push(childrenRouter)
  })
})

export default new Router({
  mode: 'history',
  base: 'demo',
  routes
})
