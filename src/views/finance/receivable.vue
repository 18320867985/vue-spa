
<template>
    <div>
        <div style="margin-bottom: 20px">
            <el-input
                    placeholder="请输入订单号"
                    v-model="queryInfo.orderSn"
                    clearable
                    class="input-style">
            </el-input>
            <el-input
                    placeholder="请输入运单号"
                    v-model="queryInfo.billSn"
                    clearable
                    class="input-style">
            </el-input>
            <el-input
                    placeholder="请输入货主姓名"
                    v-model="queryInfo.name"
                    clearable
                    class="input-style">
            </el-input>
            <el-input
                    placeholder="请输入货主手机号"
                    v-model="queryInfo.phone"
                    clearable
                    class="input-style">
            </el-input>
            <el-select v-model="queryInfo.orderSource" placeholder="订单源" class="input-style">
                <el-option
                        v-for="item in options1"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="queryInfo.logisticsStatus" placeholder="订单状态" class="input-style">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="queryInfo.receivable" placeholder="请选择结算方类型" class="input-style">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="queryInfo.costType" placeholder="费用类别" class="input-style">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div style="margin-bottom: 20px">
            <el-date-picker
                    v-model="queryInfo.orderStartTime"
                    type="date"
                    placeholder="下单时间起"
                    class="input-style">
            </el-date-picker>
            <el-date-picker
                    v-model="queryInfo.orderEndTime"
                    type="date"
                    placeholder="下单时间止"
                    class="input-style">
            </el-date-picker>
            <el-date-picker
                    v-model="queryInfo.signStartTime"
                    type="date"
                    placeholder="签收时间起"
                    class="input-style">
            </el-date-picker>
            <el-date-picker
                    v-model="queryInfo.signEndTime"
                    type="date"
                    placeholder="签收时间止"
                    class="input-style">
            </el-date-picker>
            <el-button type="primary" icon="el-icon-search" @click="getData">查询</el-button>
            <el-button type="primary" icon="el-icon-refresh-right" @click="resetFn">重置</el-button>
            <el-button type="primary" icon="el-icon-folder-add">导入</el-button>
        </div>
        <el-table
                :data="tableData"
                style="width: 100%;"
                :max-height="tableMaxHeight"
                :header-cell-style="{'text-align': 'center'}"
                :cell-style="{'text-align': 'center'}"
                border
        >
            <el-table-column
                    prop="orderSource"
                    label="订单源"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="orderSn"
                    label="订单号"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="logisticsStatus"
                    label="订单状态"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="billSn"
                    label="运单号"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="orderStartTime"
                    label="下单时间"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="signEndTime"
                    label="签收时间"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="costType"
                    label="费用类别"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="collectAmount"
                    label="应收金额"
                    width="100">
            </el-table-column>
            <el-table-column
                    label="已收/未收"
                    width="100"
            >
                <template slot-scope="scope">
                    <p>现付已收：{{ scope.row.nowAmount }}</p>
                    <p>到付已收：{{ scope.row.arrivalAmount }}</p>
                </template>
            </el-table-column>
            <el-table-column
                    prop="commissionAmount"
                    label="佣金金额"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="receivable"
                    label="结算方"
                    width="100">
            </el-table-column>
            <el-table-column
                    label="货主信息">
                <template slot-scope="scope">
                    <p>{{ scope.row.orgName }}</p>
                    <p>{{ scope.row.name }}</p>
                    <p>{{ scope.row.phone }}</p>
                </template>
            </el-table-column>
        </el-table>
        <div style="width: 90%;display: flex;justify-content: flex-end;padding-top: 15px">
            <el-pagination align='center' @size-change="handleSizeChange" @current-change="handleCurrentChange"
                           background
                           :current-page="queryInfo.pageNum"
                           :page-sizes="[10,20,50,100,500]"
                           :page-size="queryInfo.pageSize"
                           layout="total, sizes, prev, pager, next, jumper"
                           :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: "receivable",
        data() {
            return {
                options: [{
                    value: '1',
                    label: '区域平台'
                }, {
                    value: '2',
                    label: '广州德坤'
                }, {
                    value: '3',
                    label: '苏州德坤'
                }],
                options1: [{
                    value: '1',
                    label: '提货费'
                }, {
                    value: '2',
                    label: '干线运费'
                }, {
                    value: '3',
                    label: '派送费'
                },{
                    value: '4',
                    label: '回单费'
                }, {
                    value: '5',
                    label: '代收手续费'
                }, {
                    value: '6',
                    label: '保险费'
                }],
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路',
                    zip: 200333
                }],
                headerStyle: {
                    border: 'none',
                    backgroundColor: '#f2f2f2',
                    color: '#000'
                },//历史记录表格表头样式
                queryInfo:{
                    type: 0,//类型 0:应收 1：应付
                    orderSn: '',//订单号
                    billSn: '',//运单号
                    name: '',//货主姓名
                    phone: '',//货主手机号
                    orderSource: '',//订单源
                    logisticsStatus: '',//物流状态
                    receivable: '',//结算方
                    costType: '',//费用类别
                    orderStartTime: '',//下单开始时间
                    orderEndTime: '',//下单结束时间
                    signStartTime: '',//签收开始时间
                    signEndTime: '',//签收结束时间
                    pageNum: 1, // 当前页码
                    pageSize: 10 // 每页的数据条数
                },//查询数据
                total: 20, // 总条数
                tableMaxHeight: '700',//表格最大高度
            }
        },
        mounted(){
            this.getData()
            this.tableMaxHeight = document.body.offsetHeight - 350
        },
        methods: {
            //获取数据
            getData(){
                this.$api.collectRecordList(this.queryInfo).then(res => {
                    // 网络请求畅通
                    // console.log(res.data);
                    this.total = res.data.data.total;//总条数赋值
                    this.tableData = res.data.data.result//表格赋值
                }).finally(() => {
                })
            },
            //重置按钮
            resetFn(){
                this.queryInfo.orderSn = '';
                this.queryInfo.billSn = '';
                this.queryInfo.name = '';
                this.queryInfo.phone = '';
                this.queryInfo.orderSource = '';
                this.queryInfo.logisticsStatus = '';
                this.queryInfo.receivable = '';
                this.queryInfo.costType = '';
                this.queryInfo.orderStartTime = '';
                this.queryInfo.orderEndTime = '';
                this.queryInfo.signStartTime = '';
                this.queryInfo.signEndTime = '';
                this.getData()
            },
            //每页条数改变时触发 选择一页显示多少行
            handleSizeChange(val) {
                // console.log(`每页 ${val} 条`);
                this.queryInfo.pageNum = 1;
                this.queryInfo.pageSize = val;
                this.getData()//重新获取表格数据
            },
            //当前页改变时触发 跳转其他页
            handleCurrentChange(val) {
                // console.log(`当前页: ${val}`);
                this.queryInfo.pageNum = val;
                this.getData()//重新获取表格数据
            },
        },
    }
</script>

<style scoped lang="scss">
    .input-style{
        margin-right: 20px;
        width: 10%;
    }
</style>
