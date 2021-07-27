// 根模块
import Login from "../components/login.vue"

// 子模块
import admins from "./admin.js";

 const routes = [
		{
			path:"/",component:Login
		},
		...admins,
			
		// 重定向
		{ path:"*",redirect:"/"
		
		}
	];

import Vue from 'vue';
import VueRouter from "vue-router";
Vue.use(VueRouter);
export default new VueRouter({
	routes,
	mode:"history"
})
