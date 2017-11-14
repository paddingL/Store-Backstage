<template>
    <div>
        <drawer></drawer>

                    <el-table
                            :data="tableData"
                            style="width: 100%">
                        <el-table-column
                                prop="date"
                                label="日期"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="name"
                                label="姓名"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="地址">
                        </el-table-column>
                    </el-table>
               



    </div>


</template>
<style scoped>

    .container {
        width: 600px;
        height: 400px;

        position: absolute;
        top:50%;
        left: 50%;
        margin-top: -200px;
        margin-left: -300px;

    }

    .content {
        width: 600px;
        height: 400px;

    }

    .forgot {

    }

    .main {

    }
    .errTitle{
        color:red;
        height:20px
    }
    .to-register {
        cursor: pointer;
    }
</style>
<script>
    import drawer from '@/components/drawer'
    export default {
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }

        },
        methods: {

        },
        components:{

            drawer
        },
    }
</script>