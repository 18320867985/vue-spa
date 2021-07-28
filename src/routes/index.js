// 根模块区
import Admin from "../views/admin.vue"
import Login from "../views/login.vue"
 import Layout from "../views/layout.vue"


// 子模块区
import admins from "./admin.js";

 const routes = [

		{
			path:"/",
			component:Admin,
		//	redirect: '/basic',
			children:admins
		},
		
		{
			path:"/basic",
			component:Layout,
			redirect: '/basic',
			//children:admins
		},
		{
			path:"/login",component:Login
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
