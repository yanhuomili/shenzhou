<template>
  <div id="app">
  	<hello></hello>
  </div>
</template>

<script>
import hello from './components/HelloWorld.vue'
export default {
  name: 'app',
  components:{
  	Hello:hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
