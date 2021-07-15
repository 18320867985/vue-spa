<template>
	<div style="width: 50%;">
		<h3>Input 输入框</h3>
		<h6>通过鼠标或键盘输入字符</h6>
		<el-input v-model="input" placeholder="请输入内容"></el-input>
		<p>输入的值：{{input}}</p>
		<pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">el-input</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"input"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入内容"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-input</span>&gt;</span>
		
		<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
		<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
		  data() {
		    <span class="hljs-keyword">return</span> {
		      <span class="hljs-attr">input</span>: <span class="hljs-string">''</span>
		    }
		  }
		}
		</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
		</code></pre>

		<h3>禁用状态</h3>
		<h6>通过 disabled 属性指定是否禁用 input 组件</h6>
		<el-input placeholder="请输入内容" v-model="input2" clearable>
		</el-input>
		<code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">el-input</span>
				<span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入内容"</span>
				<span class="hljs-attr">v-model</span>=<span class="hljs-string">"input"</span>
				<span class="hljs-attr">:disabled</span>=<span class="hljs-string">"true"</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">el-input</span>&gt;</span>

			<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
				<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
				data() {
				<span class="hljs-keyword">return</span> {
				<span class="hljs-attr">input</span>: <span class="hljs-string">''</span>
				}
				}
				}
			</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
		</code>

		<h3>尺寸</h3>
		<p>可通过 size 属性指定输入框的尺寸，除了默认的大小外，还提供了 large、small 和 mini 三种尺寸。</p>
		<div class="demo-input-size">
			<el-input placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input1">
			</el-input>
			<el-input size="medium" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input2">
			</el-input>
			<el-input size="small" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input3">
			</el-input>
			<el-input  size="mini" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input4">
			</el-input>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				input: "",
				input1: '',
				input2: '',
				input3: '',
				input4: ''
			}
		}
	}
</script>

<style scoped="">
	.el-input{margin-bottom: 10px;}

</style>
