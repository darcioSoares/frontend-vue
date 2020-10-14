import Vue from 'vue'
import Vuex  from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        isVisibleMenu:true,
        isVisibleLogin:false,
    },
    mutations:{
        SetIsVisibleLogin(state){
            state.isVisibleLogin = !state.isVisibleLogin
        }

    }
})