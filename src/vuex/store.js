
import Vue from 'Vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

const state = {
    userInfo:{
        username:'',
        password:''
    }
}



import actions from './actions'

const store = new Vuex.Store({
    state,actions
})

export default store