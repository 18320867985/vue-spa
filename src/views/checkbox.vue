<template>
	<div class="">
		<h3>Checkbox 多选框</h3>
		<h6>一组备选项中进行多选</h6>

		<h3>基础用法</h3>
		<h6>单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。</h6>
		<h5>在el-checkbox元素中定义v-model绑定变量，单一的checkbox中，默认绑定变量的值会是Boolean，选中为true。</h5>
		<!-- `checked` 为 true 或 false -->
		<el-checkbox v-model="checked">备选项</el-checkbox>
		<p>{{checked}}</p>

		<h3>禁用状态</h3>
		<h6>多选框不可用状态。</h6>
		<h6>设置disabled属性即可。</h6>
		<el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
		<el-checkbox v-model="checked2" disabled>备选项</el-checkbox>

		<h3>多选框组</h3>
		<h6>适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。</h6>
		<p>checkbox-group元素能把多个 checkbox 管理为一组，只需要在 Group
			中使用v-model绑定Array类型的变量即可。
			el-checkbox 的 label属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox
			按钮后的介绍。label与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。</p>

		<el-checkbox-group v-model="checkList">
			<el-checkbox label="复选框 A"></el-checkbox>
			<el-checkbox label="复选框 B"></el-checkbox>
			<el-checkbox label="复选框 C"></el-checkbox>
			<el-checkbox label="禁用" disabled></el-checkbox>
			<el-checkbox label="选中且禁用" disabled></el-checkbox>
		</el-checkbox-group>
		<p>选择的值：{{checkList}}</p>

		<h3>indeterminate 状态</h3>
		<h6>indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果</h6>

		<el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
		<div style="margin: 15px 0;"></div>
		<el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
			<el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
		</el-checkbox-group>
		<p>选择的值：{{checkedCities}}</p>

	</div>
</template>

<script>
	const cityOptions = ['上海', '北京', '广州', '深圳'];
	export default {
		data() {
			return {
				checked: true,
				checked1: false,
				checked2: true,
				checkList: ['选中且禁用', '复选框 A'],
				checkAll: false,
				checkedCities: ['上海', '北京'],
				cities: cityOptions,
				isIndeterminate: true
			}
			
		},
		methods:{
			handleCheckAllChange(val) {
				this.checkedCities = val ? cityOptions : [];
				this.isIndeterminate = false;
			},
			handleCheckedCitiesChange(value) {
				let checkedCount = value.length;
				this.checkAll = checkedCount === this.cities.length;
				this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
			}
		}

	}
</script>

<style>

</style>
