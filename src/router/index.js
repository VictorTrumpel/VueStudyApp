import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../pages/MainPage'
import NotFoundPage from '../pages/NotFoundPage'
import ProductPage from '../pages/ProductPage'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import CartPage from '../pages/CartPage'

Vue.use(BootstrapVue)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/product/:id',
      name: 'ProductPage',
      component: ProductPage
    },
    {
      path: '/cart',
      name: 'CartPage',
      component: CartPage
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFoundPage
    }
  ]
})
