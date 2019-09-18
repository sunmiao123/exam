import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Login from '@/views/login'
import Registy from '@/views/registy'
import List from '@/views/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registy',
      name: 'registy',
      component: Registy
    },
    {
      path: '/list',
      name: 'list',
      component: List
    }
  ]
})
