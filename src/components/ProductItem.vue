<template>
  <li class="product-item" @click="$emit('gotoPage', 'product', product)">
    <div class="product-img-container">
      <img class="product-item-image" :src="product.img" :alt="product.title">
    </div>
    <br>
    <span><strong>Название</strong>: {{ product.title }}</span>
    <br>
    <span><strong>Цена</strong>: {{ numberFormat(product.price) }}</span>
    <br>
    <span><strong>Категория</strong>: {{ product.category }}</span>
    <br>
    <BaseSelectColor :colors="colors" :current-color.sync="currentColor"/>
  </li>
</template>

<script>
import numberFormat from '../helpers/numberFormat'
import BaseSelectColor from './BaseSelectColor'
import colors from '../data/colors'

export default {
  name: 'ProductItem',
  components: {BaseSelectColor},
  props: ['product'],
  data () {
    return {
      currentColor: ''
    }
  },
  computed: {
    colors () {
      let colorsItem = colors
      colorsItem = colorsItem.filter(color => this.product.colorsId.includes(color.id))
      return colorsItem
    }
  },
  methods: {
    numberFormat
  }
}
</script>

<style scoped>
.product-item {
  list-style: none;
  margin-bottom: 20px;
  min-width: 250px;
  padding: 10px;
  border: 1px solid gray;
  transition: 0.3s ease-in-out background-color;
  cursor: pointer;
}

.product-item-image {
  width: 250px;
}

.product-item:hover {
  background: lightgray;
}

.product-img-container {
  height: 250px;
  width: 250px;
  display: flex;
  justify-content: center;
}

.color-label {
  width: 12px;
  height: 12px;
  display: inline-block;
  border-radius: 50%;
  font-weight: 0;
  cursor: pointer;
}

.color-label-input {
  display: none;
}

.color-label.red {
  background: red;
}

.color-label.green {
  background: green;
}

.color-label.black {
  background: black;
}
</style>
