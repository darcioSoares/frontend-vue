<template>
  <div id="app">
    <Layout />

  </div>
</template>

<script>
import Layout from '@/components/templates/Layout'

export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style>
*{
  margin:0px;
  padding:0px;
  box-sizing: border-box;
}
:root{
  --green: #1DE9B6;
  --grey: #9E9E9E;
  --blueBaby: #00E5FF;
  --greenGram: #66BB6A;
  --darklight: #1F2D40;
  --dark: #17212F;
  --clearGreen: #69F0AE;
  --discord: #6e86d6;
  --greenDegrade: linear-gradient(to right, #00bf8f, #001510);

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100vh;
 
}
</style>
