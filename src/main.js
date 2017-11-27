// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)
//以上为ElementUI组件库使用方法

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
//以上为MintUI组件的使用方法

//icon
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon',Icon)

//animate.css
import 'animate.css';

//swiper
import 'swiper/dist/css/swiper.min.css';
import Swiper from 'swiper';

import store from './vuex/store'
Vue.config.productionTip = false//去掉生产提示
/* eslint-disable no-new */
new Vue({//根实例
  el: '#app',
  router,//在任意组件中都可以通过this.$router/this.$route用到和路由相关的属性和方法
  store,
  template: '<App/>',// 根实例的模板变成了根组件，所以这时，根实例ヘ根组件合二为一
  components: { App }
})

