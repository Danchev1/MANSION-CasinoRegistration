<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="jumbotron slogan">
          <h1 class="h2">You’re ready to play!</h1>
          <p class="lead">In order to play with real money, you will need to provide more information. You can do so now if you wish, or skip and do it at a later time.</p>
          <hr class="my-4">
          <p class="lead">
            <router-link class="btn btn-primary btn-lg" :to="{ name: 'JumbutronView' }">Contenue registration</router-link>
            <a class="btn btn-primary btn-lg" href="http://www.casino.com/" >Skip</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'jumbutron-view'
  }
</script>
<style lang="scss">

</style>
