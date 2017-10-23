// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
//import 'mint-ui/lib/style.css'
import 'swiper/dist/css/swiper.css'
//import { Swipe, SwipeItem,  } from 'mint-ui';
import VueScroller from 'vue-scroller'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// Vue.use(VueAwesomeSwiper)


import './assets/css/common.css'
import './assets/css/iconfont.css'


if ('addEventListener' in document) {  
  document.addEventListener('DOMContentLoaded', function() {  
    FastClick.attach(document.body);  
  }, false);  
}  
Vue.use(VueScroller)
Vue.config.productionTip = false
//Vue.component(Swipe.name, Swipe);
//Vue.component(SwipeItem.name, SwipeItem);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
