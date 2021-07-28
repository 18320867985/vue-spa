// basic
import Layout from "../views/layout.vue"
import Container from "../views/container.vue"
import Btn from "../views/btn.vue"
import Icon from "../views/icon.vue"
import Link from "../views/link.vue"

import Radio from "../views/radio.vue"
import Checkbox from "../views/checkbox.vue"
import Input from "../views/input.vue"
import Number from "../views/number.vue"
import Select from "../views/select.vue"
import Switch from "../views/switch.vue"
import TimePicker from "../views/timePicker.vue"
import DatePicker from "../views/datePicker.vue"
import Form from "../views/form.vue"

export default [{
		path: "",
		component: Layout

	},

	{
		path: "/container",
		component: Container

	},
	{
		path: "/btn",
		component: Btn

	},
	{
		path: "/icon",
		component: Icon

	},
	{
		path: "/link",
		component: Link

	},

	{
		path: "/radio",
		component: Radio

	},
	{
		path: "/checkbox",
		component: Checkbox

	},
	{
		path: "/input",
		component: Input

	},

	{
		path: "/number",
		component: Number

	},

	{
		path: "/select",
		component: Select

	},
	{
		path: "/switch",
		component: Switch

	},

	{
		path: "/timePicker",
		component: TimePicker

	},

	{
		path: "/datePicker",
		component: DatePicker

	},

	{
		path: "/form",
		component: Form

	}
];
