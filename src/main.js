// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import VueScroller from 'vue-scroller'
import store from './store/index'


import 'swiper/dist/css/swiper.css'
import './assets/css/common.css'
import './assets/css/iconfont.css'


if ('addEventListener' in document) {  
  document.addEventListener('DOMContentLoaded', function() {  
    FastClick.attach(document.body);  
  }, false);  
}  
Vue.use(VueScroller)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  ...App,
  //template: '<App/>',
  //components: { App }
})
