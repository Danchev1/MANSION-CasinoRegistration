<template>
  <div class="form-group"
       v-if="fieldGroup.input.type !== 'checkbox'">
    <label :for="fieldGroup.label.forArtibute" class="font-weight-medium">{{ fieldGroup.label.text }}</label>
    <input class="form-control" :class="{ 'is-invalid': !fieldGroup.isValid }"
           v-model="fieldGroup.input.value"
           :type="fieldGroup.input.type"
           @keyup="removeValidation()"
           :name="fieldGroup.input.name"
           :autocomplete="fieldGroup.input.name"
           :id="fieldGroup.label.forArtibute"
           :placeholder="fieldGroup.input.placeholder">
    <transition name="router-animation" mode="out-in"><small class="invalid-feedback" v-if="!fieldGroup.isValid">{{ fieldGroup.validation.error_message }}</small></transition>
  </div>
  <div class="form-check"
       v-else>
    <input class="form-check-input" :class="{ 'is-invalid': !fieldGroup.isValid }"
           v-model="fieldGroup.input.value"
           :type="fieldGroup.input.type"
           @change="removeValidation()"
           :name="fieldGroup.input.name"
           :autocomplete="fieldGroup.input.name"
           :id="fieldGroup.label.forArtibute"
           :placeholder="fieldGroup.input.placeholder">
    <label :for="fieldGroup.label.forArtibute" class="form-check-label">{{ fieldGroup.label.text }}</label>
    <small class="invalid-feedback" v-if="!fieldGroup.isValid">{{ fieldGroup.validation.error_message }}</small>
  </div>
</template>
<script>
  export default {
    name: 'field-group-component',
    props: {
      fieldGroup: {
        type: Object,
        required: true
      }
    },
    methods: {
      removeValidation () {
        this.fieldGroup.isValid = true
      }
    }
  }
</script>
<style lang="scss">

</style>
