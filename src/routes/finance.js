import BasicSettings from "../views/finance/basicSettings"
import Receivable from "../views/finance/receivable"
import Payable from "../views/finance/payable"

export default [
    {
		path: "",
		component: BasicSettings,
		meta:{ ttl:"基础设置"},
	},{
        path: "receivable",
		component: Receivable,
		meta:{ ttl:"应收管理"},
    },{
		path: "payable",
		component: Payable,
		meta:{ ttl:"应付管理"},
	}
];
