// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import ElementUI from 'element-ui'
// Vue.use(ElementUI)
// import 'element-ui/lib/theme-chalk/index.css'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon',Icon)

import 'animate.css'

import 'swiper/dist/css/swiper.min.css'
 

Vue.config.productionTip = false

import store from './vuex/store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//在任意组件中，通过this.$router this.$route 都可以用到和路由有关的属性和方法
  store,//在任意组件中，都可以通过this.store来操作store的属性和方法
  template: '<App/>',
  components: { App }
})
