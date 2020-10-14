<template>

    <transition    
    name="form-create"    
    enter-active-class="animate__animated animate__zoomInDown"
    leave-active-class="animate__animated animate__zoomOutDown"
    >
        <div id="form-create" v-if="!isVisibleLogin">
            <div class="form-create-user">

                <form> 
                    <div class="group-form">
                        <label for="name">Name</label>
                        <input type="text" id="name" placeholder="Write your Name" v-model="user.name">
                    </div>

                    <div class="group-form">
                        <label for="lastname">Last Name</label>
                        <input type="text" id="lastname" placeholder="Write your last Name" v-model="user.lastName">
                    </div>

                    <div class="group-form">
                        <label for="email">Email</label>
                        <input type="text" id="email" placeholder="Write your Email" v-model="user.email">
                    </div>
                    <div class="group-form">
                        <label for="password">Password</label>
                        <input type="password" id="password" placeholder="Write your password" v-model="user.password">
                    </div> 

                    <div class="group-form">
                        <label for="confirm">Confirm Password</label>
                        <input type="password" id="confirm" placeholder="Confirm a password" v-model="user.confirm">
                    </div>
                    <button type="submit" class="btn-form" v-on:click.prevent="sendDataUSer">Submit </button>
                </form>

                 <div class="container-link">
                    <p class="form-link" ><span> Login</span></p>                    
                </div>

            </div>
            <!-- msg of error -->

            <div class="error error-empty" v-if="error.fieldEmpty">
                <p>Error: <span>Fields</span> is empty</p>
            </div>

             <div class="error " v-if="error.customError">
                <p>Error: {{ error.customError}} </p>
            </div>

             <div class="error msg-success" v-if="msgSuccess.created">
                <p> {{ msgSuccess.created }} </p>
            </div>

            <div class="error error-server" v-if="error.fetchError">
                <p>Error: <span>Server</span> down</p>
            </div>


        </div>

    </transition>


</template>

<script>

import {mapState} from 'vuex'

export default {
    name :"CreateUser",
    data(){
        return{
            user:{
                name:"",
                lastName:"",
                email:"",
                password:"",
                confirm:""
            },
            error:{
                fieldEmpty:false,
                fetchError: false,
                customError:false
            },
            msgSuccess:{
                created:false
            }

        }       
    },
    methods:{

        sendDataUSer(){

            this.clearMsg()
            
            this.error.customError = this.validationCreateUser()
        },

        validationCreateUser(){

            let user = this.user

            if(!(user.name.trim() && user.lastName.trim() && user.email.trim()
                && user.password.trim() && user.confirm.trim() ))
            {   
                this.error.fieldEmpty = true
                return
            }

            if(user.name.length < 3 || user.lastName.length < 3)
            {
                return `Name or lastname less than 3 letters`
            }
            else if((user.password.length < 4 && user.confirm.length < 4))
            {
                return `Password less than 4 char`
            }
            else if(!(user.password === user.confirm)){

                return `Password and confirm password is incorrect`
            }
            else{

                this.msgSuccess.created = `Successful Registration`
                this.fetchCreateUser()
                this.clearFieldCreate()
                return 
            }

        },

        fetchCreateUser(){
            let user = this.user
            fetch('http://localhost:3002/user',{ 
            method:'post',        
            body: JSON.stringify(user),
            headers:{"Content-type":"application/json"}
            })            
            .then(res=> res.json())
            .then(res => console.log(res))
            .catch(()=>this.error.fetchError = true) 
        },

        clearFieldCreate(){
            this.user.name = "",
            this.user.lastName = "",
            this.user.email = "",
            this.user.password = "",
            this.user.confirm = ""
        },
        clearMsg(){
            this.error.fieldEmpty = "",
            this.error.fetchError = "",
            this.error.customError = "",
            this.msgSuccess.created = ""
        }


    },
    computed:mapState(['isVisibleLogin'])

}
</script>

<style scoped>
#form-create{
    position:relative;

}
.form-create-user{
    position:absolute;
    top:100px;
    right: 50%;
    transform: translateX(50%);

    background: var(--greenDegrade);
    height:380px;
    width: 250px;

    border-radius:30px;
}
form{
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    align-items: center;
}
.group-form{
    margin-top:12px;
    display:flex;
    flex-direction:column;
    width: 180px;
}
.group-form > input{
    padding:5px;
    border-radius: 15px;
    outline: 0;
}
.group-form > label{
    color:white;
}
.btn-form{
    margin-top:20px;
    width: 100px;
    padding: 3px;
    border-radius: 10px;
}

.btn-form:hover{
    background-color:var(--dark);
    color:white;
}
.container-link{

      
}

.form-link{
    font-size: 16px;
    margin-left: 20px;  
    text-align: end; 
    margin-right: 20px;
    margin-top:12px;
    
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
  width:250px;

  border-radius:30px;
  display:flex;
  justify-content: center;
  align-items: center;

}
.error-empty{
    z-index: 1 ;
}
.msg-success{
    background-color:green
}

</style>