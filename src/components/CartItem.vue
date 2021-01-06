<template>
  <b-row  class="align-content-center">
    <ProductItem :product="item.product" />
    <b-col lg="2" class="">
      <label :for="'countOf'+item.product.name">
        <strong>Количество</strong>
        <b-input
            min="0"
            class="w-75"
            :value="item.amount"
            type="number"
            :id="'countOf'+item.product.name"
            v-model="amount"
        ></b-input>
      </label>
      <label :for="'totalPrice'+item.product.name">
        <strong>Стоимость</strong>
        <b-input
            readonly
            min="0"
            class="w-75"
            :value="item.amount*item.product.price"
            type="number"
            :id="'totalPrice'+item.product.name"
        ></b-input>
      </label>
      <b-button variant="danger" @click="deleteProduct(item.product.id)">Удалить</b-button>
    </b-col>
  </b-row>
</template>

<script>
import ProductItem from './ProductItem'
import { mapMutations } from 'vuex'
export default {
  name: 'CartItem',
  props: ['item'],
  components: {ProductItem},
  computed: {
    amount: {
      get () {
        return this.item.amount
      },
      set (value) {
        this.$store.commit(
          'updateCartProductAmount',
          {productId: this.item.productId, amount: value}
        )
      }
    }
  },
  methods: {
    ...mapMutations({deleteProduct: 'deleteCardProduct'})
  }
}
</script>

<style scoped>

</style>
