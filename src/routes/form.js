

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
		component: Radio,
		ttl:"表单 Radio",

	},

	{
		path: "checkbox",
		component: Checkbox,
		ttl:"表单 checkbox",
		

	},
	{
		path: "input",
		component: Input,
		ttl:"表单 input",

	},

	{
		path: "number",
		component: Number,
		ttl:"表单 number",
		

	},

	{
		path: "select",
		component: Select,
		ttl:"表单 select",

	},
	{
		path: "switch",
		component: Switch,
		ttl:"表单 switch",

	},

	{
		path: "timePicker",
		component: TimePicker,
		ttl:"表单 timePicker",

	},

	{
		path: "datePicker",
		component: DatePicker,
		ttl:"表单 datePicker",

	},

	{
		path: "form",
		component: Form,
		ttl:"表单 form",

	}
];
