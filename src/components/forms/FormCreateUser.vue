<template>

    <transition    
    name="form-create"    
    enter-active-class="animate__animated animate__zoomInDown"
    leave-active-class="animate__animated animate__zoomOutDown"
    >
        <div id="form-create" v-if="false">
            <div class="form-create-user">

                <form> 
                    <div class="group-form">
                        <label for="name">Name</label>
                        <input type="text" id="name" placeholder="Write your Name">
                    </div>

                    <div class="group-form">
                        <label for="lastname">Last Name</label>
                        <input type="text" id="lastname" placeholder="Write your last Name">
                    </div>

                    <div class="group-form">
                        <label for="email">Email</label>
                        <input type="text" id="email" placeholder="Write your Email">
                    </div>
                    <div class="group-form">
                        <label for="password">Password</label>
                        <input type="text" id="password" placeholder="Write your password">
                    </div> 

                    <div class="group-form">
                        <label for="confirm">Confirm Password</label>
                        <input type="text" id="confirm" placeholder="Confirm a password">
                    </div>
                    <button type="submit" class="btn-form">Submit </button>
                </form>

                 <div class="container-link">
                    <p class="form-link" ><span> Login</span></p>                    
                </div>

            </div>

        </div>

    </transition>


</template>

<script>
export default {

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


</style>