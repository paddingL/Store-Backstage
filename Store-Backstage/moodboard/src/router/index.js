import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/pages/index'
import goodsList from '@/pages/goodsList'
import goodDetails from '@/pages/goodDetails'
import orderForm from '@/pages/orderForm'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index

    },{
      path: '/goodsList',
      name: 'goodsList',
      component: goodsList

    },{
            path: '/goodDetails',
            name: 'goodDetails',
            component: goodDetails

          },{
                        path: '/orderForm',
                        name: 'orderForm',
                        component: orderForm

                      }
  ],

})
