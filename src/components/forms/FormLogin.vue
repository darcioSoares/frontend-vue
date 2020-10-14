<template>

    <transition  
        name="isVisibleForm"
        :duration = "{enter:1000, leave:800}"
        enter-active-class="animate__animated animate__heartBeat"
       leave-active-class="animate__animated animate__heartBeat"
    >
    <!-- animation -->

        <div id="form-login" v-if="isVisibleLogin" >

            <div class="form-login-user" >
                <form >

                    <div class="group-form">
                        <label for="email">Email</label>
                        <input type="text" id="email"
                         placeholder="Write your email" v-model="login.email">        
                    </div>

                    <div class="group-form">
                        <label for="password">Password</label>
                        <input type="password" id="password" 
                         placeholder="Write your password" v-model="login.password">
                    </div>

                    <button type="submit" class="btn-form" v-on:click.prevent="validatorFieldLogin"> Submit</button>

                </form>

                <div class="container-link">
                    <p class="form-link" v-on:click="alterForms" ><span> Register</span></p>
                    <p class="form-link" ><span> Recover Password</span></p>
                </div>

            </div>

            <!-- msg of error -->

            <div class="error error-empty" v-if="error.fieldEmpty">
                <p>Error: <span>Fields</span> is empty</p>
            </div>

            <div class="error error-password" v-if="error.password">
                <p>Error: incorrect <span>Password</span> </p>
            </div>

             <div class="error error-email" v-if="error.email">
                <p>Error: <span>Email</span> not found</p>
            </div>

            <div class="error " v-if="error.customError">
                <p> {{error.customError}} </p>
            </div>

        </div>

    </transition>

</template>

<script>

import {mapState} from 'vuex'

export default {
    name:"Login",
    data(){
        return{
            login:{
                email:"",
                password:""
            },
            error:{
                fetchError:false,
                fieldEmpty:false,
                password:false,
                email:false,
                customError:false
            },

        }
    },
    methods:{
        alterForms(){

            let value = !(this.teste )
            
            this.$store.commit('SetIsVisibleLogin', value)
        },


        validatorFieldLogin(){

            this.clearError()
            

            if(!(this.login.email.trim() && this.login.password.trim())){

                this.error.fieldEmpty = true
            }
            

            if(this.login.email.length < 6){     

                this.error.customError = `Error: Email less than 6`
            }
            else if(this.login.password.length < 4){

                this.error.customError = `Error: Password less than 4`
            }
            

           // this.clearField()

            



        },

         fetchLogin(){
            let user = this.login
            fetch('http://localhost:3002/user',{ 
            method:'post',        
            body: JSON.stringify(user),
            headers:{"Content-type":"application/json"}
            })            
            .then(res=> res.json())
            .then(res => console.log(res))
            .catch(()=>this.error.fetchError = true) 
        },

        clearField(){
            this.login.email = ""
            this.login.password = ""
        },

        clearError(){
            this.error.fetchError = false
            this.error.fieldEmpty = false
            this.error.password = false
            this.error.email = false
            this.error.customError = false

        }

    },

    computed:mapState(['isVisibleLogin'])
    
}
</script>

<style scoped>

#form-login{

    position:relative;
    
   
}
.form-login-user{
    position: absolute;
    top: 100px;    
    right: 50%;
    transform: translateX(50%);

    background:var(--greenDegrade);
    height: 210px;
    width: 250px;

    border-radius:30px;

    
}
form{
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

}
.group-form{
    margin-top:12px;
    display: flex;
    flex-direction: column;
    width: 180px;
}
.group-form > input{
    padding:5px;
    border-radius: 15px;
    outline: 0
}
.group-form > label {
    color:white;
}
.btn-form{
    margin-top:20px;
    width: 100px;
    padding:3px;
    border-radius: 10px;
}
.btn-form:hover{
    background-color:var(--dark);
    color:white;
}

.form-link{
    font-size: 15px;
    margin-left: 8px;   

    
}
.container-link{

    display:flex;
    justify-content:space-around;

    margin-top: 20px;    
}
.form-link:hover{
    color:white;
    cursor: pointer;
}
.error{
  position:absolute;

  top: 30px;    
  right: 50%;
  transform: translateX(50%);
  background-color:red;
  color:white;
  height: 60px;
  width:230px;

  border-radius:30px;
  display:flex;
  justify-content: center;
  align-items: center;

}
.error-empty{
    z-index: 2  ;

}

</style>