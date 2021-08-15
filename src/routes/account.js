
//  account

import  account from "../views/account/account.vue"
import  accountAdjust from "../views/account/account-adjust.vue"
import  accountDtl from "../views/account/account-dtl.vue"

export default [{
		path: "",
		component: account,
		meta:{ ttl:"余额列表"},

	},
	
	{
			path: "accountAdjust",
			component: accountAdjust,
			meta:{ ttl:"审核余额调整"},
			//hidden:true
	
	},
	// {
	// 		path: "accountDtl/:id",
	// 		component: accountDtl,
	// 		meta:{ ttl:"账户余额-详情"},
	// 		hidden:true
	
	// },
	
	// {
	// 		path: "accountOwner",
	// 		component: accountOwner,
	// 		meta:{ ttl:"货主余额"},
	// 		//hidden:true
	
	// },
	// {
	// 		path: "accountArea",
	// 		component: accountArea,
	// 		meta:{ ttl:"区域余额"},
	// 		//hidden:true
	
	// },
	// {
	// 		path: "accountCarrier",
	// 		component: accountCarrier,
	// 		meta:{ ttl:"承运商余额"},
	// 		//hidden:true
	
	// 	}
	

];
