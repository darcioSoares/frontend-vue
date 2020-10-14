<template>

    <transition  
        name="isVisibleForm"
        :duration = "{enter:1000, leave:800}"
        enter-active-class="animate__animated animate__rotateIn"
       leave-active-class="animate__animated animate__flip"
    >
    <!-- animation -->

        <div id="form-login" v-if="true" >

            <div class="form-login-user" >
                <form >

                    <div class="group-form">
                        <label for="email">Email</label>
                        <input type="text" id="email" placeholder="Write your email">        
                    </div>

                    <div class="group-form">
                        <label for="password">Password</label>
                        <input type="text" id="password" placeholder="Write your password">
                    </div>

                    <button type="submit" class="btn-form"> Submit</button>

                </form>

                <div class="container-link">
                    <p class="form-link" ><span> Register</span></p>
                    <p class="form-link" ><span> Recover Password</span></p>
                </div>

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
    margin-left: 20px;   

    
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

</style>