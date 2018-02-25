import Vue from 'vue'
import Router from 'vue-router'
import RegistrationView from '../views/RegistrationView.vue'
import CardView from '../views/CardView.vue'
import RegistrationInformationView from '../views/RegistrationInformationView.vue'
import FinalView from '../views/FinalView.vue'

Vue.use(Router)

const routes = [
  { path: '/step-1', name: 'RegistrationView', component: RegistrationView },
  { path: '/step-2', name: 'CardView', component: CardView },
  { path: '/step-3', name: 'RegistrationInformationView', component: RegistrationInformationView },
  { path: '/step-4', name: 'FinalView', component: FinalView },
  { path: '*', redirect: '/step-1' }

]

const router = new Router({
  routes,
  linkActiveClass: 'is-active'
})


export default router
