<template>
  <b-row class="d-flex align-items-md-stretch">
    <b-col lg="6" v-for="product in products" :key="product.id">
      <ProductItem :product="product"/>
    </b-col>
  </b-row>
</template>

<script>
import ProductItem from './ProductItem'
export default {
  components: {ProductItem},
  props: ['products']
}
</script>

<style>
</style>
