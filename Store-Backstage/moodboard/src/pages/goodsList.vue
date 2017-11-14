<template>
<div>
    <drawer></drawer>
    <div class="content">
        <el-row>
            <el-col :span="6" v-for="(goodItem,index) in goodlist"  :offset="index > 0 ? 0 : 0">
                <el-card :body-style="{ padding: '2px 2px' }">
                    <img :src="goodItem.images[0]"  class="img-responsive">
                    <div style="padding: 14px;">
                        <span>{{goodItem.goodName}}</span>
                        <div class="bottom clearfix">
                            <time class="time">{{ goodItem.datetime }}</time>
                            <el-button type="text" class="button">编辑商品</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>

</div>

</template>

<script>
import header1 from '@/components/header'
import drawer from '@/components/drawer'
import axios from 'axios'
import instance from '@/assets/http'
export default {
  name: 'index',
  data(){
    return{
        currentDate: new Date()
    }
  },
  components:{
      header1,
      drawer
  },
  create(){


     console.log(23131231);




  },
  mounted(){
this.$store.dispatch('getgoods')
    console.log(this.goodlist)
  }
  ,
    computed: {
        goodlist()
        {
            return this.$store.state.goodlist
        }

    }
}
</script>

<style scoped>
    .content{
        width: 1000px;
        height: 100%;
        margin: 0 auto;
    }
    .img-responsive {
  display: inline-block;
  height: 200px;
  max-width: 100%;
}
</style>
