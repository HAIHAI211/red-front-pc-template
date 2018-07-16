// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import _ from 'lodash'
import moment from 'moment'
import App from './App'
import router from './router'
import '@/components/elements'
import '@/assets/stylus/index.styl'

Object.defineProperty(Vue.prototype, '$moment', {value: moment})
Object.defineProperty(Vue.prototype, '_', {value: _})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
