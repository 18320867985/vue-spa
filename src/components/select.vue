<template>
	<div>
		<h3>Select 选择器</h3>
		<h6>当选项过多时，使用下拉菜单展示并选择内容。</h6>
		<el-select v-model="value" placeholder="请选择" >
			<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
			</el-option>
		</el-select>
		<p>{{value}}</p>
		<p>v-model的值为当前被选中的el-option的 value 属性值</p>
		<pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
		  <span class="hljs-tag">&lt;<span class="hljs-name">el-select</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value"</span> <span class="hljs-attr">clearable</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请选择"</span>&gt;</span>
		    <span class="hljs-tag">&lt;<span class="hljs-name">el-option</span>
		      <span class="hljs-attr">v-for</span>=<span class="hljs-string">"item in options"</span>
		      <span class="hljs-attr">:key</span>=<span class="hljs-string">"item.value"</span>
		      <span class="hljs-attr">:label</span>=<span class="hljs-string">"item.label"</span>
		      <span class="hljs-attr">:value</span>=<span class="hljs-string">"item.value"</span>&gt;</span>
		    <span class="hljs-tag">&lt;/<span class="hljs-name">el-option</span>&gt;</span>
		  <span class="hljs-tag">&lt;/<span class="hljs-name">el-select</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
		
		<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
		  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
		    data() {
		      <span class="hljs-keyword">return</span> {
		        <span class="hljs-attr">options</span>: [{
		          <span class="hljs-attr">value</span>: <span class="hljs-string">'选项1'</span>,
		          <span class="hljs-attr">label</span>: <span class="hljs-string">'黄金糕'</span>
		        }, {
		          <span class="hljs-attr">value</span>: <span class="hljs-string">'选项2'</span>,
		          <span class="hljs-attr">label</span>: <span class="hljs-string">'双皮奶'</span>
		        }, {
		          <span class="hljs-attr">value</span>: <span class="hljs-string">'选项3'</span>,
		          <span class="hljs-attr">label</span>: <span class="hljs-string">'蚵仔煎'</span>
		        }, {
		          <span class="hljs-attr">value</span>: <span class="hljs-string">'选项4'</span>,
		          <span class="hljs-attr">label</span>: <span class="hljs-string">'龙须面'</span>
		        }, {
		          <span class="hljs-attr">value</span>: <span class="hljs-string">'选项5'</span>,
		          <span class="hljs-attr">label</span>: <span class="hljs-string">'北京烤鸭'</span>
		        }],
		        <span class="hljs-attr">value</span>: <span class="hljs-string">''</span>
		      }
		    }
		  }
		</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
		</code></pre>
		
		<h3>基础多选</h3>
		<h6>适用性较广的基础多选，用 Tag 展示已选项</h6>
		  <el-select v-model="value1" multiple placeholder="请选择">
		    <el-option
		      v-for="item in options"
		      :key="item.value"
		      :label="item.label"
		      :value="item.value">
		    </el-option>
		  </el-select>
		
		  <el-select
		    v-model="value2"
		    multiple
		    collapse-tags
		    style="margin-left: 20px;"
		    placeholder="请选择">
		    <el-option
		      v-for="item in options"
		      :key="item.value"
		      :label="item.label"
		      :value="item.value">
		    </el-option>
		  </el-select>
		  
		  <p><span>value1:{{value1}}</span> <span>value2:{{value2}}</span></p>
		  <p>为el-select设置multiple属性即可启用多选，此时v-model的值为当前选中值所组成的数组。默认情况下选中值会以 Tag 的形式展现，你也可以设置collapse-tags属性将它们合并为一段文字。</p>
		<pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
		  <span class="hljs-tag">&lt;<span class="hljs-name">el-select</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value1"</span> <span class="hljs-attr">multiple</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请选择"</span>&gt;</span>
		    <span class="hljs-tag">&lt;<span class="hljs-name">el-option</span>
		      <span class="hljs-attr">v-for</span>=<span class="hljs-string">"item in options"</span>
		      <span class="hljs-attr">:key</span>=<span class="hljs-string">"item.value"</span>
		      <span class="hljs-attr">:label</span>=<span class="hljs-string">"item.label"</span>
		      <span class="hljs-attr">:value</span>=<span class="hljs-string">"item.value"</span>&gt;</span>
		    <span class="hljs-tag">&lt;/<span class="hljs-name">el-option</span>&gt;</span>
		  <span class="hljs-tag">&lt;/<span class="hljs-name">el-select</span>&gt;</span>
		
		  <span class="hljs-tag">&lt;<span class="hljs-name">el-select</span>
		    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value2"</span>
		    <span class="hljs-attr">multiple</span>
		    <span class="hljs-attr">collapse-tags</span>
		    <span class="hljs-attr">style</span>=<span class="hljs-string">"margin-left: 20px;"</span>
		    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请选择"</span>&gt;</span>
		    <span class="hljs-tag">&lt;<span class="hljs-name">el-option</span>
		      <span class="hljs-attr">v-for</span>=<span class="hljs-string">"item in options"</span>
		      <span class="hljs-attr">:key</span>=<span class="hljs-string">"item.value"</span>
		      <span class="hljs-attr">:label</span>=<span class="hljs-string">"item.label"</span>
		      <span class="hljs-attr">:value</span>=<span class="hljs-string">"item.value"</span>&gt;</span>
		    <span class="hljs-tag">&lt;/<span class="hljs-name">el-option</span>&gt;</span>
		  <span class="hljs-tag">&lt;/<span class="hljs-name">el-select</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
		
		<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
		  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
		    data() {
		      <span class="hljs-keyword">return</span> {
		        <span class="hljs-attr">options</span>: [{
		          <span class="hljs-attr">value</span>: <span class="hljs-string">'选项1'</span>,
		          <span class="hljs-attr">label</span>: <span class="hljs-string">'黄金糕'</span>
		        }, {
		          <span class="hljs-attr">value</span>: <span class="hljs-string">'选项2'</span>,
		          <span class="hljs-attr">label</span>: <span class="hljs-string">'双皮奶'</span>
		        }, {
		          <span class="hljs-attr">value</span>: <span class="hljs-string">'选项3'</span>,
		          <span class="hljs-attr">label</span>: <span class="hljs-string">'蚵仔煎'</span>
		        }, {
		          <span class="hljs-attr">value</span>: <span class="hljs-string">'选项4'</span>,
		          <span class="hljs-attr">label</span>: <span class="hljs-string">'龙须面'</span>
		        }, {
		          <span class="hljs-attr">value</span>: <span class="hljs-string">'选项5'</span>,
		          <span class="hljs-attr">label</span>: <span class="hljs-string">'北京烤鸭'</span>
		        }],
		        <span class="hljs-attr">value1</span>: [],
		        <span class="hljs-attr">value2</span>: []
		      }
		    }
		  }
		</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
		</code></pre>
		

	</div>
</template>

<script>
	export default {
		data() {
			return {
				value: "",
				 value1: [],
				  value2: [],
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶',
					disabled: true
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
			}
		}
	}
</script>

<style>

</style>
