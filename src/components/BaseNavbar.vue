<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" fixed="top" :sticky="true">
      <b-navbar-brand href="#">Технозавр</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item><router-link class="href" to="/">Товары</router-link></b-nav-item>
          <b-nav-item><router-link class="href" to="/cart">
            Корзина
            <button class="cart-indicate" v-show="$store.state.cartProducts.length > 0">
              {{ $store.state.cartProducts.length }}
            </button>
          </router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.href {
  position: relative;
  text-decoration: none;
  color: lightblue;
}

.href:hover {
  color: white;
}

.cart-indicate {
  position: absolute;
  display: inline-block;
  outline: none;
  border: none;
  color: white;
  font-weight: bold;
  background: brown;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  font-size: 0.5rem;
}
</style>
