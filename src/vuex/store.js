import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
//状态
const state = {
    //用户信息
    userInfo:{
        username:'',
        nickname:''
    }
}
//mutations
const mutations = {
  changeUserInfo(state,userinfo){
      state.userInfo = userinfo
  }

}


//引入actions
import actions from './actions'
//创建store  
const store = new Vuex.Store({
    state,mutations,actions
})



export default store