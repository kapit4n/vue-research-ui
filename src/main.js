import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import HelloWorld from './components/HelloWorld.vue'
import Research from './components/Research.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import 'whatwg-fetch'
import VueFetch from 'vue-fetch'

Vue.config.productionTip = false

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/research', component: Research }
]

const router = new VueRouter({
  routes
})

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueMaterial)
Vue.use(VueFetch, {
  polyfill: true   //should vue-fetch load promise polyfill, set to false to use customer polyfill
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
