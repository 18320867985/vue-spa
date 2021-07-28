<template>

	<div>

		<h3>Radio 单选框</h3>
		<h6>在一组备选项中进行单选</h6>
		<h5>要使用 Radio 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值，
			label可以是String、Number或Boolean。</h5>

		<el-radio v-model="radio" label="1">备选项</el-radio>
		<el-radio v-model="radio" label="2">备选项</el-radio>
		<p>选择的值: {{radio}} </p>

		<h3> 禁用状态</h3>
		<h6>单选框不可用的状态。</h6>

		<el-radio disabled v-model="radio2" label="禁用">备选项</el-radio>
		<el-radio disabled v-model="radio2" label="选中且禁用">备选项</el-radio>
		<p>选择的值: {{radio2}} </p>

		<h3>单选框组</h3>
		<h6>适用于在多个互斥的选项中选择的场景</h6>
		<el-radio-group v-model="radio3">
			<el-radio :label="3">备选项</el-radio>
			<el-radio :label="6">备选项</el-radio>
			<el-radio :label="9">备选项</el-radio>
		</el-radio-group>

		<p>选择的值: {{radio3}} </p>

		<h3> 按钮样式</h3>
		<h6>按钮样式的单选组合。</h6>
		<el-radio-group v-model="city">
			<el-radio-button label="上海"></el-radio-button>
			<el-radio-button label="北京"></el-radio-button>
			<el-radio-button label="广州"></el-radio-button>
			<el-radio-button label="深圳"></el-radio-button>
		</el-radio-group>
		<p>选择的值: {{city}} </p>

		<div style="margin-top: 20px">
			<el-radio-group v-model="city2" size="medium">
				<el-radio-button label="上海"></el-radio-button>
				<el-radio-button label="北京"></el-radio-button>
				<el-radio-button label="广州"></el-radio-button>
				<el-radio-button label="深圳"></el-radio-button>
			</el-radio-group>
		<p>选择的值: {{city2}} </p>
		</div>
		  <div style="margin-top: 20px">
		    <el-radio-group v-model="city3" size="small">
		      <el-radio-button label="上海"></el-radio-button>
		      <el-radio-button label="北京" disabled ></el-radio-button>
		      <el-radio-button label="广州"></el-radio-button>
		      <el-radio-button label="深圳"></el-radio-button>
		    </el-radio-group>
			<p>选择的值: {{city3}} </p>
		  </div>
		  
		   <div style="margin-top: 20px">
		      <el-radio-group v-model="city4"  disabled size="mini">
		        <el-radio-button label="上海"></el-radio-button>
		        <el-radio-button label="北京"></el-radio-button>
		        <el-radio-button label="广州"></el-radio-button>
		        <el-radio-button label="深圳"></el-radio-button>
		      </el-radio-group>
		    </div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				radio: "1",
				radio2: "选中且禁用",
				radio3: 3,
				city: "上海",
				city2: "北京",
				city3: "广州",
				city4: "深圳"
			}
		},

	}
</script>

<style>

</style>
