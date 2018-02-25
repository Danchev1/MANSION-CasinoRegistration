import Vue from 'vue'
import Router from 'vue-router'
import RegistrationView from '../views/RegistrationView.vue'
import JumbotronView from '../views/JumbotronView.vue'
import RegistrationInformationView from '../views/RegistrationInformationView.vue'

Vue.use(Router)

const routes = [
  { path: '/step-1', name: 'RegistrationView', component: RegistrationView },
  { path: '/step-2', name: 'JumbotronView', component: JumbotronView },
  { path: '/step-3', name: 'RegistrationInformationView', component: RegistrationInformationView },
  { path: '*', redirect: '/step-1' }

]

const router = new Router({
  routes,
  linkActiveClass: 'is-active'
})

export default router
