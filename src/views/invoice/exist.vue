<template>
    <div class="invoice_apply_container column" ref="apply_container">
        <div class="invoice_search_box" ref="search_box">
            <el-form class="demo-form-inline" :inline="true" :model="searchInfo">
                <el-form-item>
                    <el-input placeholder="申请编号" v-model="searchInfo.invoiceSn"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="发票ID" v-model="searchInfo.id"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="发票号码" v-model="searchInfo.invoiceNum"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="用户/公司名称" v-model="searchInfo.applyMan"></el-input>
                </el-form-item>
                <el-select v-model="searchInfo.sysOrgCode" class="inline-input" placeholder="所属区域平台">
                    <el-option
                        v-for="item in platformList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    ></el-option>
                </el-select>
                <el-select v-model="searchInfo.invoiceType" class="inline-input" placeholder="发票类型">
                    <el-option
                        v-for="item in invoiceTypeList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    ></el-option>
                </el-select>
                <el-select v-model="searchInfo.needList" class="inline-input" placeholder="是否要销货清单">
                    <el-option
                        v-for="item in invoiceTypeList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    ></el-option>
                </el-select>
                <el-select v-model="searchInfo.status" class="inline-input" placeholder="开票状态">
                    <el-option
                        v-for="item in applyStatusList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    ></el-option>
                </el-select>
                <el-date-picker class="inline-input" type="date" placeholder="申请时间起" v-model="searchInfo.applyStartTime" value-format="yyyy-MM-dd"></el-date-picker>
                <el-date-picker class="inline-input" type="date" placeholder="申请时间止" v-model="searchInfo.applyEndTime" value-format="yyyy-MM-dd"></el-date-picker>
                <el-date-picker class="inline-input" type="date" placeholder="开票时间起" v-model="searchInfo.openInvoiceStartDate" value-format="yyyy-MM-dd"></el-date-picker>
                <el-date-picker class="inline-input" type="date" placeholder="开票时间止" v-model="searchInfo.openInvoiceEndDate" value-format="yyyy-MM-dd"></el-date-picker>
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
                <el-table-column label="操作" width="240" fixed>
                    <template slot-scope="scope">
                        <el-button
                            size="mini"
                            type="primary"
                            @click="handleAction(scope.row,'0')"
                            style="display:block;margin: 4px auto;"
                            v-if="scope.row.status == 2"
                        >
                            邮寄发票
                        </el-button>
                        <el-popconfirm title="确定要撤销作废发票吗？" hide-icon 
                            v-if="scope.row.status == 98 || scope.row.status == 99"
                            @confirm="invoiceHandler(4)"
                        >
                            <el-button
                                size="mini"
                                type="primary"
                                @click="handleAction(scope.row,'1')"
                                style="display:block;margin: 4px auto;"
                                slot="reference"
                            >
                                撤销作废
                            </el-button>
                        </el-popconfirm>
                        <el-button
                            size="mini"
                            type="danger"
                            @click="handleAction(scope.row,'2')"
                            style="display:block;margin: 4px auto;"
                            v-if="scope.row.status == 2 || scope.row.status == 3"
                        >
                            作废发票
                        </el-button>
                        <el-popconfirm title="确定要撤销作废发票吗？" hide-icon v-if="scope.row.status == 98" @confirm="invoiceHandler(5)">
                            <el-button
                                size="mini"
                                type="danger"
                                @click="handleAction(scope.row,'3')"
                                style="display:block;margin: 4px auto;"
                                slot="reference"
                            >
                                确认作废
                            </el-button>
                        </el-popconfirm>
                    </template>
                </el-table-column>
                <el-table-column label="发票ID" width="180" prop="id"></el-table-column>
                <el-table-column
                    label="开票状态"
                    width="180"
                >
                    <template slot-scope="scope">
                        <p>{{ applyStatus[scope.row.status] }}</p>
                    </template>
                </el-table-column>
                <el-table-column
                    label="发票号码/日期"
                    width="180"
                >
                    <template slot-scope="scope">
                        <p>{{ scope.row.invoiceNum }}</p>
                        <p>{{ scope.row.openInvoiceDate }}</p>
                    </template>
                </el-table-column>
                <el-table-column
                    label="开票金额"
                    width="180"
                >
                    <template slot-scope="scope">
                        <p>{{ scope.row.money }}</p>
                        <p>共{{ scope.row.amount }}单</p>
                    </template>
                </el-table-column>
                <el-table-column
                    label="公司名"
                    width="180"
                >
                    <template slot-scope="scope">
                        <p>{{ scope.row.company }}</p>
                    </template>
                </el-table-column>
                <el-table-column
                    label="发票要求"
                    width="180"
                >
                    <template slot-scope="scope">
                        <p>销货清单:{{ scope.row.needList == 0 ? '不需要' : '需要' }}</p>
                    </template>
                </el-table-column>
                <el-table-column
                    label="快递信息"
                    width="180"
                >
                    <template slot-scope="scope">
                        <p>{{ scope.row.expressType }}</p> 
                        <p>{{ scope.row.expressNum }}</p>
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
                    label="所属区域平台"
                    width="180"
                >
                    <template slot-scope="scope">
                        <p>{{ scope.row.sysOrgCode }}</p>
                    </template>
                </el-table-column>
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
                    label="开票人"
                    width="180"
                >
                    <template slot-scope="scope" v-if="scope.row.openInvoiceTime">
                        <p>{{ scope.row.openInvoiceUserName + '/' + scope.row.openInvoiceUserPhone }}</p>
                        <p>{{ scope.row.openInvoiceTime }}</p>
                    </template>
                </el-table-column>
                <el-table-column
                    label="作废人"
                    width="180"
                >
                    <template slot-scope="scope" v-if="scope.row.cancelInvoiceTime">
                        <p>{{ scope.row.cancelInvoiceUserName + '/' + scope.row.cancelInvoiceUserPhone }}</p>
                        <p>{{ scope.row.cancelInvoiceTime }}</p>
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

        <!-- 邮寄发票弹窗 -->
        <el-dialog
            title="邮寄发票"
            :visible.sync="sendVisible"
            width="30%"
            class="make_out_dialog"
        >
            <h5 style="fontWeight:bold;">收件人信息</h5>
            <p class="flex">{{itemData.mailInvoiceUserName}}，{{itemData.mailInvoiceUserPhone}}，{{itemData.mailInvoiceUserAddress}}</p>
            <h5>邮寄发票：</h5>
            <el-form :model="itemData" label-width="100px" :rules="rules" ref="sendForm">
                <el-form-item label="快递名称:" prop="expressType" style="width: 56%">
                    <el-select v-model="itemData.expressType" placeholder="选择快递公司">
                        <el-option label="区域一" value="1"></el-option>
                        <el-option label="区域二" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="快递单号:" prop="expressNum" style="width: 56%">
                    <el-input v-model="itemData.expressNum"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer flex_cn">
                <el-button type="primary" @click="sendSubmit('sendForm')">保 存</el-button>
                <el-button @click="sendVisible = false">取 消</el-button>
            </span>
        </el-dialog>

        <!-- 作废开票弹窗 -->
        <el-dialog
            title="作废开票"
            :visible.sync="cancelVisible"
            width="30%"
        >
            <p class="flex">
                <span>备注：</span>
                <el-input
                    type="textarea"
                    placeholder="请备注作废理由"
                    v-model="itemData.remark"
                    maxlength="50"
                    show-word-limit
                    class="flex_item"
                >
                </el-input>
            </p>
            <span slot="footer" class="dialog-footer flex_cn">
                <el-button type="primary" @click="invoiceHandler(3,'cancelVisible')">确 定</el-button>
                <el-button @click="cancelVisible = false">取 消</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
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
            applyStatusList: [{
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
            }], // 开票状态列表
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
            sendVisible: false, // 是否展示开票弹窗
            cancelVisible: false, // 是否展示作废开票弹窗
            itemData: {}, // 选中订单数据
            detailList: [
                {
                    orderNum: '1231321321',
                    payMethod: '企业支付',
                    status: '待受理',
                    amount: '11111',
                    rate: '0.04',
                    totalPrice: '10022',
                    tax: '222',
                    number: '123132',
                    data: '2021-02-06 11:30:58'
                }
            ], // 销项明细
            searchInfo: {
                invoiceSn: '', // 申请编号
                invoiceNum: '', // 发票号码
                id: '', // 发票ID
                applyMan: '', // 用户/公司名称
                sysOrgCode: '', // 所属平台
                invoiceType: '', // 发票类型
                needList: '', // 是否要清单
                status: '', // 开票状态
                applyStartTime: '', // 申请开始时间
                applyEndTime: '', // 申请结束时间
                openInvoiceStartDate: '', // 开票开始日期
                openInvoiceEndDate: '', // 开票结束日期
                mold: 1, // 已开发票
            }, // 查询条件信息
            rules: {
                expressType: [
                    { required: true, message: '请选择快递公司', trigger: 'blur' }
                ],
                expressNum: [
                    { required: true, message: '请输入快递单号', trigger: 'blur' }
                ]
            },
        }
    },
    created () {
        this.searchFn();
        // for (let i = 0; i < 22; i++) {
        //     this.tableData.push({
        //         company: '深圳德坤物流有限公司',
        //         amount: '8888',
        //         type: '专票',
        //         status: '待受理',
        //         already: i,
        //         totalAmount: 88888,
        //         tax: 666,
        //         requirement: '开票要求',
        //         platform: '广州战区',
        //         name: '王小虎',
        //         phone: '18888888888',
        //         date: '2016-05-02 11:10:36',
        //         userCompany: '满货运有限公司'
        //     });
        // }
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
                ...this.searchInfo
            }).then(res => {
                console.log('开票申请',res);
                this.tableData = res.data.data.result;
            }).finally(() => {})
        },
        // 点击重置
        resetFn () {
            let arr = ['invoiceSn','invoiceNum','id','applyMan','sysOrgCode','invoiceType','needList','status','applyStartTime','applyEndTime','openInvoiceStartDate','openInvoiceEndDate'];
            arr.forEach(item => {
                this['searchInfo'][item] = '';
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
        /**
         * 按钮点击事件处理
         * @param {Object} val 当前选中订单数据
         * @param {String} type 操作类型, '0':邮寄发票, '1':撤销作废, '2':作废发票, '3':确认作废
         */
        handleAction (val,type) {
            let arr = ['sendVisible','','cancelVisible'];
            this.itemData = val;
            if (arr[type]) this[arr[type]] = true;
        },
        // 邮寄发票弹窗点击保存
        sendSubmit (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.invoiceHandler(1,'sendVisible');
                } else {
                    return false;
                }
            });
        },
        // 发票操作
        invoiceHandler (type,visible) {
            this.$api.invoiceAction({
                ...this.itemData,
                type
            }).then(res => {
                this.searchFn();
                if (visible) this[visible] = false;
                this.$message({
                    message: '操作成功',
                    type: 'success'
                });
            }).finally(() => {})
        }
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