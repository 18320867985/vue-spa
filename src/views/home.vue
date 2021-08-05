<template>
	<div>
		<h1>home</h1>
	</div>
</template>

<script>
	
	export default{
		data(){
			return{}
		},
		created(){
			console.log("000")
			 this.$http.post('http://47.119.141.27:60089/mhyAccout/query')
			//this.$http.get("http://47.119.141.27:60089/mhyAccout/query")
		}
	}
	
</script>

<style>
	
</style>
