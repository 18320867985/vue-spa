<template>
	<div class="account">

		<!-- 表单 -->
		<el-form :inline="true" class="form-inline">
			<el-form-item label="">
				<el-input placeholder="用户/公司名称" v-model="pageObj.companyName"></el-input>
			</el-form-item>

			<el-form-item label="">
				<el-select v-model="pageObj.accountSource" placeholder="账户余额来源">
					<el-option v-for="item in accountSourceList" :key="item.value" :label="item.label"
						:value="item.value">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="">
				<el-select v-model="pageObj.accountType" placeholder="账户类型">
					<el-option v-for="item in accountTypeList" :key="item.value" :label="item.label"
						:value="item.value">
					</el-option>
				</el-select>
			</el-form-item>

			<el-form-item label="">
				<el-select v-model="pageObj.status" placeholder="账户状态">
					<el-option v-for="item in statusList " :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</el-form-item>

			<el-form-item label="">
				<el-date-picker type="date" placeholder="创建时间起" v-model="pageObj.startDate"
					:value-format="'yyyy-MM-dd hh:mm:ss'">
				</el-date-picker>

			</el-form-item>
			<el-form-item label="">
				<el-date-picker type="date" placeholder="创建时间止" v-model="pageObj.endDate"
					:value-format="'yyyy-MM-dd hh:mm:ss'">
				</el-date-picker>
			</el-form-item>

			<el-form-item label="">
				<el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
			</el-form-item>

			<el-form-item label="">
				<el-button type="primary" icon="el-icon-refresh-right" @click="resetPageObj">重置</el-button>
			</el-form-item>

			<el-form-item label="">
				<el-button type="primary" icon="el-icon-download">导出</el-button>
			</el-form-item>

		</el-form>

		<!-- 表格 -->
		<div class="upgoods-table">
			<el-table :data="tableData" border style="width: 100%" v-loading="loading">

				<el-table-column prop="id" label="账户ID" width="160">
				</el-table-column>

				<el-table-column prop="companyName" label="用户/公司名称" width="180">

				</el-table-column>

				<el-table-column prop="accountSource" label="账户余额来源" width="200">
					<template slot-scope="scope">
						<span v-for="item in accountSourceList" :key="item.value" v-if="scope.row.accountSource==item.value">{{item.label}}</span>
					</template>

				</el-table-column>

				<el-table-column prop="accountType" label="账户类型">
	
					<template slot-scope="scope">
						<span v-for="item in accountTypeList" :key="item.value" v-if="scope.row.auditStatus==item.value">{{item.label}}</span>
					</template>

				</el-table-column>

				<el-table-column prop="status" label="账户状态">
					<!-- <span>{{data.status===0?'a':'b'}}</span> -->

					<template slot-scope="scope">
						<span v-for="item in statusList" :key="item.value" v-if="scope.row.status==item.value">{{item.label}}</span>
						
					</template>

				</el-table-column>

				<el-table-column prop="createTime" label="开户时间">
				</el-table-column>

				<el-table-column prop="sumBalance" label="账户总额">
				</el-table-column>

				<el-table-column prop="balance" label="账户余额">
				</el-table-column>

				<el-table-column prop="frozenBalance" label="冻结金额">
				</el-table-column>

				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button @click="gotodtl(scope.row)" type="text" size="small">查看</el-button>
						<el-button @click="gotodtlEdit(scope.row)" type="text" size="small">编辑</el-button>
					</template>
				</el-table-column>

			</el-table>
		</div>

		<!-- 分页 -->
		<div class="upgoods-page" v-if="tableData.length>0">
			<div class="block">
				<el-pagination background layout=" prev, pager, next, jumper,total, sizes" :total="pageObj.pageToal"
					:page-size="pageObj.pageSize" :current-page="pageObj.paegsNo" @size-change="handleSizeChange"
					@current-change="handleCurrentChange" :page-sizes="pageList">
				</el-pagination>

			</div>
		</div>

		<el-dialog title="账户详情" :visible.sync="dialogTableVisible">
			<ul>
				<li><label>用户/公司名称 </label> <span>{{pageObjDtl.companyName}}</span></li>
				<li><label>公司编码 </label> <span>{{pageObjDtl.id}}</span></li>
				<li><label>联系电话</label> <span>{{pageObjDtl.phone}}</span></li>
				<li><label>认证通过时间 </label> <span>{{pageObjDtl.createTime}}</span></li>
				<li><label>账户总余额 </label> <span>￥{{pageObjDtl.sumBalance}}</span></li>
				<li><label>账户冻结金额 </label> <span>￥{{pageObjDtl.frozenBalance}}</span></li>
				<li><label>账户余额 </label> <span>￥{{pageObjDtl.balance}}</span></li>
			</ul>
		</el-dialog>

		<el-dialog title="调整账户余额" :visible.sync="dialogTableVisible_edit" >
			<ul class="_edit">

				<li><label>用户/公司名称 </label> <span>{{pageObjDtl.companyName}}</span></li>
				<li><label>公司编码 </label> <span>{{pageObjDtl.id}}</span></li>
				<li><label>账户类型</label>
					<span>{{pageObjDtl.accountType}}
					</span>
				</li>
				<li><label>账户总余额 </label> <span>￥{{pageObjDtl.sumBalance}}</span></li>

				<li>
					<el-form :inline="true" class="demo-form-inline">
						<el-form-item label="选择费用类别">
							<el-select placeholder="费用类别" v>
								<el-option label="企业充值" value="企业充值"></el-option>
								<el-option label="个人充值" value="个人充值"></el-option>
							</el-select>
						</el-form-item>
					</el-form>
				</li>
				<li>
					<el-form :inline="true" class="demo-form-inline">
						<el-form-item label="填写调整金额">
							<el-input placeholder="填写调整金额" style="width: 215px;"></el-input>
							<span class="_tip">负数代表减少金额，正数代表增加金额</span>
						</el-form-item>
					</el-form>

				</li>

				<li>
					<el-form :inline="true" class="demo-form-inline">
						<el-form-item label="备注">
							<el-input type="textarea" size="medium" placeholder="限50字" style="min-width: 400px; min-height: 60px; max-height: 120px;">
							</el-input>
						</el-form-item>
					</el-form>

				</li>

				<li>
					<el-form :inline="true" class="demo-form-inline" style="text-align: center;" >
						<el-form-item >
							
							<el-button size="medium" @click="cancelEdit">取消</el-button>
							
							<el-button type="primary" style ="margin-left: 20px;" size="medium">保存</el-button>	
								
						</el-form-item>
					</el-form>
				</li>
			</ul>
		</el-dialog>

	</div>
</template>

<script>
	
	import {
		pageList,
		userTypeList,
		accountSourceList,
		accountTypeList,
		statusList,
	
	} from  "../../common/dictionary.js";
	
	export default {
		props: {
			typeId: {
				default: 3,
				type: Number
			}
		},
		data() {
			return {
				userTypeList,
				accountSourceList,
				accountTypeList,
				statusList,

				pageList,
				pageMax: 1,
				loading: true,
				pageObj: {
					userType: 1,
					pageNo: 1,
					pageSize: 10,
					pageToal: 0,
					
					accountOwer:"",	 // 账户主体	
					accountSource: "", // 账户来源
					accountType: "",   // 账户类型
					companyName: "",    // 用户/公司名称
					busType:"" ,        //业务类型(1.微信充值2.支付宝充值3,银行)		
					fundDirection:"",    // 资金方向(1.收入,2.支出)
					orderSn:"",           // 订单流水号
					userType:"",          //账户类型(1.总平台,2.区域平台,3.货主,4.承运商)
					
					startDate: "",
					endDate: ""

				},
				tableData: [],
				dialogTableVisible: false,
				dialogTableVisible_edit: false,
				pageObjDtl: {},
			}
		},
		async created() {
			console.log(this.typeId)
			this.pageObj.userType = this.typeId;
			this.getList(this.pageObj);
		},
		watch: {
			typeId() {
				this.pageObj.userType = this.typeId;
			}
		},
		methods: {

			async getList(params) {
				this.loading = true;
				let res = await this.$axios.flowrecord_query(params);
				this.loading = false;
				if (!res) {
					return;
				}

				let data = res.result;
				this.pageObj.pageNo = data.pages;
				this.pageObj.pageToal = data.total;
				this.pageObj.pageMax = Math.ceil(this.pageObj.pageToal / this.pageObj.pageSize);
				this.pageObj.pageNo = this.pageObj.pageNo >= this.pageObj.pageMax ? this.pageObj.pageMax : this.pageObj
					.pageNo;
				this.tableData = data.records;
				this.loading = false;
				console.log(this.tableData)
				//console.log(this.pageObj)

			},

			async handleSizeChange(pageSize) {
				console.log(this.pageObj)
				console.log("handleSizeChange:", pageSize)
				this.pageObj.pageSize = pageSize;
				this.pageObj.pageNo = 1;
				this.getList(this.pageObj);
			},

			async handleCurrentChange(pageNo) {

				//console.log("handleCurrentChange:", pageNo)
				this.pageObj.pageNo = pageNo;
				this.getList(this.pageObj);
			},

			async search() {

				console.log("pageObj", this.pageObj)
				this.pageObj.pageNo = 1;
				this.getList(this.pageObj);

			},

			async resetPageObj() {

				this.pageObj.pageNo = 1;
				this.pageObj.pageSize = 10;
				this.pageObj.pageToal = 0;
				this.pageObj.accountSource = "";
				this.pageObj.accountType = "";
				this.pageObj.companyName = "";
				this.pageObj.status = null;
				this.pageObj.startDate = "";
				this.pageObj.endDate = "";
				console.log("pageObj", this.pageObj)
				this.getList(this.pageObj);
			},
			
			async gotodtl(item) {
				console.log("id", item.id)
				this.dialogTableVisible = true;
				let res = await this.$axios.account_accountDetail({id:item.id})
				//console.log("res", res)
				this.loading = false;
				if (!res) {
					return;
				}
				this.pageObjDtl = res.result;

			},

			async gotodtlEdit(item) {
				console.log("id", item.id)
				this.dialogTableVisible_edit = true;
				let res = await this.$axios.account_accountDetail({id:item.id})
				//console.log("res", res)
				this.loading = false;
				if (!res) {

					return;
				}
				this.pageObjDtl = res.result;

			},
			
			cancelEdit(){
				this.dialogTableVisible_edit=false;
			}

		}

	}
</script>
<style>

</style>
