<template>
  <div class="container">
    <div class="row justify-content-end">
      <div class="col-md-6">
        <div class="create-account-form">
          <h2 class="h4">Information required</h2>
          <form>
            <div class="form-group">
              <label for="addressInput1">Address 1</label>
              <input type="text" class="form-control" name="address1" autocomplete="address" id="addressInput1" placeholder="Enter your first address">
            </div>
            <div class="form-group">
              <label for="addressInput2">Address 2</label>
              <input type="text" class="form-control" name="address2" autocomplete="address" id="addressInput2" placeholder="Enter your second address">
            </div>
            <div class="form-group">
              <label for="usernameInput">Username</label>
              <input type="text" class="form-control" name="username" autocomplete="username" id="usernameInput" placeholder="Enter your username">
            </div>
            <div class="form-group">
              <label for="emailInput">Email address</label>
              <input type="email" class="form-control" name="email" autocomplete="email" id="emailInput" placeholder="Enter your email">
            </div>
            <div class="form-group">
              <label for="passwordInput">Password</label>
              <input type="password" class="form-control" id="passwordInput" placeholder="Choose a password">
            </div>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="checkboxInput">
              <label class="form-check-label" name="terms" for="checkboxInput">
                By checking this box, I agree to
                <a href="javascript:void(0)" title="Terms & Conditions">Terms & Conditions</a> of the site.
              </label>
            </div>
            <router-link type="submit" class="btn btn-primary" :to="{ name: 'JumbotronView' }">Sign Up</router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'registration-information-view'
  }
</script>
<style lang="scss">

</style>
