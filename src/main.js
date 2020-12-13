// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FirstConst from './data/FirstConst'
import SecondConst from './data/SecondConst'
import printMessage from './data/PrintMessage'

printMessage(FirstConst)
printMessage(SecondConst)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
