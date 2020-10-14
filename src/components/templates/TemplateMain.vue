<template>
  <main id="main">
      <Form />
  </main>
</template>

<script>

import Form from "@/components/forms/Form"

export default {
    name:"Main",
    components:{
        Form
    }
}
</script>

<style scoped>
#main{
    grid-area: main;  
    background-color:var(--darklight);
    

}

</style>