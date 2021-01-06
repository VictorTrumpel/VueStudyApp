<template>
  <div>
    <router-link tag="b-button" class="go-back-btn mb-4" :to="{name: 'MainPage'}">Вернуться к товарам</router-link>
    <ProductItem :product="product" />
  </div>
</template>

<script>
import ProductItem from '../components/ProductItem'
import products from '../data/products'

export default {
  name: 'ProductPage',
  components: {ProductItem},
  computed: {
    product () {
      return products.find(product => product.id === +this.$route.params.id)
    }
  }
}
</script>

<style scoped>
.go-back-btn {
  cursor: pointer;
}
</style>
