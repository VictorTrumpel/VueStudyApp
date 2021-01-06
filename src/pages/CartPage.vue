<template>
  <div>
    <h1>Корзина</h1>
    <CartItem v-for="item in products" :key="item.product.id" :item="item"/>
    <div class="priceCard">
      <strong>ИТОГО: {{ numberFormat(productPrice) }} ₽</strong>
    </div>
  </div>
</template>

<script>
import ProductItem from '../components/ProductItem'
import { mapGetters } from 'vuex'
import CartItem from '../components/CartItem'
import numberFormat from '../helpers/numberFormat'

export default {
  name: 'CartPage',
  components: {ProductItem, CartItem},
  computed: {
    ...mapGetters({products: 'cartDetailProducts', productPrice: 'cartTotalPrice'})
  },
  methods: {
    numberFormat
  }
}
</script>

<style scoped>
.priceCard {
  position: fixed;
  top: 30%;
  right: 5%;
  padding: 40px;
  width: 300px;
  font-size: 1.2rem;
  height: 100px;
  background: black;
  color: white;
}
</style>
