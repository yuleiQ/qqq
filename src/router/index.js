import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import AppMain from '../container/AppMain/AppMain'
import AppMine from '../container/AppMine/AppMine'
import AppRegister from '../container/AppRegister/AppRegister'
import AppCar from '../container/AppCar/AppCar'


Vue.use(Router)

var router = new Router({
  // mode:'history',
  routes: [
      {
        path:'*',
        redirect:'/'
      },
      {
        path:'/',
        component:AppMain,
        name:'main'
      },
      {
        path:'/mine',
        component:AppMine,
        name:'mine'
      },
      {
        path:'/register',
        component:AppRegister,
        name:'register'
      },
      {
        path:'/car',
        component:AppCar,
        name:'car'
      }
      
  ]
}) 




export default router
