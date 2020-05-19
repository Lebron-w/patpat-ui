import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'highlight.js/styles/github-gist.css'
import '@vant/touch-emulator';

Vue.config.productionTip = false

window.vueRouter = router
router.afterEach((to, from) => {
  console.log(to, from)
  Vue.nextTick(() => window.syncPath());
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
