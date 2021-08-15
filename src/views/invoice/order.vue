<template>
    <div class="invoice_apply_container column" ref="apply_container">
        <div class="invoice_search_box" ref="search_box">
            <el-form class="demo-form-inline" :inline="true" :model="searchInfo">
                <el-form-item>
                    <el-input placeholder="订单号" v-model="searchInfo.orderNo"></el-input>
                </el-form-item>
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
                    <el-input placeholder="公司名称" v-model="searchInfo.applyMan"></el-input>
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
                <el-table-column label="订单号" width="180" prop="orderNo"></el-table-column>
                <el-table-column label="开票申请编码" width="180" prop="invoiceSn"></el-table-column>
                <el-table-column label="开票金额" width="180" prop="money"></el-table-column>
                <el-table-column label="发票ID" width="180" prop="id"></el-table-column>
                <el-table-column label="发票号码" width="180" prop="invoiceNum"></el-table-column>
                <el-table-column label="开票日期" width="180" prop="openInvoiceDate"></el-table-column>
                <el-table-column label="订单总费用" width="180" prop="orderAmount"></el-table-column>
                <el-table-column label="税金" width="180" prop="taxMoney"></el-table-column>
                <el-table-column
                    label="支付方式"
                    width="180"
                >
                    <template slot-scope="scope">
                        <p>{{ scope.row.payMethod }}</p>
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
                    label="发票类型"
                    width="180"
                >
                    <template slot-scope="scope">
                        <p>{{ scope.row.invoiceType }}</p>
                    </template>
                </el-table-column>
                <el-table-column
                    label="开票人"
                    width="180"
                >
                    <template slot-scope="scope"  v-if="scope.row.openInvoiceTime">
                        <p>{{ scope.row.openInvoiceUserName + '/' + scope.row.openInvoiceUserPhone }}</p>
                        <p>{{ scope.row.openInvoiceTime }}</p>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="240" fixed="right">
                    <template slot-scope="scope">
                        <el-button
                            size="mini"
                            @click="handleDetail(scope.$index, scope.row)"
                        >
                            订单详情
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

        <!-- 订单详情弹窗 -->
        <el-dialog
            :visible.sync="detailVisible"
            width="75%"
            class="order_detail_box"
        >
            <p class="flex main_info">
                <span>订单编号: 132132132123123</span>
                <span>线路产品: 广州德坤同星</span>
                <span>预计到达时间: 2021-53-21</span>
                <span>订单类型: 专线</span>
            </p>
            <h5 class="flex">收发货信息</h5>
            <el-table
                :data="[deliverInfo]"
                style="width: 100%"
                :header-cell-style="{'text-align': 'center','background':'#f8f8f8'}"
                :cell-style="{'text-align': 'center'}"
                border
            >
                <el-table-column prop="sendMan" label="收发货信息" width="180"></el-table-column>
                <el-table-column prop="sendAddress" label="发货地址" width="180"></el-table-column>
                <el-table-column prop="sendPhone" label="手机号" width="180"> </el-table-column>
                <el-table-column prop="arriveMan" label="收货人" width="180"> </el-table-column>
                <el-table-column prop="arriveAddress" label="收货地址" width="180"> </el-table-column>
                <el-table-column prop="arrivePhone" label="手机号"> </el-table-column>
            </el-table>
            <h5 class="flex">货物信息</h5>
            <el-table
                :data="[goodsInfo]"
                style="width: 100%"
                :header-cell-style="{'text-align': 'center','background':'#f8f8f8'}"
                :cell-style="{'text-align': 'center'}"
                border
            >
                <el-table-column prop="name" label="货物名称" width="180"></el-table-column>
                <el-table-column prop="type" label="货物类型" width="180"></el-table-column>
                <el-table-column prop="num" label="件数" width="180"> </el-table-column>
                <el-table-column prop="weight" label="重量（千克）" width="180"> </el-table-column>
                <el-table-column prop="volume" label="体积（方）" width="180"> </el-table-column>
                <el-table-column prop="packaging" label="包装"> </el-table-column>
            </el-table>
            <h5 class="flex">提货信息</h5>
            <el-table
                :data="[pickupInfo]"
                style="width: 100%"
                :header-cell-style="{'text-align': 'center','background':'#f8f8f8'}"
                :cell-style="{'text-align': 'center'}"
                border
            >
                <el-table-column prop="type" label="提货类型" width="180"></el-table-column>
                <el-table-column label="提货信息">
                    <template slot-scope="scope">
                        <p>预约时间: {{ scope.row.appointTime }}</p>
                        <p>车型: {{ scope.row.carType }}</p>
                    </template>
                </el-table-column>
                <el-table-column prop="schedule" label="调度信息" width="180"></el-table-column>
                <br />
                <el-table-column label="装车图片" width="180">
                    <template slot-scope="scope">
                        <img :src="scope.row.carImg" alt="装车图片">
                    </template>
                </el-table-column>
                <el-table-column label="称重复核图片" width="180">
                    <template slot-scope="scope">
                        <img :src="scope.row.weightImg" alt="装车图片">
                    </template>
                </el-table-column>
                <el-table-column prop="time" label="时间" width="180"></el-table-column>
            </el-table>
            <h5 class="flex">增值服务信息</h5>
                <el-table
                    :data="[serviceInfo]"
                    style="width: 100%"
                    :header-cell-style="{'text-align': 'center','background':'#f8f8f8'}"
                    :cell-style="{'text-align': 'center'}"
                    border
                >
                    <el-table-column prop="receipt" label="回单"></el-table-column>
                    <el-table-column label="保险">
                        <template slot-scope="scope">
                            <span>声明价值: {{ scope.row.value }}</span>
                            <span>保费: {{ scope.row.premium }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="packaging" label="包装"></el-table-column>
                    <br />
                    <el-table-column prop="unload" label="卸货"></el-table-column>
                    <el-table-column prop="upstairs" label="上楼"></el-table-column>
                </el-table>
                <el-table
                    :data="[serviceInfo]"  
                    style="width: 100%;border-top:none;"
                    :header-cell-style="{'text-align': 'center','background':'#f8f8f8'}"
                    :cell-style="{'text-align': 'center'}"
                    border
                >
                    <el-table-column prop="delivery" label="送货进仓"></el-table-column>
                    <el-table-column prop="alien" label="异形"></el-table-column>
                    <el-table-column prop="install" label="安装"></el-table-column>
                    <el-table-column prop="control" label="控货"></el-table-column>
                    <el-table-column prop="collect" label="代收货款"></el-table-column>
                </el-table>
            <h5 class="flex">物流状态</h5>
            <el-timeline>
                <el-timeline-item
                    v-for="(activity, index) in deliveryStatus"
                    :key="index"
                    :timestamp="activity.timestamp"
                    color="#67c23a"
                >
                    {{activity.content}}
                </el-timeline-item>
            </el-timeline>
            <h5 class="flex">工单信息</h5>
            <h5 class="flex">费用明细</h5>
            <h5 class="flex">改单详情</h5>
            <h5 class="flex no_before">操作信息</h5>
            <el-table
                :data="[operationInfo]"  
                style="width: 100%;"
                :header-cell-style="{'text-align': 'center','background':'#f8f8f8'}"
                :cell-style="{'text-align': 'center'}"
                border
            >
                <el-table-column prop="orderNum" label="订单号"></el-table-column>
                <el-table-column prop="type" label="改单类型"></el-table-column>
                <el-table-column label="操作人">
                    <template slot-scope="scope">
                        <span>{{ scope.row.person + '/' + scope.row.phone }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="time" label="申请时间"></el-table-column>
            </el-table>
            <h5 class="flex no_before">修改内容</h5>
            <el-table
                :data="[resetInfo]"  
                style="width: 100%;"
                :header-cell-style="{'text-align': 'center','background':'#f8f8f8'}"
                :cell-style="{'text-align': 'center'}"
                border
            >
                <el-table-column prop="name" label="字段名称"></el-table-column>
                <el-table-column prop="before" label="修改前"></el-table-column>
                <el-table-column prop="after" label="修改后"></el-table-column>
            </el-table>
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
            detailVisible: true, // 是否展示开票详情弹窗
            itemData: [''], // 选中订单数据
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
                orderNo: '', // 订单号
                invoiceSn: '', // 申请编号
                id: '', // 发票ID
                invoiceNum: '', // 发票号码
                applyMan: '', // 用户/公司名称
                sysOrgCode: '', // 所属平台
                invoiceType: '', // 发票类型
                status: '', // 开票状态
                applyStartTime: '', // 申请开始时间
                applyEndTime: '', // 申请结束时间
                openInvoiceStartDate: '', // 开票开始日期
                openInvoiceEndDate: '', // 开票结束日期
            },
            deliverInfo: {
                sendMan: '张三',
                sendAddress: '广东省广州市白云区华邦冷链仓储物流园',
                sendPhone: '18888888888',
                arriveMan: '李四',
                arriveAddress: '广东省广州市白云区华邦冷链仓储物流园',
                arrivePhone: '18888888888',
            }, // 收发货信息
            goodsInfo: {
                name: '张三',
                type: '广东省广州市白云区华邦冷链仓储物流园',
                num: '18888888888',
                weight: '李四',
                volume: '广东省广州市白云区华邦冷链仓储物流园',
                packaging: '18888888888',
            }, // 货物信息
            pickupInfo: {
                type: '广东省广州市白云区华邦冷链仓储物流园',
                appointTime: '张三',
                carType: '火车',
                schedule: '18888888888',
                carImg: 'http://via.placeholder.com/60x40',
                weightImg: 'http://via.placeholder.com/60x40',
                time: '18888888888',
            }, // 提货信息
            serviceInfo: {
                receipt: '电子回单',
                value: '3000',
                premium: '5',
                packaging: '纸箱',
                unload: '无',
                upstairs: '有电梯',
                delivery: '无',
                alien: '无',
                install: '无',
                control: '无',
                collect: '无'
            }, // 增值服务信息
            deliveryStatus: [
                {
                    content: '活动按期开始',
                    timestamp: '2018-04-15'
                }, {
                    content: '通过审核',
                    timestamp: '2018-04-13'
                }, {
                    content: '创建成功',
                    timestamp: '2018-04-11'
                }
            ],
            operationInfo: {
                orderNum: '546546542',
                type: '应收改单',
                person: '张三',
                phone: '18888888888',
                time: '2021-06-21 11:20:21'
            }, // 操作信息
            resetInfo: {}, // 修改内容
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
            this.$api.invoiceDetailList({
                pageSize: this.pageSize,
                pageNum: this.currentPage,
                ...this.searchInfo
            }).then(res => {
                console.log('点击查询',res);
                this.tableData = res.data.data.records;
            }).finally(() => {})
        },
        // 点击重置
        resetFn () {
            let arr = ['userName','platform','applyCode','applyStatus','invoiceType','orderType','applyStartTime','applyEndTime'];
            arr.forEach(item => {
                this[item] = '';
            });
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
        // 点击详情
        handleDetail () {
            this.detailVisible = true; 
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

        .inline-input {
            margin: 0 12px 12px 0;
        }

        button {
            margin-bottom: 12px;
        }
    }

    .order_detail_box {

        /deep/.el-dialog__header {
            display: none;
        }

        .main_info span {
            margin-right: 30px;
        }

        h5 {
            font-weight: bold;

            &::before {
                content: '';
                display: block;
                width: 3px;
                height: 10px;
                border-radius: 2px;
                background-color: rgb(64,158,255);
                margin-right: 6px;
            }
        }

        .no_before::before {
            background-color: transparent;
        }
    }
}
</style>