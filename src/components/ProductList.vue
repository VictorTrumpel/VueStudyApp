<template>
  <ul class="product-list">
    <ProductItem
        v-for="product in products"
        :product="product"
        :key="product.id"
    />
  </ul>
</template>

<script>
import ProductItem from './ProductItem'
export default {
  components: {ProductItem},
  props: ['products']
}
</script>

<style>
.product-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
