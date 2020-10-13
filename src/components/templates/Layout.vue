<template>
  <div class="layout" v-bind:class="{'isVisibleMenu':isVisibleMenu }">

      <Header/>
      <Aside />
      <Main />
      <Footer />

  </div>
</template>

<script>

import Header from "@/components/templates/TemplateHeader"
import Aside from "@/components/templates/TemplateAside"
import Main from "@/components/templates/TemplateMain"
import Footer from "@/components/templates/TemplateFooter"

export default {
    name:"Layout",
    components:{
        Header, Aside,Main,Footer
    },
    data(){
        return{
            isVisibleMenu:true
        }
    }

}
</script>

<style scoped>
.layout{
    height: 100vh;
    width: 100vw;

    display:grid;
    grid-template-columns: 15% 1fr;
    grid-template-rows: 8% 1fr 6% ;
    grid-template-areas: 
    "header header"
    "aside main"
    "aside footer";    

}
.isVisibleMenu{
    grid-template-areas:
    "header header"
    "main main"
    "footer footer"
}

</style>