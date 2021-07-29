

import Radio from "../views/form/radio.vue"
import Checkbox from "../views/form/checkbox.vue"
import Input from "../views/form/input.vue"
import Number from "../views/form/number.vue"
import Select from "../views/form/select.vue"
import Switch from "../views/form/switch.vue"
import TimePicker from "../views/form/timePicker.vue"
import DatePicker from "../views/form/datePicker.vue"
import Form from "../views/form/form.vue"

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
