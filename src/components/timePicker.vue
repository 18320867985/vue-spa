<template>
	<div>
		<h3>TimePicker 时间选择器</h3>
		<h6>用于选择或输入日期</h6>
		<el-time-select
		  v-model="value"
		  :picker-options="{
		    start: '08:30',
		    step: '00:15',
		    end: '18:30'
		  }"
		  placeholder="选择时间" >
		</el-time-select>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{ value: ''}
		}
	}
	
</script>

<style>
	
</style>
