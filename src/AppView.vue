<template>
  <div id="app">
    <header-component></header-component>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import router from './router/app-router'
  import HeaderComponent from './components/HeaderComponent.vue'

  export default {
    components: {
      HeaderComponent
    },
    name: 'app-view'
  }
</script>

<style lang="scss">
  @import './assets/scss/main.scss';

  #app {
    background: url('./assets/roulet-bg.jpg') no-repeat center center;
    background-size: cover;
  }

</style>
