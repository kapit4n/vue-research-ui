import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import HelloWorld from './components/HelloWorld.vue'
import Research from './components/Research.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/black-green-dark.css'

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

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
