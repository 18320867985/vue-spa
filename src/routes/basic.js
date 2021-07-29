// basic
import Layout from "../views/basic/layout.vue"
import Container from "../views/basic/container.vue"
import Btn from "../views/basic/btn.vue"
import Icon from "../views/basic/icon.vue"
import Link from "../views/basic/link.vue"


export default [{
		path: "",
		component: Layout,
		ttl:"组件-Basic",

	},
	
	{
		path: "container",
		component: Container,
		ttl:"组件-container",

	},
	{
		path: "btn",
		component: Btn,
		ttl:"组件-btn",

	},
	{
		path: "icon",
		component: Icon,
		ttl:"组件-icon",

	},
	{
		path: "link",
		component: Link,
		ttl:"组件-link",

	}
	
];
