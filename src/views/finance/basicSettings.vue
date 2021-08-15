<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="结算设置" name="first">
                <settlement/>
            </el-tab-pane>
            <el-tab-pane label="佣金设置" name="second">
                <commission/>
            </el-tab-pane>
            <el-tab-pane label="系统配置" name="third">
                <system/>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import settlement from "../../components/finance/settlement"
    import commission from "../../components/finance/commission"
    import system from "../../components/finance/system"
    export default {
        name: "basicSettings",
        components: {
            settlement,
            commission,
            system
        },
        data() {
            return {
                activeName: 'first'
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>

<style scoped>

</style>
