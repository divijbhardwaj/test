import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      
      component: Home
    },
    //registeration
    {
      path: '/dashboard',
      name: 'dashboard',

      //token code
      beforeEnter(to, from, next) {
        
        next()
      },
     
      component: () => import(/* webpackChunkName: "about" */ './views/Dashboard.vue')
    }
  ]
})
