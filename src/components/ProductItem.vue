<template>
  <li class="product-item">
    <div class="product-img-container">
      <img class="product-item-image" :src="product.img" :alt="product.title">
    </div>
    <br>
    <span><strong>Название</strong>: {{ product.title }}</span>
    <br>
    <span><strong>Цена</strong>: {{ product.price }}</span>
    <br>
    <span><strong>Описание</strong>: {{ product.descr }}</span>
  </li>
</template>

<script>
export default {
  name: 'ProductItem',
  props: ['product']
}
</script>

<style scoped>
.product-item {
  margin-bottom: 20px;
  min-width: 250px;
  padding: 10px;
  border: 1px solid gray;
  transition: 0.3s ease-in-out background-color;
  cursor: pointer;
}

.product-item-image {
  width: 250px;
}

.product-item:hover {
  background: lightgray;
}

.product-img-container {
  height: 250px;
  width: 250px;
  display: flex;
  justify-content: center;
}
</style>
