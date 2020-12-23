<template>
  <main class="container row">
    <ProductFilter
        :price-from.sync="filterPriceFrom"
        :price-to.sync="filterPriceTo"
        :category.sync="filterCategory"
        :color.sync="filterColor"
        :page.sync="page"
    />
    <section>
      <ProductList :products="products"/>

      <BasePagination v-model="page" :items="countProducts" :per-page="productsPerPage"/>
    </section>
  </main>
</template>

<script>
import products from './data/products'
import colors from './data/colors'
import ProductList from './components/ProductList'
import BasePagination from './components/BasePagination'
import ProductFilter from './components/ProductFilter'

export default {
  name: 'App',
  components: {ProductList, BasePagination, ProductFilter},
  data () {
    return {
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategory: 'Все категории',
      filterColor: 'Все цвета',
      page: 1,
      productsPerPage: 2
    }
  },
  computed: {
    filteredProducts () {
      let filterProducts = products

      if (this.filterPriceFrom > 0) {
        filterProducts = filterProducts.filter(product => product.price > this.filterPriceFrom)
      }

      if (this.filterPriceTo > 0) {
        filterProducts = filterProducts.filter(product => product.price < this.filterPriceTo)
      }

      if (this.filterCategory !== 'Все категории') {
        filterProducts = filterProducts.filter(product => product.category === this.filterCategory)
      }

      if (this.filterColor !== 'Все цвета') {
        let idOfFilterColor = 0
        colors.forEach(color => {
          if (color.name === this.filterColor) {
            idOfFilterColor = color.id
          }
        })

        filterProducts = filterProducts.filter(product => product.colorsId.includes(idOfFilterColor))
      }

      return filterProducts
    },
    products () {
      const offset = (this.page - 1) * this.productsPerPage
      return this.filteredProducts.slice(offset, offset + this.productsPerPage)
    },
    countProducts () {
      return this.filteredProducts.length
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
  justify-content: space-evenly;
  flex-direction: row;
  align-items: stretch;
}
</style>
