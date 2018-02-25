<template>
  <div class="container">
    <div class="row justify-content-end">
      <div class="col-xs-12 col-sm-12 col-md-7 col-lg-6">
        <div class="registration-form">
          <h2 class="h3 text-center">Create Account</h2>
          <hr>
          <div class="form">
            <field-group-component v-if="formDescriptor.length > 0"
                                  v-for="item in formDescriptor"
                                  :key="item.id"
                                  :fieldGroup="item">
            </field-group-component>
            <br>
            <router-link class="btn btn-success btn-block" to="/step-2">Sign Up</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { formDescriptor } from '../display_context/display_context'
  import FieldGroupComponent from '../components/FieldGroupComponent.vue'

  export default {
    components: {
      FieldGroupComponent
    },
    name: 'registration-view',
    data () {
      return {
        formDescriptor: []
      }
    },
    methods: {
      submit() {

      }
    },
    created () {
      this.formDescriptor = formDescriptor
    }
  }
</script>
<style lang="scss">

</style>
