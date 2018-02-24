<template>
  <div id="app">
    <header-component></header-component>
    <div class="main">
      <router-view></router-view>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
  import router from './router/app-router'
  import HeaderComponent from './components/headerComponent.vue'
  import FooterComponent from './components/footerComponent.vue'

  export default {
    components: {
      FooterComponent,
      HeaderComponent
    },
    name: 'app-view',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="scss">
  @import './assets/scss/custom_bootstrap.scss';
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
