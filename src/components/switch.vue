<template>
	<div>
		<h3>Switch</h3>
		<h6>表示两种相互对立的状态间的切换，多用于触发「开/关」</h6>
		<el-switch
		  v-model="value"
		  active-color="#13ce66"
		  inactive-color="#ff4949">
		</el-switch>
		<p>绑定v-model到一个Boolean类型的变量。可以使用active-color属性与inactive-color属性来设置开关的背景色。</p>
	</div>
</template>

<script>
	export default{
		data(){
			return{value:true}
		}
	}
	
</script>

<style>
	
</style>
