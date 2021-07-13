<template>
	
	<el-container class="index" ref="index">
			<el-header class="index-h">
				<div>
					<div class="fr">	<a href="#" @click="logout">退出登录</a>	</div>
					<img src="../assets/logo.png" alt="Alternate Text" />
					Vue 开发和演示
				</div>
			</el-header>
			<el-container class="index-cnt">
				<div class="index-aside">
					<el-aside>
						<el-menu :default-openeds="['1']">
							<el-submenu index="1">
								<template slot="title"><i class="el-icon-message"></i>组件-Basic </template>
								<el-menu-item-group>
	
									<router-link index="1-1" class=" el-menu-item" to="/admin"
										active-class="is-active " tag="li" exact>
										Layout布局
									</router-link>
									<router-link index="1-1" class="el-menu-item" to="/container"
										active-class="is-active " tag="li" >
										布局容器
									</router-link>
	
	
									<router-link index="1-1" class=" el-menu-item" to="/btn"
										active-class="is-active " tag="li" >
										按钮
									</router-link>
									<router-link index="1-1" class=" el-menu-item" to="/icon"
										active-class="is-active " tag="li" >
										Icon 图标
									</router-link>
									<router-link index="1-1" class=" el-menu-item" to="/link"
										active-class="is-active " tag="li" >
										Link 文字链接
									</router-link>
	
								</el-menu-item-group>
	
							</el-submenu>
							<el-submenu index="2">
								<template slot="title"><i class="el-icon-message"></i>组件-Form</template>
								<el-menu-item-group>
	
									<el-menu-item index="1-1">选项1</el-menu-item>
									<el-menu-item index="1-2">选项2</el-menu-item>
								</el-menu-item-group>
								<el-menu-item-group title="分组2">
									<el-menu-item index="1-3">选项3</el-menu-item>
								</el-menu-item-group>
	
							</el-submenu>
							<el-submenu index="3">
								<template slot="title"><i class="el-icon-message"></i>组件-Data</template>
								<el-menu-item-group>
	
									<el-menu-item index="1-1">选项1</el-menu-item>
									<el-menu-item index="1-2">选项2</el-menu-item>
								</el-menu-item-group>
								<el-menu-item-group title="分组2">
									<el-menu-item index="1-3">选项3</el-menu-item>
								</el-menu-item-group>
	
							</el-submenu>
	
						</el-menu>
					</el-aside>
				</div>
	
				<div class="index-main">
					<el-main>
						<router-view></router-view>
					</el-main>
				</div>
	
			</el-container>
		</el-container>
	
</template>

<script>
	export default{
		data(){
			return{
				admin:"admin"
			}
		},
		methods:{
			logout(){
				this.$router.push("/login")
			}
		},
		
		mounted(){
			
			// 设置 iframe 高度
			var $el=document.querySelector(".index");
			resetWidth();	
			window.onresize=function(){
				 resetWidth();
			}
			function resetWidth(){
				  var win_h=$el.offsetHeight;
				  var h_w=$el.querySelector(".index-h").offsetHeight;
				  document.querySelector(".index-cnt").style.height=win_h-h_w+"px";
			}
		}
	}
	
</script>

<style>
	
</style>
