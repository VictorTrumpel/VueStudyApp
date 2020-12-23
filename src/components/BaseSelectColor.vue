<template>
  <div>
    <div>
      <label>
        Все цвета
        <input type="radio" value="Все цвета" name="color" v-model="colorControl">
      </label>
    </div>
    <div class="chek-color-block">
      <label
          v-for="color in colors"
          :key="color.id"
          :class="['color-label', color.name, {'checked-color': currentColor === color.name}]"
      >
        <input type="radio" :value="color.name" name="color" v-model="colorControl" class="color-label-input">
      </label>
    </div>
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
.chek-color-block {
  width: 100px;
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
}

.color-label {
  width: 20px;
  height: 20px;
  margin-right: 15px;
  display: block;
  border-radius: 50%;
  font-weight: 0;
  cursor: pointer;
}

.color-label.checked-color {
  border: 1px dotted black;
}

.color-label.checked-color::before {
  transform: scale(0.6);
}

.color-label::before {
  content: '';
  position: absolute;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  transition: 0.3s ease-in-out transform;
}

.color-label.red::before {
  background: red;
}

.color-label.green::before {
  background: green;
}

.color-label.black::before {
  background: black;
}

.color-label-input {
  display: none;
}
</style>
