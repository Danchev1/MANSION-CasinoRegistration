import Vue from 'vue'
import App from './AppView.vue'
import router from './router/app-router'

Vue.use(router)

new Vue({
  el: '#app-view',
  render: h => h(App),
  router,
})
