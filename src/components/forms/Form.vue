<template>
  <div id="form" v-if="!isLogged">

      <FormLogin />
      <FormCreate />

  </div>
</template>

<script>

import {mapState} from 'vuex'

import FormLogin from '@/components/forms/FormLogin'
import FormCreate from '@/components/forms/FormCreateUser'

export default {
    name:"Form",
    components:{
        FormLogin, FormCreate
    },
    computed:mapState(['isLogged'])

}
</script>

<style scoped>

#form{
   
}

</style>