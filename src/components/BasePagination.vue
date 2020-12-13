<template>
<div class="pagination">
  <button
      class="pagination-left-btn pagination-item"
      :disabled="page === 1"
      @click="paginate(page-1)"
  >&#11164;</button>
  <button
      :class="['pagination-item', {'active-pag-item': page === pageNumber}]"
      v-for="pageNumber in pages"
      :key="pageNumber"
      @click="paginate(pageNumber)"
  >{{ pageNumber }}</button>
  <button
      class="pagination-right-btn pagination-item"
      :disabled="page === pages"
      @click="paginate(page + 1)"
  >&#11166;</button>
</div>
</template>

<script>
export default {
  name: 'BasePagination',
  props: ['page', 'items', 'perPage'],
  model: {
    prop: 'page',
    event: 'paginate'
  },
  methods: {
    paginate (page) {
      this.$emit('paginate', page)
    }
  },
  computed: {
    pages () {
      return Math.ceil(this.items / this.perPage)
    }
  }
}
</script>

<style scoped>
button {
  cursor: pointer;
}

.pagination {
  display: flex;
  justify-content: center;
}

.pagination-item {
  background: lavender;
  border: none;
  outline: none;
  height: 40px;
  width: 40px;
}

.active-pag-item {
  font-weight: bold;
  background: darkseagreen;
}
</style>
