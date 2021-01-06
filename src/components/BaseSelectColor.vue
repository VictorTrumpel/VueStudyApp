<template>
  <div>
    <b-form-radio
        type="radio"
        value="Все цвета"
        name="color"
        v-model="colorControl"
    >Все цвета</b-form-radio>
    <b-form-radio
        v-for="color in colors" :key="color.id"
        type="radio"
        :value="color.name"
        name="color"
        v-model="colorControl"
        class="color-label-input"
    >{{ color.name }}</b-form-radio>
  </div>
</template>

<script>
export default {
  name: 'BaseSelectColor',
  props: ['colors', 'currentColor'],
  computed: {
    colorControl: {
      get () {
        return this.currentColor
      },
      set (value) {
        this.$emit('update:currentColor', value)
      }
    }
  }
}
</script>

<style scoped>
</style>
