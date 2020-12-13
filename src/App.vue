<template>
  <main class="container row">
    <section>
      <ProductList :products="products"/>
      <BasePagination v-model="pages" :items="countProducts" :per-page="productsPerPage"/>
    </section>
  </main>
</template>

<script>
import products from './data/products'
import ProductList from './components/ProductList'
import BasePagination from './components/BasePagination'

export default {
  name: 'App',
  components: {ProductList, BasePagination},
  data () {
    return {
      pages: 1,
      productsPerPage: 2
    }
  },
  computed: {
    products () {
      const offset = (this.pages - 1) * this.productsPerPage
      return products.slice(offset, offset + this.productsPerPage)
    },
    countProducts () {
      return products.length
    }
  }
}
</script>

<style>
* {
  font-family: sans-serif;
}

.container {
  max-width: 1440px;
  height: 100%;
  display: flex;
  justify-content: center;
}
.row {
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
</style>
