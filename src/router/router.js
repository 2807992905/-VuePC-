//导入Vue
import Vue from 'vue'
//导包
import VueRouter from 'vue-router'
//导入登录模块
import login from '../views/login/login.vue'
//Use一下 注册
Vue.use(VueRouter)
//规则
const routes=[
    {
        path:"/login",
        component:login
    },
    {
        path:"/",
        component:login
    },
]
const router = new VueRouter({
    routes
})
//暴露出去
export default router