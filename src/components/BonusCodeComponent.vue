<template>
  <div>
    <div class="form-group" v-if="dependent">
      <label class="font-weight-medium">{{ code.label }}</label>
      <input class="form-control"
             v-model="code.value"
             type="text"
             name="bonus-code"
             autocomplete="bonus-code"
             placeholder="555">
    </div>
    <div class="form-check">
      <input class="form-check-input"
             v-model="dependent"
             type="checkbox"
             name="bonus-code"
             autocomplete="bonus-code"
             placeholder="555">
      <label class="form-check-label">{{ code.checkboxLabel }}</label>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'bonus-code-component',
    props: {
      code: {
        type: Object
      }
    },
    data () {
      return {
        dependent: false
      }
    }
  }
</script>
<style lang="scss">

</style>
