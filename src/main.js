import Vue from 'vue'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import Research from './components/Research.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

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

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
