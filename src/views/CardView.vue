<template>
  <div class="container">
    <div class="row">
      <div class="col-md-7">
        <div class="card bg-light slogan">
          <div class="card-body">
            <h2 class="card-title">You’re ready to play!</h2>
            <p class="card-text">In order to play with real money, you will need to provide more information. You can do so now if you wish, or skip and do it at a later time.</p>
            <hr class="my-4">
            <p class="lead">
              <router-link class="btn btn-success" :to="{ name: 'RegistrationInformationView' }">Contenue registration</router-link>
              <a class="btn btn-outline-secondary" href="http://www.casino.com/">Skip</a>
            </p>
          </div>
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
