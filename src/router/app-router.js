import Vue from 'vue'
import Router from 'vue-router'
import App from '../AppView.vue'

Vue.use(Router)

const routes = [
  { path: '/', name: 'App', component: App },
  {path: '*', redirect: '/'}

]

const router = new Router({
  routes,
  linkActiveClass: 'is-active'
})

export default router
