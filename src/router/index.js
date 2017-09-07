import Vue from 'vue'
import Router from 'vue-router'


import index from '@/page/index'
import dairy from '@/page/dairy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/dairy',
      name: 'dairy',
      component: dairy
    }
  ]
})
