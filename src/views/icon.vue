<template>
	<div class="icon">
		<h3>Icon 图标</h3>
		<h5>提供了一套常用的图标集合。</h5>
		<h3>使用方法</h3>
		<h5>直接通过设置类名为 el-icon-iconName 来使用即可。例如：</h5>
		<div class="i-box">
			<i class="el-icon-edit"></i>
			<i class="el-icon-share"></i>
			<i class="el-icon-delete"></i>
		</div>
		
		<el-button type="primary" icon="el-icon-search">搜索</el-button>
	
		<pre><code class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-edit"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-share"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-delete"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">"el-icon-search"</span>&gt;</span>搜索<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
		
		</code></pre>
		
	</div>
</template>

<script>
</script>

<style>
	.i-box{display: inline-block;}
	.i-box i{	
		font-size: 18px;
		margin:  0 20px;
	}
</style>
