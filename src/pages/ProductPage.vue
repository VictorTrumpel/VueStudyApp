<template>
  <div>
    <button class="go-back-btn" @click="gotoPage('main', {})">Вернуться к товарам</button>
    <ProductItem :product="pageParams" />
  </div>
</template>

<script>
import ProductItem from '../components/ProductItem'
import eventBus from '../eventBus'
export default {
  props: ['page-params'],
  components: {ProductItem},
  methods: {
    gotoPage (pageName, pageParams) {
      eventBus.$emit('gotoPage', pageName, pageParams)
    }
  }
}
</script>

<style scoped>
.go-back-btn {
  cursor: pointer;
}
</style>
