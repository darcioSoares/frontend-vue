import Vue from 'vue'
import Vuex  from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        
        isLogged:true,
        isVisibleForm:true,
        
        user:{
            name:"Barbosa",
            email:"Jon@cat"
        }
    },
    mutations:{
        SetIsVisibleForm(state){
            state.isVisibleForm = !state.isVisibleForm
        }

    }
})