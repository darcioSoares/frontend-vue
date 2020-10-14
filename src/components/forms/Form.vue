<template>
  <div id="form">

      <FormLogin />
      <FormCreate />

  </div>
</template>

<script>

import FormLogin from '@/components/forms/FormLogin'
import FormCreate from '@/components/forms/FormCreateUser'

export default {
    name:"Form",
    components:{
        FormLogin, FormCreate
    }

}
</script>

<style scoped>

#form{
   
}

</style>