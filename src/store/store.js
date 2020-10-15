import Vue from 'vue'
import Vuex  from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        
        isLogged:false,
        toggleForm:true,
        user: false
    },
    mutations:{
        SetToggleForm(state){
            state.toggleForm = !state.toggleForm
        },
        SetUser(state, newUser){
             state.user = newUser
             
             if(state.user){
                 state.isLogged = true
                 console.log(state.user)
             }else{
                 state.isLogged = false
             }
        },
        setLogOut(state){
            state.user = false
            state.isLogged = false
        }

    }
})