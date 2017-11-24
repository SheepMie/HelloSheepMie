import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import store from '../store/index'

import index from '@/page/index'
import dairylist from '@/page/dairylist'
import dairy from '@/page/dairy'
import classList from '@/page/classList'
import authorPage from '@/page/authorPage'

const routes = [{
    path: '/',
    name: 'index',
    component: index
}, {
    path: '/dairylist',
    name: 'dairylist',
    component: dairylist,
    children:[{
      path:'dairy',name: 'dairy',component:dairy
    }]
}, {
    path: '/classList',
    name: 'classList',
    component: classList,
    children:[]
}, {
    path: '/authorPage',
    name: 'authorPage',
    component: authorPage,
    children:[]
}];

const router = new VueRouter({
    mode: 'history',
    saveScrollPosition: true,
    routes
});

router.beforeEach(({meta, path}, from, next) => {
    var { auth = true } = meta;
    console.log(store.state)
    var isLogin = Boolean(store.state.auth.token); //true用户已登录， false用户未登录

    // if (auth && !isLogin && path !== '/login') {
    //     return next({ path: '/login' })
    // }
    // if(isLogin && (path == '/login' || path == '/reg')){
    //     return next({ path: '/' })
    // }
    next()
});

export default router;

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'index',
//       component: index
//     },
//     {
//       path: '/dairylist',
//       name: 'dairylist',
//       component: dairylist,
//       children:[
//         {path:'dairy',name: 'dairy',component:dairy}
//       ]
//     },
//     {
//       path: '/classList',
//       name: 'classList',
//       component: classList,
//       children:[
//       ]
//     },
//     {
//       path: '/authorPage',
//       name: 'authorPage',
//       component: authorPage,
//       children:[
//       ]
//     }
//   ]
// })
