import { api } from "./axios.js";

class Api {

  //结算设置查询
  async baseSettlementList(data) {
    return await api.get("/finance/baseSettlement/list", data).then((res) => res)
  }
  //结算设置新增
  async baseSettlementAdd(data) {
    return await api.post("/finance/baseSettlement/add", data).then((res) => res)
  }
  //结算设置编辑
  async baseSettlementEdit(data) {
    return await api.post("/finance/baseSettlement/edit", data).then((res) => res)
  }


  //佣金设置查询
  async baseCommissionList(data) {
    return await api.get("/finance/baseCommission/list", data).then((res) => res)
  }
  //佣金设置新增
  async baseCommissionAdd(data) {
    return await api.post("/finance/baseCommission/add", data).then((res) => res)
  }
  //佣金设置编辑
  async baseCommissionEdit(data) {
    return await api.post("/finance/baseCommission/edit", data).then((res) => res)
  }


  //系统设置查询
  async baseSystemList(data) {
    return await api.get("/finance/baseSystem/list", data).then((res) => res)
  }
  //系统设置新增
  async baseSystemtAdd(data) {
    return await api.post("/finance/baseSystem/add", data).then((res) => res)
  }
  //系统设置编辑
  async baseSystemEdit(data) {
    return await api.post("/finance/baseSystem/edit", data).then((res) => res)
  }

  // 开票列表
  async invoiceApplyList(data) {
    return await api.get("/invoice/api/list", data).then((res) => res)
  }
  // 发票操作(type:申请0-邮寄1-拒绝2-作废3-撤销4)
  async invoiceAction(data) {
    return await api.post("/invoice/api/operation", data).then((res) => res)
  }
  // 发票详情
  async invoiceDetail(data) {
    return await api.get("/invoice/api/selectDetailListByInvoiceId", data).then((res) => res)
  }
  // 发票详情列表
  async invoiceDetailList(data) {
    return await api.get("/invoice/api/selectDetailList", data).then((res) => res)
  }
  
  //查询历史记录
  async selectRecord(data) {
    return await api.get("/finance/baseRecord/selectRecord", data).then((res) => res)
  }

  //应收管理查询
  async collectRecordList(data) {
    return await api.get("/finance/collectRecord/list", data).then((res) => res)
  }

}
export default new Api();
/*
	1. 将方法封装成一个 类
	2. 暴露出去，同时挂载在全局上
*/
