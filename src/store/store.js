import Vue from 'vue'
import Vuex  from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        isVisibleMenu:false,
        isVisibleLogin:true,
    },
    mutations:{
        SetIsVisibleLogin(state, value){
            state.isVisibleLogin = value
        }

    }
})