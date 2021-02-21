<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
* {
	margin: 0;
	padding: 0;
}
img,input{
		display: block;
}
li {
	list-style: none;
}

a {
	text-decoration: none;
	color: #333;
	display: block;
}
div , ul , li , a , p{
	line-height: 1;
	box-sizing: border-box;
	color: #060303;
}
</style>
