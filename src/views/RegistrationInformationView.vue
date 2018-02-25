<template>
  <div class="container">
    <div class="row justify-content-end">
      <div class="col-xs-12 col-sm-12 col-md-7 col-lg-6">
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
            <button class="btn btn-success btn-block" @click="submit()">Register</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { validate } from '../js/validation'
  import { formInformationDescriptor } from '../js/display_context'
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
      validAll () {
        this.formDescriptor.forEach(field => {
          validate(field)
        })
      },
      submit () {
        this.validAll()
        let form = this.formDescriptor.every(field => {
          return field.isValid
        })
        if (form) {
          this.redirectTo({ name: 'CardView' })
        }
      }
    },
    created () {
      this.formDescriptor = formInformationDescriptor
    }

  }
</script>
<style lang="scss">

</style>
