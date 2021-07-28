<template>
	<div>
		<el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
		<h6>要使用它，只需要在el-input-number元素中使用v-model绑定变量即可，变量的初始值即为默认值。</h6>

		<h3>尺寸</h3>
		<p>额外提供了 medium、small、mini 三种尺寸的数字输入框</p>
		<el-input-number v-model="num1"></el-input-number>
		<el-input-number size="medium" v-model="num2"></el-input-number>
		<el-input-number size="small" v-model="num3"></el-input-number>
		<el-input-number size="mini" v-model="num4"></el-input-number>
		
		<pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
		  <span class="hljs-tag">&lt;<span class="hljs-name">el-input-number</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"num1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-input-number</span>&gt;</span>
		  <span class="hljs-tag">&lt;<span class="hljs-name">el-input-number</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"medium"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"num2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-input-number</span>&gt;</span>
		  <span class="hljs-tag">&lt;<span class="hljs-name">el-input-number</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"num3"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-input-number</span>&gt;</span>
		  <span class="hljs-tag">&lt;<span class="hljs-name">el-input-number</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"mini"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"num4"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-input-number</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
		  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
		    data() {
		      <span class="hljs-keyword">return</span> {
		        <span class="hljs-attr">num1</span>: <span class="hljs-number">1</span>,
		        <span class="hljs-attr">num2</span>: <span class="hljs-number">1</span>,
		        <span class="hljs-attr">num3</span>: <span class="hljs-number">1</span>,
		        <span class="hljs-attr">num4</span>: <span class="hljs-number">1</span>
		      }
		    }
		  };
		</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
		</code></pre>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				num1: 1,
				num2: 1,
				num3: 1,
				num4: 1
			}
		}
	}
</script>

<style scoped="">

.el-input-number {
	margin-left: 10px;
}
</style>
