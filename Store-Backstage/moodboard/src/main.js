// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import '../static/css/muse-ui.css';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store';
import config from './config';

window.config=config
Vue.use(ElementUI)
Vue.use(MuseUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  store,
  components: { App }
})
