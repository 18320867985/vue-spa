<template>
	<div class="link">
		<h3>Link 文字链接</h3>
		<h6>文字超链接</h6>

		<h4>基础用法</h4>
		<h6>基础的文字链接用法。</h6>
		<el-link target="_blank"><router-link to="/btn" >默认链接</router-link> </el-link>
		<el-link type="primary"><router-link to="/" >
		返回登陆</router-link></el-link>
		<el-link type="success">成功链接</el-link>
		<el-link type="warning">警告链接</el-link>
		<el-link type="danger">危险链接</el-link>
		<el-link type="info">信息链接</el-link>
		
		<pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
		    <span class="hljs-tag">&lt;<span class="hljs-name">el-link</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"https://element.eleme.io"</span> <span class="hljs-attr">target</span>=<span class="hljs-string">"_blank"</span>&gt;</span>默认链接<span class="hljs-tag">&lt;/<span class="hljs-name">el-link</span>&gt;</span>
		    <span class="hljs-tag">&lt;<span class="hljs-name">el-link</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>主要链接<span class="hljs-tag">&lt;/<span class="hljs-name">el-link</span>&gt;</span>
		    <span class="hljs-tag">&lt;<span class="hljs-name">el-link</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span>&gt;</span>成功链接<span class="hljs-tag">&lt;/<span class="hljs-name">el-link</span>&gt;</span>
		    <span class="hljs-tag">&lt;<span class="hljs-name">el-link</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span>&gt;</span>警告链接<span class="hljs-tag">&lt;/<span class="hljs-name">el-link</span>&gt;</span>
		    <span class="hljs-tag">&lt;<span class="hljs-name">el-link</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"danger"</span>&gt;</span>危险链接<span class="hljs-tag">&lt;/<span class="hljs-name">el-link</span>&gt;</span>
		    <span class="hljs-tag">&lt;<span class="hljs-name">el-link</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"info"</span>&gt;</span>信息链接<span class="hljs-tag">&lt;/<span class="hljs-name">el-link</span>&gt;</span>
		  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
		  </code></pre>

	</div>
</template>

<script>
	export default {
		data() {
			return {}
		}
	}
</script>

<style>

</style>
