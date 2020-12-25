<template>
  <div>
    <button class="go-back-btn" @click="$emit('gotoPage', 'main', {})">Вернуться к товарам</button>
    <ProductItem :product="pageParams" />
  </div>
</template>

<script>
import ProductItem from '../components/ProductItem'
export default {
  props: ['page-params'],
  components: {ProductItem}
}
</script>

<style scoped>
.go-back-btn {
  cursor: pointer;
}
</style>
