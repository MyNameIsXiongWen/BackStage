// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
// import global from '@/globalData.js'
import './plugins/element.js'
import '@/assets/style/index.scss' // global css
import axios from './utils/axios' // ajax库

Vue.config.productionTip = false
Vue.prototype.ajax = axios.comAjax

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
