import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import TopShop from '../container/TopShop/TopShop'
import AppLogin from '../container/AppLogin/AppLogin'
import AppMine from '../container/AppMine/AppMine'
import AppBrand from '../container/AppBrand/AppBrand'
import AppDetail from '../container/AppDetail/AppDetail'

var router = new Router({
  routes:[ 
    {
      path:"/topshop",
      component:TopShop,
      name:"topshop"
    },
    {
      path:"/login",
      component:AppLogin,
      name:"login"
    },
    {
      path:"/mine",
      component:AppMine,
      name:"mine"
    },
    {
      path:"/brand",
      component:AppBrand,
      name:"brand"
    },
    {
      path:"/detail/:id",
      component:AppDetail,
      name:"detail"
    }
  ]
})


export default router
