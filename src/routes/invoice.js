import apply from "../views/invoice/apply.vue";
import exist from "../views/invoice/exist.vue";
import order from "../views/invoice/order.vue";

export default [
    {
		path: "",
		component: apply,
		meta:{ ttl:"开票申请"},
	},{
        path: "exist",
		component: exist,
		meta:{ ttl:"已开发票"},
    },{
        path: "order",
		component: order,
		meta:{ ttl:"开票订单"},
    }
];