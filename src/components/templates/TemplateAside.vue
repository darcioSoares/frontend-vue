<template>
  <aside id="aside">
     
  </aside>
</template>

<script>

import {mapState} from 'vuex'

export default {
    name:"Aside",
    data(){
      return{

      }
    },
    computed:mapState(['isLogged'])
}
</script>

<style scoped>
#aside{
    grid-area: aside;
   
    background-color: var(--clearGreen);
}

</style>