<template>
  <div class="container">
    <div class="row justify-content-end">
      <div class="col-md-6">
        <div class="registration-form">
          <h2 class="h3 text-center">Information required</h2>
          <hr>
          <div class="form">
            <field-group-component v-if="formDescriptor.length > 0"
                                   v-for="item in formDescriptor"
                                   :key="item.id"
                                   :fieldGroup="item">
            </field-group-component>
            <br>
            <router-link class="btn btn-success btn-block" to="/step-3">Register</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { formInformationDescriptor } from '../display_context/display_context'
  import FieldGroupComponent from '../components/FieldGroupComponent.vue'
  export default {
    name: 'registration-information-view',
    components: {
      FieldGroupComponent
    },
    data () {
      return {
        formDescriptor: []
      }
    },
    methods: {
      submit() {

      }
    },
    created() {
      this.formDescriptor = formInformationDescriptor
    }

  }
</script>
<style lang="scss">

</style>
