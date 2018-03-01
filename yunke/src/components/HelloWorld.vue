<template>
  <div class="hello">
  	<v-top></v-top>
  	<div class="wrap">
  		<router-view></router-view>
  	</div>
  	<v-bot></v-bot>
  </div>
</template>

<script>

import top from './top.vue'
import bot from './bot.vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
  	'v-top':top,
  	'v-bot':bot
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
body{
	background: #f1f1f1 !important;
}
.container{
	padding: 0 !important;
}
.wrap{
		margin-top: 80px;
		color: #333;
		font-size: 16px;
		/*text-align: center;*/
	}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
