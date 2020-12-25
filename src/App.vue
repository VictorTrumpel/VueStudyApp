<template>
  <component
      :is="currentPageComponent"
      :page-params="currentPageParams"
  />
</template>

<script>
import eventBus from './eventBus'
import MainPage from './pages/MainPage'
import ProductPage from './pages/ProductPage'
import NotFoundPage from './pages/NotFoundPage'
const routes = {
  main: 'MainPage',
  product: 'ProductPage'
}
export default {
  data () {
    return {
      currentPage: 'main',
      currentPageParams: {}
    }
  },
  methods: {
    gotoPage (pageName, pageParams) {
      this.currentPage = pageName
      this.currentPageParams = pageParams || {}
    }
  },
  computed: {
    currentPageComponent () {
      return routes[this.currentPage] || 'NotFoundPage'
    }
  },
  created () {
    eventBus.$on('gotoPage', (pageName, pageParams) => this.gotoPage(pageName, pageParams))
  },
  components: {MainPage, ProductPage, NotFoundPage}
}
</script>
