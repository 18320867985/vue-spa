// 根模块区
import Layout from "../layout/index.vue"
import Home from "../views/home.vue"
import Login from "../views/login.vue"


// 子模块区
import basic from "./basic.js";
import form from "./form.js";

 const routes = [

		{
			path:"/",
			component:Layout,
			name:"",
			ttl:"首页",
			icon:"el-icon-s-home",
		//	redirect: '/basic',
			children:[
				{
					path:"",
					component:Home,
					ttl:"home",
					
				}
			]
		},
		
		
		{
			path:"/basic",
			component:Layout,
			ttl:"组件-Basic",
			icon:"el-icon-s-finance",
			//redirect: '/basic/Layout',
			children:basic
			
		},
		
		{
			path:"/form",
			component:Layout,
			ttl:"form 表单",
			icon:"el-icon-picture-outline",
			redirect: '/form/radio',
			children:form
			
		},
		{
			path:"/login",
			ttl:"登录",
			icon:"el-icon-s-home",
			component:Login,
			 hidden: true,
			
		},
		
			
		// 重定向
		// { path:"*",redirect:"/"
		
		// }
	];

import Vue from 'vue';
import VueRouter from "vue-router";
 Vue.use(VueRouter);
// export default new VueRouter({
// 	routes,
// 	mode:"history",
// 	scrollBehavior: () => ({ y: 0 })
// })

const createRouter = () => new VueRouter({
   mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
