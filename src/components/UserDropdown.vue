<template>
  <div class="container-dropdown" v-if="isLogged">
      <div class="user-dropdown" >
          <span class="name-user">{{user.email}}</span>
          <div class="user-img"> <img src="@/assets/user1.jpeg" alt="user"> </div>          
      </div>

      <div class="menu-options" >
          <p v-on:click="logOut">Sair</p>
      </div>
  </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
    name:"UserDropdown",
    data(){
        return{
            
        }
    },
    methods:{
        logOut(){
            this.$store.commit('setLogOut')
        }
    },
    
    computed:{

        ...mapState(['isLogged','user'])
        
    }

}
</script>

<style scoped>
.container-dropdown{    
    position: relative;

    margin-left:auto;
    height: 100%;
    width: 150px;    
    
}
.user-dropdown{
    height: 100%;
    display:flex;
    justify-content: space-around;
    align-items: center;  
    
    border-radius:8px;     
}
.user-dropdown:hover {
    background-color:var(--discord);
    cursor: pointer;    

}


.user-img > img{

    height: 46px;
    width: 46px;
    border-radius:50%;

}
.name-user{

    color:white;
}

.menu-options{
    display:flex;
    justify-content: center;
    align-items: center;

    

    margin-left:20px;
    width: 80%;
    height: 70px;    
    border-radius:5px;
    box-shadow: 4px 4px 4px 4px black;
    color:black;
    background-color: var(--clearGreen);
    z-index: 1;
    
    margin-top:8px;

    visibility: hidden;
    opacity: 0;
    transition-duration: 0.6s;
}

.container-dropdown:hover .menu-options{
    visibility: visible;
    opacity: 1;
}
.menu-options > p{
    cursor: pointer;
    
}
</style>