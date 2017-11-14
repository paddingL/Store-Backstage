<template>
<div>


    <div>
        <mu-toast v-if="toast" message="一段简单的文本"/>
    </div>
    <drawer></drawer>
    <div class="container">

        <div class="content">
            <div class="main">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="商品名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="商品价格">
                        <el-input v-model="form.money"></el-input>
                    </el-form-item>
                    <el-form-item label="商品描述">
                        <el-input v-model="form.describe"></el-input>
                    </el-form-item>
                    <el-form-item label="商品种类">
                        <el-input v-model="form.type"></el-input>
                    </el-form-item>
                    <el-form-item label="推荐">
                        <el-checkbox-group v-model="form.brage">
                            <el-checkbox label="是否精品" name="brage"></el-checkbox>
                            <el-checkbox label="是否热销" name="brage"></el-checkbox>
                            <el-checkbox label="是否新品" name="brage"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="图片上传">
                           <input type="file"  @change="getFile($event)" multiple>

                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">立即创建</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>

            </div>

        </div>

    </div>

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
    import axios from 'axios'
    import instance from '@/assets/http'
    import drawer from '@/components/drawer'
    export default {
        data() {
            return {
                form: {
                        name: '',
                        describe:'',
                        money:'',
                        brage: [],
                        type:'',
                        fileList:[],


                     },
                     toast: false,
                    dialogImageUrl: '',
                    dialogVisible: false
                }

        },
        methods: {
        getFile(event) {
        console.log(event.target.files)
            this.form.fileList = event.target.files;

          },
        open() {
        this.$message('上传成功');
      },
        showToast () {
          this.toast = true
          if (this.toastTimer) clearTimeout(this.toastTimer)
          this.toastTimer = setTimeout(() => { this.toast = false }, 2000)
        },
            onSubmit() {
            let formData = new FormData();
            formData.append('name', this.form.name);
            formData.append('describe', this.form.describe);
            formData.append('money', this.form.money);
            formData.append('brage', this.form.brage);
            formData.append('type', this.form.type);

            Array.from(this.form.fileList).forEach(function(file,index){
                  formData.append("file"+index,file);//循环遍历把文件对象插到formData对象上
           });
                 console.log(formData)
                instance.post('/upload',formData).then((response) => {
                    if(response.data.code==1){
                    console.log(response.data)
                      this.open()
                    }else{
                      this.errTitle=response.data.message
                      return false
                    }

                }, (err) => {
                    console.log(err)
                })
            }
        },
    components:{

            drawer
    },
    }
</script>