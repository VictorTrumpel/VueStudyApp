<template>
  <b-form>
    <h3>Фильт товаров</h3>
    <b-row>
      <b-col lg="12" class="mb-4">
        <b-form-input
            id="currentPriceFrom"
            placeholder="цена от"
            type="number"
            v-model.number="currentPriceFrom"
        ></b-form-input>
      </b-col>
      <b-col lg="12" class="mb-4">
        <b-form-input
            id="currentPriceFrom"
            placeholder="цена до"
            type="number"
            v-model.number="currentPriceTo"
        ></b-form-input>
      </b-col>
      <b-col lg="12" class="mb-4">
        <b-form-select class="filter-input" name="category" v-model="currentCategory">
          <b-form-select-option value="Все категории">Все категории</b-form-select-option>
          <b-form-select-option :value="category.title" v-for="category in categories" :key="category.id">
            {{ category.title }}
          </b-form-select-option>
        </b-form-select>
      </b-col>
    </b-row>
    <BaseSelectColor :colors="colors" :current-color.sync="currentColor" class="mb-4"/>
    <b-button
        variant="success"
        class="filter-button"
        type="submit"
        @click.prevent="submitProductFilter"
    >Применить</b-button>
    <b-button class="filter-button" type="submit" @click.prevent="resetProductFilter">Сбросить</b-button>
  </b-form>
</template>

<script>
import categories from '../data/categories'
import colors from '../data/colors'
import BaseSelectColor from './BaseSelectColor'

export default {
  name: 'ProductFilter',
  props: ['priceFrom', 'priceTo', 'category', 'color', 'page'],
  components: {BaseSelectColor},
  data () {
    return {
      currentPriceFrom: '',
      currentPriceTo: '',
      currentColor: 'Все цвета',
      currentCategory: 'Все категории'
    }
  },
  computed: {
    categories () {
      return categories
    },
    colors () {
      return colors
    }
  },
  watch: {
    priceFrom (value) {
      this.currentPriceFrom = value
    },
    priceTo (value) {
      this.currentPriceTo = value
    },
    category (value) {
      this.currentCategory = value
    }
  },
  methods: {
    submitProductFilter () {
      this.$emit('update:priceFrom', this.currentPriceFrom)
      this.$emit('update:priceTo', this.currentPriceTo)
      this.$emit('update:category', this.currentCategory)
      this.$emit('update:color', this.currentColor)
      this.$emit('update:page', 1)
    },
    resetProductFilter () {
      this.$emit('update:priceFrom', 0)
      this.$emit('update:priceTo', 0)
      this.$emit('update:category', 'Все категории')
      this.$emit('update:color', 'Все цвета')
      this.$emit('update:page', 1)
    }
  }
}
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
</style>
