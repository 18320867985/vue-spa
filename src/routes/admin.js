import Admin from "../components/admin.vue"

// basic
import Layout from "../components/layout.vue"
import Container from "../components/container.vue"
import Btn from "../components/btn.vue"
import Icon from "../components/icon.vue"
import Link from "../components/link.vue"

import Radio from "../components/radio.vue"
import Checkbox from "../components/checkbox.vue"
import Input from "../components/input.vue"
import Number from "../components/number.vue"
import Select from "../components/select.vue"
import Switch from "../components/switch.vue"
import TimePicker from "../components/timePicker.vue"
import DatePicker from "../components/datePicker.vue"
import Form from "../components/form.vue"

export default [

	{
		path: "/admin",
		component: Admin,
		children: [

			{
				path: "",
				component: Layout

			},

			{
				path: "container",
				component: Container

			},
			{
				path: "btn",
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
		]

	}

];
