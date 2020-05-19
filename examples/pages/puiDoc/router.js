import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import { initIframeRouter } from '../../assets/js/iframe-router'
import menus from '../../configs/menus.js'
const vComponent = () => import('./views/Component.vue')

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
    component: vComponent,
    meta: {categoryName: category.name, title: category.title},
    children: []
  }
  category.components.forEach( component => {
    let childrenRouter = {
      path: component.name,
      name: `components-${category.name}-${component.name}`,
      component: component.readmeComponent,
      meta: {categoryName: category.name, componentName: component.name, title: component.title},
    }
    componentRouter.children.push(childrenRouter)
  })
  routes.push(componentRouter)
})

initIframeRouter()

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes
})
