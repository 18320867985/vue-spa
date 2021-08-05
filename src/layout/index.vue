<template>

	<el-container class="index" ref="index">
		<el-header class="index-h">
			<div>
				<i class="index-h-icon " @click="isCollapse=!isCollapse" :class="isCollapse?'el-icon-s-unfold ':'el-icon-s-fold'"></i>
				<div class="fr">
					  <el-button size="small" @click="centerDialogVisible = true"  round>退出登录</el-button>
				</div>
				<img src="../assets/logo.png" alt="Alternate Text" />
				结算中心-管理系统  
			</div>
		</el-header>
		<el-container class="index-cnt">
			<el-scrollbar wrap-class="scrollbar-wrapper" class="index-cnt-aside " :class="{'open':!isCollapse}">
				<el-aside class="index-aside"  :class="{'open':!isCollapse}">
					<!--导航菜单-->
					<el-menu :default-active="$route.path" :collapse="isCollapse" >
							<el-submenu v-for="(item,index) in $router.options.routes" :index="index+''"  :key="index"  :hidden="item.hidden" >
								<template slot="title"><i :class="item.icon"></i> <span slot="title">{{item.ttl}} </span> </template>
								
								<el-menu-item-group  >
														
									<router-link :index="index+'-'+index2" class=" el-menu-item" :to="child.path?item.path+'/'+child.path:item.path" active-class="is-active"  v-for="(child,index2) in item.children"  :key="child.path" tag="li"
										exact>
											{{child.ttl}}
									</router-link>
									
								</el-menu-item-group>
							
							</el-submenu>
						
					</el-menu>
			
				</el-aside>
			</el-scrollbar>
			<div class="index-main">
				<el-main>
					<transition name="slide-fade">
						
						<router-view></router-view>
					</transition>

					<el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" size="small">
						<span>确定退出登录?</span>
						<span slot="footer" class="dialog-footer">
							<el-button @click="centerDialogVisible = false">取 消</el-button>
							<el-button type="primary" @click="logout">确 定</el-button>
						</span>
					</el-dialog>
				</el-main>
			</div>

		</el-container>
	</el-container>

</template>

<script>
	export default {
		data() {
			return {
				admin: "admin",
				centerDialogVisible: false,
				isCollapse:false
			}
		},
		methods: {
			logout() {
				console.log("logout")
				this.$router.push("/login")
			},

		},

		mounted() {

console.log("$router.options.routes",this.$router.options.routes)
			// 设置 iframe 高度
			var $el = document.querySelector(".index");
			resetWidth();
			window.onresize = function() {
				resetWidth();
			}

			function resetWidth() {
				var win_h = $el.offsetHeight;
				var h_w = $el.querySelector(".index-h").offsetHeight;
				document.querySelector(".index-cnt").style.height = win_h - h_w + "px";
			}
		}
	}
</script>

<style scoped="scoped">
	.slide-fade-enter-active {
		transition: all 1s ease;
	}

	.slide-fade-enter {
		transform: translate(20px);
		filter: blur(10px) opacity(0);

	}

	..el-scrollbar__wrap {
		background: red;
	}
</style>
AAAA