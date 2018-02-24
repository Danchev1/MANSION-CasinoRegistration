<template>
  <div class="container">
    <div class="row justify-content-end">
      <div class="col-md-6">
        <div class="create-account-form">
          <h2 class="h4">Create Account</h2>
          <hr>
          <div class="form">
            <field-group-component v-if="formDescriptor.length > 0"
                                  v-for="item in formDescriptor"
                                  :key="item.id"
                                  :fieldGroup="item">
            </field-group-component>
            <button class="btn btn-primary" @click="">Sign Up</button>
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
