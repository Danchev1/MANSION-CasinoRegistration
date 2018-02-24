import Vue from 'vue'
import Router from 'vue-router'
import RegistrationView from '../views/RegistrationView.vue'
import JumbotronView from '../views/JumbotronView.vue'

Vue.use(Router)

const routes = [
  { path: '/', name: 'RegistrationView', component: RegistrationView },
  { path: '/ready-to-play', name: 'JumbotronView', component: JumbotronView },
  { path: '*', redirect: '/' }

]

const router = new Router({
  routes,
  linkActiveClass: 'is-active'
})

export default router
