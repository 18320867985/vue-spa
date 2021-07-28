// 根模块区
import Admin from "../components/admin.vue"
import Login from "../components/login.vue"


// 子模块区
import admins from "./admin.js";

 const routes = [

		{
			path:"/",component:Admin,children:admins
		},
		
		{
			path:"/login",component:Login
		},
		
	
			
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
