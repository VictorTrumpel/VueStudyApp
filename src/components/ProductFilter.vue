<template>
  <form class="product-filter">
    <h3>Фильт товаров</h3>
    <label>
      цена от:
      <br>
      <input class="filter-input" type="text" v-model.number="currentPriceFrom" required>
    </label>
    <label>
      цена до:
      <br>
      <input class="filter-input" type="text" v-model.number="currentPriceTo" required>
    </label>
    <label>
      категория товара:
      <br>
      <select class="filter-input" name="category" v-model="currentCategory">
        <option value="Все категории">Все категории</option>
        <option :value="category.title" v-for="category in categories" :key="category.id">
          {{ category.title }}
        </option>
      </select>
    </label>
    <label>
      Все цвета
      <input type="radio" value="Все цвета" name="color" v-model="currentColor">
    </label>
    <div class="chek-color-block">
      <label
          v-for="color in colors"
          :key="color.id"
          :class="['color-label', color.name, {'checked-color': currentColor === color.name}]"
      >
        <input type="radio" :value="color.name" name="color" v-model="currentColor" class="color-label-input">
      </label>
    </div>
    <button class="filter-button" type="submit" @click.prevent="submitProductFilter">Применить</button>
    <button class="filter-button" type="submit" @click.prevent="resetProductFilter">Сбросить</button>
  </form>
</template>

<script>
import categories from '../data/categories'
import colors from '../data/colors'

export default {
  name: 'ProductFilter',
  props: ['priceFrom', 'priceTo', 'category', 'color', 'page'],
  data () {
    return {
      currentPriceFrom: 0,
      currentPriceTo: 0,
      currentColor: '',
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
    },
    color (value) {
      this.currentColor = value
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
      this.$emit('update:color', '')
      this.$emit('update:page', 1)
    }
  }
}
</script>

<style scoped>
.product-filter {
  width: 200px;
  padding: 15px;
  border: 5px dashed black;
  display: flex;
  flex-direction: column;
}

.filter-input {
  margin-bottom: 20px;
  width: 120px;
  height: 30px;
  padding-left: 10px;
}

.filter-button {
  margin-bottom: 20px;
  width: 100px;
  height: 30px;
}

.chek-color-block {
  width: 100px;
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  justify-content: space-between;
}

.color-label {
  width: 20px;
  height: 20px;
  display: block;
  border-radius: 50%;
  font-weight: 0;
  cursor: pointer;
}

.color-label.checked-color {
  border: 1px dotted black;
}

.color-label.checked-color::before {
  transform: scale(0.6);
}

.color-label::before {
  content: '';
  position: absolute;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  transition: 0.3s ease-in-out transform;
}

.color-label.red::before {
  background: red;
}

.color-label.green::before {
  background: green;
}

.color-label.black::before {
  background: black;
}

.color-label-input {
  display: none;
}
</style>
