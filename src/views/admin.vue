<template>

	<el-container class="index" ref="index">
		<el-header class="index-h">
			<div>
				<i class="index-h-icon " @click="isCollapse=!isCollapse" :class="isCollapse?'el-icon-s-unfold ':'el-icon-s-fold'"></i>
				<div class="fr"> <a href="#" @click="centerDialogVisible = true">退出登录</a> </div>
				<img src="../assets/logo.png" alt="Alternate Text" />
				结算中心-管理系统  
			</div>
		</el-header>
		<el-container class="index-cnt">
			<el-scrollbar wrap-class="scrollbar-wrapper" class="index-cnt-aside " :class="{'open':!isCollapse}">
				<el-aside class="index-aside"  :class="{'open':!isCollapse}">
					<el-menu  :collapse="isCollapse">
						
						<el-submenu index="1" >
							<template slot="title"><i class="el-icon-message"></i>   <span slot="title">组件-Basic</span> </template>
							<el-menu-item-group>

								<router-link index="1-1" class=" el-menu-item" to="/" active-class="is-active " tag="li"
									exact>
									Layout布局
								</router-link>

								<router-link index="1-2" class="el-menu-item" to="/container" active-class="is-active "
									tag="li">
									布局容器
								</router-link>


								<router-link index="1-3" class=" el-menu-item" to="/btn" active-class="is-active "
									tag="li">
									按钮
								</router-link>

								<router-link index="1-4" class=" el-menu-item" to="/icon" active-class="is-active "
									tag="li">
									Icon 图标
								</router-link>

								<router-link index="1-5" class=" el-menu-item" to="/link" active-class="is-active "
									tag="li">
									Link 文字链接
								</router-link>

							</el-menu-item-group>
						</el-submenu>

						<el-submenu index="2">
							<template slot="title"><i class="el-icon-menu"></i>  <span slot="title">组件-Form</span></template>
							<el-menu-item-group>

								<router-link index="2-1" class="el-menu-item" to="/radio" active-class="is-active"
									tag="li">
									radio
								</router-link>

								<router-link index="2-2" class="el-menu-item" to="/checkbox" active-class="is-active"
									tag="li">
									checkbox
								</router-link>

								<router-link index="2-3" class="el-menu-item" to="/input" active-class="is-active"
									tag="li">
									input输入框
								</router-link>

								<router-link index="2-4" class="el-menu-item" to="/number" active-class="is-active"
									tag="li">
									inputNumber计数器
								</router-link>

								<router-link index="2-5" class="el-menu-item" to="/select" active-class="is-active"
									tag="li">
									select选择器
								</router-link>

								<router-link index="2-6" class="el-menu-item" to="/switch" active-class="is-active"
									tag="li">
									Switch 开关
								</router-link>

								<router-link index="2-7" class="el-menu-item" to="/timePicker" active-class="is-active"
									tag="li">
									timePicker
								</router-link>


								<router-link index="2-8" class="el-menu-item" to="/datePicker" active-class="is-active"
									tag="li">
									datePicker
								</router-link>

								<router-link index="2-8" class="el-menu-item" to="/form" active-class="is-active"
									tag="li">
									form 表单
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
