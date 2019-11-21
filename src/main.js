// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//vant
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.prototype.$http=axios
import Vant from 'vant';
import 'vant/lib/index.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
Vue.prototype.$echarts=echarts

Vue.use(Vant);
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  echarts,
  router,
  store,
  components: { App },
  template: '<App/>'
})
