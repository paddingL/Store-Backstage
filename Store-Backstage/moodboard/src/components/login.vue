<template>
    <div class="container">
        <div class="content">
            <div class="main">
                <mu-text-field label="用户名" v-model="userName" hintText="请输入账户" type="text" labelFloat/>
                <br/>
                <mu-text-field label="密码" v-model="password" hintText="请输入密码" type="password" labelFloat/>
                <br/>
                <p class="forgot">
                    Forgot your password?
                </p>
                <mu-switch label="Remember" v-model="toggle" class="demo-switch"/>
                <div style="margin-top: 40px">
                    <mu-raised-button @click="login" label="Sign in" class="demo-raised-button" primary/>
                </div>

            </div>

        </div>
        <p class="errTitle">
            {{errTitle}}
        </p>
        <p class="to-register">
            Not a registered user yet?
            <a>Sign up now</a>
        </p>
    </div>


</template>
<style scoped>
    .container {
        width: 600px;
        height: 400px;
        background: #f5f5f5;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -200px;
        margin-left: -300px;
        box-shadow: #9b9595 2px 2px 20px;
    }

    .content {
        width: 600px;
        height: 400px;
        margin-top: 50px;
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

    export default {
        data() {
            return {
                userName: '',
                password: '',
                toggle: true,
                errTitle:'',
            }
        },
        create() {


        },
        mounted() {
            this.$store.dispatch('test')

        },
        methods: {
            login(){
                var data={username:this.userName,password:this.password};
                instance.post('/login',data).then((response) => {
                    if(response.data.code==1){
                    console.log(response.data.token)
                        localStorage.setItem("token",response.data.token);
                        this.$router.push({name:'goodsList'})
                    }else{
                      this.errTitle=response.data.message
                      return false
                    }

                }, (err) => {
                    console.log(err)
                })
            }

    }
    ,
    computed: {
        test1()
        {
            return this.$store.state.projects
        }

    }
    }
</script>