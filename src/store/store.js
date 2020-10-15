import Vue from 'vue'
import Vuex  from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        
        isLogged:false,
        toggleForm:true,
        user:""
    },
    mutations:{
        SetToggleForm(state){
            state.toggleForm = !state.toggleForm
        },
        SetUser(state, newUser){
            state.user = newUser
        }

    }
})