import Vue from 'vue'
import Router from 'vue-router'


import index from '@/page/index'
import dairylist from '@/page/dairylist'
import dairy from '@/page/dairy'
import classList from '@/page/classList'
import authorPage from '@/page/authorPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/dairylist',
      name: 'dairylist',
      component: dairylist,
      children:[
        {path:'dairy',name: 'dairy',component:dairy}
      ]
    },
    {
      path: '/classList',
      name: 'classList',
      component: classList,
      children:[
      ]
    },
    {
      path: '/authorPage',
      name: 'authorPage',
      component: authorPage,
      children:[
      ]
    }
  ]
})
