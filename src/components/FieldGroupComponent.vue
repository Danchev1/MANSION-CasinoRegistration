<template>
    <div class="form-group"
         v-if="fieldGroup.input.type !== 'checkbox'">
      <label :for="fieldGroup.label.forArtibute" class="font-weight-medium">{{ fieldGroup.label.text }}</label>
      <input class="form-control"
             v-model="fieldGroup.input.value"
             :type="fieldGroup.input.type"
             :name="fieldGroup.input.name"
             :autocomplete="fieldGroup.input.name"
             :id="fieldGroup.label.forArtibute"
             :placeholder="fieldGroup.input.placeholder">
    </div>
    <div class="form-check"
         v-else>
      <input class="form-check-input"
             v-model="fieldGroup.input.value"
             :type="fieldGroup.input.type"
             :name="fieldGroup.input.name"
             :autocomplete="fieldGroup.input.name"
             :id="fieldGroup.label.forArtibute"
             :placeholder="fieldGroup.input.placeholder">
      <label :for="fieldGroup.label.forArtibute" class="form-check-label">{{ fieldGroup.label.text }}</label>
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
    }
  }
</script>
<style lang="scss">

</style>
