//导入Vue
import Vue from 'vue'
import App from './App.vue'
//导入接收 路由
import router from './router/router.js'
//导入ElementUI组件
import ElementUI from 'element-ui';
//导入饿了么 的样式
import 'element-ui/lib/theme-chalk/index.css';
//导入axios
// import axios from 'axios'
//注册一下
Vue.use(ElementUI);
// Vue.prototype.$axios=axios
// //axios的基地地址
// axios.defaults.baseURL=""
//导入全局样式
import base from './style/base.css'
Vue.use(base);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //挂载到vue示例上 router
  router
}).$mount('#app')
