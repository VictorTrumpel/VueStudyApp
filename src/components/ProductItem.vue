<template>
  <b-card
      :title="product.title"
      :img-src="product.img"
      :img-alt="product.title"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
  >
    <b-card-text>
      <span><strong>Цена</strong>: {{ numberFormat(product.price) }}</span>
      <br>
      <span><strong>Категория</strong>: {{ product.category }}</span>
      <br>
      <BaseSelectColor :colors="colors" :current-color.sync="currentColor"/>
    </b-card-text>
    <b-button class="mb-1" variant="primary" @click="gotoProductPage(product.id)">Перейти к товару</b-button>
    <b-button variant="success" @click="addProductToCart">В корзину</b-button>
  </b-card>
</template>

<script>
import BaseSelectColor from './BaseSelectColor'
import numberFormat from '../helpers/numberFormat'
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
    numberFormat,
    gotoProductPage (id) {
      if (this.$route.path !== '/product/' + id) {
        this.$router.push('/product/' + id)
      }
    },
    addProductToCart () {
      this.$store.commit('addProductToCart', {productId: this.product.id, amount: 1})
    }
  }
}
</script>

<style scoped>
</style>
