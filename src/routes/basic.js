// basic
import Layout from "../views/layout.vue"
import Container from "../views/container.vue"
import Btn from "../views/btn.vue"
import Icon from "../views/icon.vue"
import Link from "../views/link.vue"


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
