
import Admin from "./components/admin.vue"

// basic
import Layout from "./components/layout.vue"
import Container from "./components/container.vue"
import Btn from "./components/btn.vue"
import Icon from "./components/icon.vue"
import Link from "./components/link.vue"
import Radio from "./components/radio.vue"
import Checkbox from "./components/checkbox.vue"

import Login from "./components/login.vue"


export const routes = [
	
	{ path:"/",component:Login
	
	},
	{ path:"/admin",component:Admin, children:[
		
		{ path:"",component:Layout
		
		},
		{ path:"/container",component:Container
		
		},
		{ path:"/btn",component:Btn
		
		},
		{ path:"/icon",component:Icon
		
		},
		{ path:"/link",component:Link
		
		},
		
		{ path:"/radio",component:Radio
		
		},
		{ path:"/checkbox",component: Checkbox
		
		}
	]
	
	},
	
	{ path:"*",redirect:"/"
	
	},
	
		
  ];



