<template>
<div>
<div data-v-867e5006="" class="mu-appbar mu-paper-1"><div class="left"><button @click="toggle(true)" data-v-867e5006="" class="mu-icon-button" type="button" tabindex="0" style="-webkit-user-select: none; outline: none; cursor: pointer; -webkit-appearance: none;"><div class=""><div class="mu-ripple-wrapper"></div> <i class="mu-icon material-icons">menu</i> <!----></div></button></div> <div class="mu-appbar-title"><span>网站后台管理系统</span></div></div>



    <mu-drawer :open="open" :docked="docked" @close="toggle()">
      <mu-list @itemClick="docked ? '' : toggle()">
    <mu-list-item title="商品列表" @click="lists()">
      <mu-icon slot="left" value="inbox"/>
    </mu-list-item >
          <mu-list-item title="商品详情" @click="apple()">
              <mu-icon slot="left" value="grade"/>
          </mu-list-item>
    <mu-list-item title="订单信息" @click="orderForm()">
      <mu-icon slot="left" value="drafts"/>
    </mu-list-item>

      <mu-divider />
    <mu-list-item title="退出登录">
      <mu-icon slot="left" value="send"/>
    </mu-list-item>

      </mu-list>
    </mu-drawer>
</div>
</template>

<script>
export default {
  data () {
    return {
      open: false,
      docked: true
    }
  },
  methods: {
     toggle (flag) {
      this.open = !this.open
      this.docked = !flag
    },
      apple(){
         console.log(123)
          this.$router.push({name:'goodDetails'})
      },
      lists(){
          this.$router.push({name:'goodsList'})
      },
      orderForm(){
          this.$router.push({name:'orderForm'})
      }
  }
}
</script>