<template>
  <header id="header">

    <UserDropdown />
      
  </header>
</template>

<script>

import UserDropdown from "../UserDropdown"

export default {
    name:"Header",
    components:{
      UserDropdown
    }
}
</script>

<style scoped>
#header{
    grid-area: header;    
    background: var(--greenDegrade);

    /* border-bottom: 1px solid var(--discord); */

    box-shadow: 20px 15px 15px 20px black;

}

</style>