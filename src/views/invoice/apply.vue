<template>
    <div class="invoice_apply_container column" ref="apply_container">
        <div class="invoice_search_box" ref="search_box">
            <el-form class="demo-form-inline" :inline="true" :model="applyInfo">
                <el-form-item>
                    <el-input placeholder="用户/公司名称" v-model="applyInfo.applyMan"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="申请编号" v-model="applyInfo.invoiceSn"></el-input>
                </el-form-item>
                <el-select v-model="applyInfo.sysOrgCode" class="inline-input" placeholder="所属区域平台">
                    <el-option
                        v-for="item in platformList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    ></el-option>
                </el-select>
                <el-select v-model="applyInfo.status" class="inline-input" placeholder="开票状态">
                    <el-option
                        v-for="item in applyStatusList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    ></el-option>
                </el-select>
                <el-select v-model="applyInfo.invoiceType" class="inline-input" placeholder="发票类型">
                    <el-option
                        v-for="item in invoiceTypeList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    ></el-option>
                </el-select>
                <el-select v-model="applyInfo.needList" class="inline-input" placeholder="是否要销货清单">
                    <el-option
                        v-for="item in orderTypeList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    ></el-option>
                </el-select>
                <el-date-picker class="inline-input" type="date" placeholder="申请时间起" v-model="applyInfo.applyStartTime" value-format="yyyy-MM-dd"></el-date-picker>
                <el-date-picker class="inline-input" type="date" placeholder="申请时间止" v-model="applyInfo.applyEndTime" value-format="yyyy-MM-dd"></el-date-picker>
                <el-button type="primary" icon="el-icon-search" @click="searchFn">查询</el-button>
                <el-button type="primary" icon="el-icon-refresh-right" @click="resetFn">重置</el-button>
                <el-button type="primary" icon="el-icon-download" @click="exportFn">导出</el-button>
            </el-form>
        </div>
        <div class="invoice_table_box flex_item" :class="{'flex_cn': tableData.length == 0}">
            <el-table
                :data="tableData"
                style="width: 100%;"
                :header-cell-style="{'text-align': 'center'}"
                :cell-style="{'text-align': 'center'}"
                border
                :max-height="tableHeight"
                v-if="tableData.length"
            >
                <el-table-column
                    label="申请编码/来源"
                    width="180"
                >
                    <template slot-scope="scope">
                        <p>{{ scope.row.invoiceSn }}</p>
                        <p>来源：{{ scope.row.invoiceSource }}</p>
                    </template>
                </el-table-column>
                <el-table-column
                    label="开票金额"
                    width="180"
                >
                    <template slot-scope="scope">
                        <p>{{ scope.row.money }}</p>
                    </template>
                </el-table-column>
                <el-table-column
                    label="发票类型"
                    width="180"
                >
                    <template slot-scope="scope">
                        <p>{{ scope.row.invoiceType }}</p>
                    </template>
                </el-table-column>
                <el-table-column
                    label="开票状态"
                    width="180"
                >
                    <template slot-scope="scope">
                        <p>{{ applyStatus[scope.row.status] }}</p>
                    </template>
                </el-table-column>
                <el-table-column
                    label="订单总费用"
                    width="180"
                >
                    <template slot-scope="scope">
                        <p>{{ scope.row.orderAmount }}</p>
                    </template>
                </el-table-column>
                <el-table-column
                    label="税金"
                    width="180"
                >
                    <template slot-scope="scope">
                        <p>{{ scope.row.taxMoney }}</p>
                    </template>
                </el-table-column>
                <el-table-column
                    label="发票要求"
                    width="180"
                >
                    <template slot-scope="scope">
                        <p>销货清单：{{ scope.row.needList == 0 ? '不需要' : '需要' }}</p>
                    </template>
                </el-table-column>
                <el-table-column
                    label="所属区域平台"
                    width="180"
                >
                    <template slot-scope="scope">
                        <p>{{ scope.row.sysOrgCode }}</p>
                    </template>
                </el-table-column>
                <el-table-column
                    label="申请信息"
                    width="180"
                >
                    <template slot-scope="scope">
                        <p>{{ scope.row.applyMan + '/' +  scope.row.applyPhone }}</p>
                        <p>{{ scope.row.applyTime }}</p>
                        <p>{{ scope.row.company }}</p>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="240" fixed="right">
                    <template slot-scope="scope">
                        <el-button
                            size="mini"
                            type="primary"
                            @click="handlerAction(scope.row, '0')"
                            v-if="scope.row.status == 1"
                        >
                            开票
                        </el-button>
                        <el-button
                            size="mini"
                            type="success"
                            @click="handlerAction(scope.row, '1')"
                        >
                            详情
                        </el-button>
                        <el-button
                            size="mini"
                            type="danger"
                            @click="handlerAction(scope.row, '2')"
                            v-if="scope.row.status == 1"
                        >
                            拒绝
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-empty description="暂无数据" v-else></el-empty>
        </div>
        <div ref="pagination">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="pageSizeList"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="tableData.length"
                hide-on-single-page
                style="text-align: center;margin-top: 16px;"
            ></el-pagination>
        </div>

        <!-- 开票受理弹窗 -->
        <el-dialog
            title="开票受理"
            :visible.sync="makeOutVisible"
            width="30%"
            class="make_out_dialog"
        >
            <h4>开票公司信息</h4>
            <p class="flex"><span>公司名称：</span><span class="flex_item oneline">{{itemData.company}}</span></p>
            <p class="flex"><span>税号：</span><span class="flex_item oneline">{{itemData.taxNum}}</span></p>
            <p class="flex"><span>银行账户：</span><span class="flex_item oneline">{{itemData.bankAccount}}</span></p>
            <p class="flex"><span>开户银行：</span><span class="flex_item oneline">{{itemData.bankName}}</span></p>
            <p class="flex"><span>企业地址：</span><span class="flex_item oneline">{{itemData.registerAddr}}</span></p>
            <p class="flex"><span>企业电话：</span><span class="flex_item oneline">{{itemData.registerPhone}}</span></p>
            <h4>发票详情</h4>
            <p class="flex" style="margin-bottom: 12px;">
                <span>发票号码：</span>
                <el-input size="mini" placeholder="请输入内容" clearable v-model="itemData.invoiceNum"></el-input>
            </p>
            <p class="flex">
                <span>开票日期：</span>
                <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    size="mini"
                    v-model="itemData.openInvoiceDate"
                    value-format="yyyy-MM-dd"
                >
                </el-date-picker>
            </p>
            <span slot="footer" class="dialog-footer flex_cn">
                <el-button type="primary" @click="invoiceMakeOut">保 存</el-button>
                <el-button @click="makeOutVisible = false">取 消</el-button>
            </span>
        </el-dialog>

        <!-- 开票详情弹窗 -->
        <el-dialog
            title="开票详情"
            :visible.sync="detailVisible"
            width="72%"
        >
            <el-table
                :data="[itemData]"
                style="width: 100%;"
                :header-cell-style="{'text-align': 'center'}"
                :cell-style="{'text-align': 'center'}"
                border
            >
                <el-table-column prop="invoiceSn" label="开票申请编码" width="160"></el-table-column>
                <el-table-column label="开票状态" width="80">
                    <template slot-scope="scope">
                        <p>{{ applyStatus[scope.row.status] }}</p>
                    </template>
                </el-table-column>
                <el-table-column label="申请发票类型" width="100">
                    <template slot-scope="scope">
                        <p>{{ scope.row.invoiceType }}</p>
                    </template>
                </el-table-column>
                <el-table-column label="公司信息" width="240" align="left">
                    <template slot-scope="scope">
                        <p style="text-align:left;">公司名称: {{ scope.row.company }}</p>
                        <p style="text-align:left;">税号: {{ scope.row.taxNum }}</p>
                        <p style="text-align:left;">账户: {{ scope.row.bankAccount }}</p>
                        <p style="text-align:left;">开户行: {{ scope.row.bankName }}</p>
                        <p style="text-align:left;">注册地址: {{ scope.row.registerAddr }}</p>
                        <p style="text-align:left;">注册电话: {{ scope.row.registerPhone }}</p>
                    </template>
                </el-table-column>
                <el-table-column prop="money" label="开票金额" width="120"></el-table-column>
                <el-table-column prop="orderAmount" label="订单总费用" width="120"></el-table-column>
                <el-table-column prop="taxMoney" label="税金" width="100"></el-table-column>
                <el-table-column prop="invoiceNum" label="发票号码" width="160"></el-table-column>
                <el-table-column prop="openInvoiceDate" label="开票日期" width="160"></el-table-column>
                <el-table-column label="销货清单">
                    <template slot-scope="scope">
                        <p>{{ scope.row.needList == 0 ? '不需要' : '需要' }}</p>
                    </template>
                </el-table-column>
            </el-table>
            <h4>销项明细</h4>
            <el-table
                :data="detailList"
                border
                style="width: 100%"
                :header-cell-style="{'text-align': 'center'}"
                :cell-style="{'text-align': 'center'}"
            >
                <el-table-column prop="orderNo" label="订单号" width="200"></el-table-column>
                <el-table-column label="支付方式" width="140">
                    <template slot-scope="scope">
                        <p>{{ scope.row.payMethod | payMethodHandler }}</p>
                    </template>
                </el-table-column>
                <el-table-column prop="money" label="开票金额" width="220"></el-table-column>
                <el-table-column prop="taxRate" label="税金服务费率" width="140"></el-table-column>
                <el-table-column prop="orderAmount" label="订单总费用" width="220"></el-table-column>
                <el-table-column prop="taxMoney" label="税金" width="180"></el-table-column>
                <el-table-column label="发票备注栏">
                    <template slot-scope="scope">
                        <p>起运地: {{ scope.row.startAddress }}</p>
                        <p>目的地: {{ scope.row.endAddress }}</p>
                        <p>货物名称: {{ scope.row.goodsName }}</p>
                        <p>车种车号: {{ scope.row.carType }}</p>
                    </template>
                </el-table-column>
            </el-table>
        </el-dialog>

        <!-- 拒绝开票弹窗 -->
        <el-dialog
            title="拒绝开票"
            :visible.sync="rejectVisible"
            width="30%"
        >
            <p class="flex">
                <span>备注：</span>
                <el-input
                    type="textarea"
                    placeholder="请备注拒绝理由"
                    v-model="itemData.remark"
                    maxlength="50"
                    show-word-limit
                    class="flex_item"
                >
                </el-input>
            </p>
            <span slot="footer" class="dialog-footer flex_cn">
                <el-button type="primary" @click="invoiceReject">确 定</el-button>
                <el-button @click="rejectVisible = false">取 消</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    filters: {
        payMethodHandler (val) {
            if (val == '5') {

            } else if (val == '6') {

            } else {

            }
        }
    },
    data () {
        return { 
            platformList: [{
                value: '选项1',
                label: '黄金糕'
                }, {
                value: '选项2',
                label: '双皮奶'
                }, {
                value: '选项3',
                label: '蚵仔煎'
                }, {
                value: '选项4',
                label: '龙须面'
                }, {
                value: '选项5',
                label: '北京烤鸭'
            }], // 所属平台列表
            applyStatusList: [
                {
                    value: 1,
                    label: '待受理'
                }, {
                    value: 2,
                    label: '待发送'
                }, {
                    value: 3,
                    label: '已发送'
                }, {
                    value: 96,
                    label: '已撤销'
                }, {
                    value: 97,
                    label: '已拒绝'
                }, {
                    value: 98,
                    label: '作废中'
                }, {
                    value: 99,
                    label: '已作废'
                }
            ], // 开票状态列表
            applyStatus: {
                1: '待受理',
                2: '待发送',
                3: '已发送',
                96: '已撤销',
                97: '已拒绝',
                98: '作废中',
                99: '已作废',
            }, // 开票状态
            invoiceTypeList: [{
                value: '选项1',
                label: '黄金糕'
                }, {
                value: '选项2',
                label: '双皮奶'
                }, {
                value: '选项3',
                label: '蚵仔煎'
                }, {
                value: '选项4',
                label: '龙须面'
                }, {
                value: '选项5',
                label: '北京烤鸭'
            }], // 发票类型列表
            orderTypeList: [{
                value: '选项1',
                label: '黄金糕'
                }, {
                value: '选项2',
                label: '双皮奶'
                }, {
                value: '选项3',
                label: '蚵仔煎'
                }, {
                value: '选项4',
                label: '龙须面'
                }, {
                value: '选项5',
                label: '北京烤鸭'
            }], // 销货清单列表
            tableData: [], // 表格数据
            currentPage: 1, // 当前页
            tableHeight: 890, // 表格高度
            pageSizeList: [10,20,50,100,500], // 每页条数列表
            pageSize: 10, // 每页条数
            makeOutVisible: false, // 是否展示开票弹窗
            detailVisible: false, // 是否展示开票详情弹窗
            rejectVisible: false, // 是否展示拒绝开票弹窗
            itemData: {}, // 选中订单数据
            detailList: [], // 销项明细
            applyInfo: {
                applyMan: '', // 用户/公司名称
                invoiceSn: '', // 申请编号
                sysOrgCode: '', // 所属平台
                status: '', // 开票状态
                invoiceType: '', // 发票类型
                needList: '', // 是否要清单
                applyStartTime: '', // 申请开始时间
                applyEndTime: '', // 申请结束时间
                mold: 0, // 开票申请
            },
        }
    },
    created () {
        this.searchFn();
    },
    mounted () {
        this.$nextTick(() => {
            setTimeout(() => {
                this.tableHeight = this.$refs.apply_container.offsetHeight - this.$refs.search_box.offsetHeight - this.$refs.pagination.offsetHeight - 20;
            },300)
        })
    },
    methods: {
        // 点击查询
        searchFn () {
            this.$api.invoiceApplyList({
                pageSize: this.pageSize,
                pageNum: this.currentPage,
                ...this.applyInfo
            }).then(res => {
                this.tableData = res.data.data.result;
            }).finally(() => {})
        },
        // 点击重置
        resetFn () {
            let arr = ['applyMan','invoiceSn','sysOrgCode','status','invoiceType','needList','applyStartTime','applyEndTime'];
            arr.forEach(item => {
                this['applyInfo'][item] = '';
            });
            this.searchFn();
        },
        // 点击导出
        exportFn () {
            alert('点击导出')
        },
        // 表格每页条数改变
        handleSizeChange (e) {
            if (this.pageSize == e) return;
            this.pageSize = e;
            this.searchFn();
        },
        // 表格当前页切换
        handleCurrentChange (e) {
            if (this.currentPage == e) return;
            this.currentPage = e;
            this.searchFn();
        },
        // 确认开票
        invoiceMakeOut () {
            this.$api.invoiceAction({
                ...this.itemData,
                type: 0
            }).then(res => {
                this.searchFn();
                this.makeOutVisible = false;
                this.$message({
                    message: '开票成功',
                    type: 'success'
                });
            }).finally(() => {})
        },
        /**
         * 按钮点击事件处理
         * @param {Object} val 当前选中订单数据
         * @param {String} type 操作类型, '0':开票, '1':详情, '2':拒绝
         */
        handlerAction (val,type) {
            let arr = ['makeOutVisible','detailVisible','rejectVisible'];
            this.itemData = val;
            if (type == '1') { // 查看详情,请求数据
                this.$api.invoiceDetail({
                    invoiceId: val.id
                }).then(res => {
                    this.detailList = res.data.data;
                }).finally(() => {})
            }
            this[arr[type]] = true;
        },
        // 拒绝开票
        invoiceReject () {
            this.$api.invoiceAction({
                ...this.itemData,
                type: 2
            }).then(res => {
                this.searchFn();
                this.rejectVisible = false;
                this.$message({
                    message: '拒绝开票成功',
                    type: 'success'
                });
            }).finally(() => {})
        },
    }
}
</script>

<style lang='scss' scoped>
.invoice_apply_container {
    height: 100%;
    box-sizing: border-box;
    margin: 8px 0;
    padding: 10px;
    background-color: #fff;
    border-radius: 6rpx;
    overflow: hidden;

    .invoice_search_box {
        max-width: 1400px;

        .inline-input {
            margin: 0 12px 12px 0;
        }

        button {
            margin-bottom: 12px;
        }
    }

    .make_out_dialog {

        /deep/.el-dialog__header {
            font-size: 20px;
        }

        /deep/.el-dialog__body {
            padding-top: 0;
        }

        p {
            line-height: 24px;
            
            span:nth-child(1) {
                width: 90px;
                text-align: right;
            }

            /deep/.el-input {
                width: 300px;
            }
        }
    }
}
</style>