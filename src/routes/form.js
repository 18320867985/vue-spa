

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
		component: Radio

	},

	
	{
		path: "radio",
		component: Radio

	},
	{
		path: "checkbox",
		component: Checkbox

	},
	{
		path: "input",
		component: Input

	},

	{
		path: "number",
		component: Number

	},

	{
		path: "select",
		component: Select

	},
	{
		path: "switch",
		component: Switch

	},

	{
		path: "timePicker",
		component: TimePicker

	},

	{
		path: "datePicker",
		component: DatePicker

	},

	{
		path: "form",
		component: Form

	}
];
